import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';

const PhotoModal = ({ url, onClose }) => {
  return (
    <Dialog open={!!url} onClose={onClose}>
      <img role='presentation' src={url} alt={'image full width'} onClick={onClose} />
    </Dialog>
  );
};

PhotoModal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PhotoModal;
