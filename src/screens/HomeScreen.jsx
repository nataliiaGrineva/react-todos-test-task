import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Button component={Link} color="primary" variant="contained" to="todos">
        Todos
      </Button>
      <Button component={Link} color="primary" variant="contained" to="photos">
        Photos
      </Button>
      <Button component={Link} color="primary" variant="contained" to="/todos/11">
        Todo
      </Button>
      <Button component={Link} color="primary" variant="contained" to="/">
        Home
      </Button>
    </div>
  );
}

export default HomeScreen;
