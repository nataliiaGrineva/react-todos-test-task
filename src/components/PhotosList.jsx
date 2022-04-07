import { Box } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PhotoListItem from './PhotoListItem';
import PhotoModal from './PhotoModal';

const PhotosList = () => {
  const { photos } = useSelector((store) => store.photos);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openSelectedPhoto = (url) => {
    setSelectedPhoto(url);
  };

  const onClose = () => setSelectedPhoto(null);

  return photos.length > 0 ? (
    <>
      {selectedPhoto && <PhotoModal url={selectedPhoto} onClose={onClose} />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} card={photo} openSelectedPhoto={openSelectedPhoto} />
        ))}
      </Box>
    </>
  ) : (
    <h2>No photos found in album</h2>
  );
};

export default PhotosList;
