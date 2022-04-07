import axios from 'axios';
import { GET_PHOTOS, LOADING_PHOTOS } from '../types';

export const loadingPhotos = (isLoading) => ({ type: LOADING_PHOTOS, payload: isLoading });

export const getPhotos = (id) => async (dispatch) => {
  dispatch(loadingPhotos(true));

  try {
    const config = {
      params: {
        albumId: id
      }
    };

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos`, config);
    dispatch({
      type: GET_PHOTOS,
      payload: data
    });
  } catch (error) {
    console.warn(error);
  } finally {
    dispatch(loadingPhotos(false));
  }
};
