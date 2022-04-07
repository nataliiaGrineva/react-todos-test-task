import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import CreateTodo from '../components/CreateTodo';
import TodosFilters from '../components/TodosFilters';
import TodosList from '../components/TodosList';

function TodosScreen() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 600 }}>
      <Box
        sx={{
          minWidth: 600,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
        <Button variant='contained' color='primary' onClick={handleBack}>
          Back
        </Button>
        <h1>Todos</h1>
      </Box>
      <CreateTodo />
      <TodosFilters />
      <TodosList />
    </Box>
  );
}

export default TodosScreen;
