import { Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <Box sx={{ display: 'flex', margin: '0 auto', width: 300, justifyContent: 'space-between' }}>
        <Button size='large' component={Link} color='primary' variant='contained' to='todos'>
          Todos
        </Button>
        <Button size='large' component={Link} color='primary' variant='contained' to='photos'>
          Photos
        </Button>
      </Box>
    </Container>
  );
}

export default HomeScreen;
