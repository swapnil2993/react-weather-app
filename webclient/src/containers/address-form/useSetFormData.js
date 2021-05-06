import { useReducer } from 'react'

const initialState = {
  street: '',
  zip: '',
  city: '',
  state: ''
}

const useSetFormData = () => {
  return useReducer((state, action) => {
    console.log(action)
    switch (action.type) {
      case 'RESET_FORM':
        return {
          ...state,
          ...initialState
        }
      case 'STREET':
        return {
          ...state,
          street: action.payload
        }
      case 'CITY':
        return {
          ...state,
          city: action.payload
        }
      case 'ZIP':
        return {
          ...state,
          zip: action.payload
        }
      case 'STATE':
        return {
          ...state,
          state: action.payload
        }
      default:
        return state
    }
  }, initialState)
}

export default useSetFormData;
