import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos } from '../store/actions/todos';

const filters = ['all', 'todo', 'done'];

const TodosFilters = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.todos);

  const handleFilter = (e) => {
    dispatch(filterTodos(e.target.name));
  };

  return (
    <Box>
      {filters.map((item) => (
        <Button
          key={item}
          name={item}
          variant="outlined"
          color={item !== filter ? 'primary' : 'success'}
          onClick={handleFilter}>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default TodosFilters;
