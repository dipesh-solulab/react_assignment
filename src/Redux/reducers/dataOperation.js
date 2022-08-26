const initialState = {
  items: [],
};
const dataReducerPerform = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      console.log(state);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        items: state.items.filter((element) => element.id !== action.payload),
      };
    case "INFORMATION":
      return {
        ...state,
        items: [...state.items],
      };
    case "UPDATE":
      const { id, email, fname, mobile } = action.payload.updatedData;
      const existingData = state.items.find((element) => element.id === id);
      if (existingData) {
        existingData.email = email;
        existingData.fname = fname;
        existingData.mobile = mobile;
      }
    default:
      return state;
  }
};
export default dataReducerPerform;
