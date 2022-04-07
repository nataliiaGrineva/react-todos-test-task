import PropTypes from 'prop-types';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const PhotoListItem = ({ card, openSelectedPhoto }) => {
  return (
    <Box>
      <Card
        variant='outlined'
        sx={{ width: 345, height: 400, cursor: 'pointer' }}
        onClick={() => openSelectedPhoto(card.url)}>
        <CardContent>
          <CardMedia component='img' height='auto' image={card.thumbnailUrl} alt={card.title} />
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Title:
          </Typography>
          <Typography variant='p' component='div'>
            {card.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PhotoListItem;

PhotoListItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  openSelectedPhoto: PropTypes.func.isRequired
};
