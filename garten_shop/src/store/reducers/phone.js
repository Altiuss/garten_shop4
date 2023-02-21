const initialState = {
  telephoneNumbers: [],
};

const ADD_TELEPHONE_NUMBER = "ADD_TELEPHONE_NUMBER";

export const addTelephoneNumber = (telephoneNumber) => ({
  type: ADD_TELEPHONE_NUMBER,
  telephoneNumber,
});

export const telephoneNumbersReducer = (state = initialState, action) => {
  if (action.type === ADD_TELEPHONE_NUMBER) {
    return {
      ...state,
      telephoneNumbers: [...state.telephoneNumbers, action.telephoneNumber],
    };
  } else {
    return state;
  }
};
