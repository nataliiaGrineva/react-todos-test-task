import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todos';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleCreateTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <Box
      sx={{
        margin: '30px auto',
        display: 'flex',
        maxWidth: 600,
        minWidth: 400,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <TextField label='Enter title' multiline maxRows={4} value={title} onChange={handleChange} />
      <Button
        size='large'
        variant='contained'
        color='primary'
        onClick={handleCreateTodo}
        disabled={!title}>
        add todo
      </Button>
    </Box>
  );
};

export default CreateTodo;
