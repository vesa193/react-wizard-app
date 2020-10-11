import * as types from "../types/Feature1Types";

const INITIAL_STATE = {
  dummyData: null,
  selectedId: null,
  subgenres: []
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    // case types.GET_DUMMY_DATA_REQUEST:
    //   return {
    //     ...state,
    //     // ...action.data
    //   };

    // case types.GET_DUMMY_DATA_RECEIVE:
    //   return {
    //     ...state,
    //     dummyData: action.data
    //   };

    case types.SET_DUMMY_DATA:
      return {
        ...state,
        dummyData: action.data
      };
    case types.SET_SELECTED_GENRE:
      return {
        ...state,
        selectedId: action.genreId
      };
    case types.SET_SUBGENRES_OF_GENRE:
      return {
        ...state,
        subgenres: action.subg
      };
    default:
      return state;
  }
};
