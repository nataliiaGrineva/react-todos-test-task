import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import PhotoSearch from '../components/PhotoSearch';
import PhotosList from '../components/PhotosList';

function PhotosScreen() {
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
        <h1>Photos</h1>
      </Box>
      <PhotoSearch />
      <PhotosList />
    </Box>
  );
}

export default PhotosScreen;
