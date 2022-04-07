import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPhotos } from '../store/actions/photos';
import { useDispatch } from 'react-redux';

const PhotoSearch = () => {
  const [id, setId] = useState('');
  const { photos, isLoading } = useSelector((store) => store.photos);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    let newValue = value.replace(/[^0-9]/g, '');
    if (+newValue > 100) {
      newValue = 100;
    }
    setId(newValue);
  };

  const handleSearch = () => {
    dispatch(getPhotos(id));
  };

  const isSearchDisabled = !id || (photos.length > 0 && +photos[0].albumId === +id);

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
      <TextField label='Enter numbers from 1 to 100' value={id} onChange={handleChange} />
      <Button
        sx={{ width: 150 }}
        size='large'
        variant='contained'
        color='primary'
        onClick={handleSearch}
        disabled={isSearchDisabled || isLoading}>
        {isLoading ? 'Loading...' : 'Get Photos'}
      </Button>
    </Box>
  );
};

export default PhotoSearch;
