import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PropTypes from 'prop-types';

const TodoListItem = ({
  todo,
  handleOpenEdit,
  handleDeleteTodo,
  handleTodo,
  handleToggle,
  labelId
}) => (
  <ListItem
    key={todo.id}
    secondaryAction={
      <>
        <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEdit(todo)}>
          <BorderColorIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </>
    }
    style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
    disablePadding>
    <ListItemButton role={undefined} onClick={() => handleTodo(todo.id)} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
          onClick={(e) => handleToggle(e, todo.id)}
        />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: 'medium',
          letterSpacing: 0
        }}
        id={labelId}
        primary={`${todo.title}`}
      />
    </ListItemButton>
  </ListItem>
);

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }),
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
  handleTodo: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired
};

export default TodoListItem;
