const initialState = {
  photos: [],
  selectedPhoto: ''
};

const photos = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return { ...state };
  }
};

export default photos;
