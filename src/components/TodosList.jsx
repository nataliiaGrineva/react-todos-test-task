import { Button, Dialog, DialogTitle, List, Paper, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { changeStatusTodo, deleteTodo, setTodos } from '../store/actions/todos';
import { Box } from '@mui/system';
import { ListItemTheme } from '../themes/litItemTheme';
import { useNavigate } from 'react-router';
import TodoListItem from './TodoListItem';

const TodosList = () => {
  const { todos, filter } = useSelector((store) => store.todos);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState({
    isOpen: false,
    item: null
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = (e, id) => {
    e.stopPropagation();
    dispatch(changeStatusTodo(id));
  };

  const handleOpenEdit = (item) => {
    setIsOpenEditDialog({
      isOpen: true,
      item
    });
  };

  const handleCloseEdit = () => {
    setIsOpenEditDialog({
      isOpen: false,
      item: null
    });
  };

  const handleEditTodo = (e) => {
    setIsOpenEditDialog({
      ...isOpenEditDialog,
      item: { ...isOpenEditDialog.item, title: e.target.value }
    });
  };

  const handleSaveEditedTodo = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === isOpenEditDialog.item.id) {
        return isOpenEditDialog.item;
      }
      return todo;
    });

    dispatch(setTodos(newTodos));
    handleCloseEdit();
  };

  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));

  const handleTodo = (id) => {
    navigate(`${id}`);
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'todo':
        return todos.filter((todo) => !todo.checked);
      case 'done':
        return todos.filter((todo) => todo.checked);
      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <Paper sx={{ display: 'flex', justifyContent: 'center' }}>
      <ThemeProvider theme={ListItemTheme}>
        {isOpenEditDialog.isOpen && (
          <Dialog onClose={handleCloseEdit} open={isOpenEditDialog.isOpen}>
            <DialogTitle sx={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
              Edit todo
            </DialogTitle>
            <Box
              sx={{
                width: 300,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px'
              }}>
              <TextField value={isOpenEditDialog.item.title} onChange={handleEditTodo} />
              <Button color='success' variant='contained' onClick={handleSaveEditedTodo}>
                save
              </Button>
            </Box>
          </Dialog>
        )}

        <List sx={{ width: '100%', maxWidth: 560, minWidth: 560, bgcolor: 'background.paper' }}>
          {filteredTodos.length > 0 &&
            filteredTodos.map((todo) => {
              const labelId = `checkbox-list-label-${todo.id}`;

              return (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  labelId={labelId}
                  handleDeleteTodo={handleDeleteTodo}
                  handleToggle={handleToggle}
                  handleOpenEdit={handleOpenEdit}
                  handleTodo={handleTodo}
                />
              );
            })}
          {filteredTodos.length === 0 && <Typography variant='h3'>No Todos</Typography>}
        </List>
      </ThemeProvider>
    </Paper>
  );
};

export default TodosList;
