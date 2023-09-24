import photos from "mocks/photos"
import topics from "mocks/topics"
import { useReducer } from "react"

export const ACTIONS = {  
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  ADD_TO_FAV_PHOTOS: 'ADD_TO_FAV_PHOTOS', 
  REMOVE_FAV_PHOTOS: 'REMOVE_FAV_PHOTOS'
}

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.SET_SHOW_MODAL:
      return {
        ...state,
        showModel: action.payload
      }
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      }
    case ACTIONS.ADD_TO_FAV_PHOTOS:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload]
      }
    case ACTIONS.REMOVE_FAV_PHOTOS:
      return {
        ...state,
        favPhotos: state.favPhotos.filter((id) => id !== action.payload)
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}





const useApplicationData = () => {
  const initialState = {
    showModel: false,
    selectedPhoto: {},
    favPhotos: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);


  const setShowModal = (show) => {
    dispatch({ type: ACTIONS.SET_SHOW_MODAL, payload: show })
  };
  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo })
  };
  const addFav = (photoId) => {
    dispatch({ type: ACTIONS.ADD_TO_FAV_PHOTOS, payload: photoId })
  };
  const removeFav = (photoId) => {
    dispatch({ type: ACTIONS.REMOVE_FAV_PHOTOS, payload: photoId})
  }

  const toggleFav = (photoId) => {
    const active = state.favPhotos.includes(photoId);

    if (active) {
      removeFav(photoId);
    } else {
      addFav(photoId);
    }
  };
  return {

    state,
    setShowModal,
    setSelectedPhoto,
    addFav,
    removeFav,
    toggleFav,
    photos,
    topics
  }

}

export default useApplicationData;