import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

function TodoScreen() {
  const { todoId } = useParams();
  const todo = useSelector((store) => store.todos.todos.find((todo) => todo.id === todoId));

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return todo ? (
    <Box
      sx={{
        minWidth: 275,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
      <Card variant="outlined" sx={{ minWidth: 345 }}>
        <>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Title
            </Typography>
            <Typography variant="h5" component="div">
              {todo.title}
            </Typography>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Todo status
            </Typography>
            <Typography variant="h5" component="div">
              {todo.checked ? 'done' : 'todo'}
            </Typography>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Created at
            </Typography>
            <Typography variant="h5" component="div">
              {todo.createdAt.toString().slice(0, 10)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleBack}>
              Back
            </Button>
          </CardActions>
        </>
      </Card>
    </Box>
  ) : (
    <h2>Nothing here</h2>
  );
}

export default TodoScreen;
