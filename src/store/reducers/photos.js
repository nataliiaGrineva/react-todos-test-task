import { GET_PHOTOS, LOADING_PHOTOS } from '../types';

const initialState = {
  isLoading: false,
  photos: []
};

const photos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_PHOTOS:
      return {
        ...state,
        isLoading: payload
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: payload
      };
    default:
      return { ...state };
  }
};

export default photos;
