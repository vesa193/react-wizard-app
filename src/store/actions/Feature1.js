import * as types from "../types/Feature1Types";

//Replace action name and update action types
export const feature1ActionRequest = () => ({
  type: types.GET_DATA_REQUEST
});

export const feature1ActionReceive = payload => ({
  type: types.GET_DATA_REQUEST,
  payload
});

export const getDummyDataRequest = () => ({
  type: types.GET_DUMMY_DATA_REQUEST
});

export const getDummyDataReceive = data => ({
  type: types.GET_DUMMY_DATA_RECEIVE,
  data
});


export const setDummyData = data => ({
  type: types.SET_DUMMY_DATA,
  data
});

export const setSelectedGenre = genreId => ({
  type: types.SET_SELECTED_GENRE,
  genreId
});

export const setSubgenres = subg => ({
  type: types.SET_SUBGENRES_OF_GENRE,
  subg
});