// actionTypes
const SET_VALUES = 'SET_VALUES';

// actionCreators
export const setUserData = data => ({ type: SET_VALUES, payload: data });

// reducer
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  hasLocation: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_VALUES:
      const { firstName, lastName, email, phone, street, city, state: addressState } = payload;
      return {
        ...state,
        firstName,
        lastName,
        email,
        phone,
        street,
        city,
        state: addressState,
        hasLocation: true
      }
    default:
      return state;
  }
}