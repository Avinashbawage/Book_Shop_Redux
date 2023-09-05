import Buybook1 from "./action";

const initialState = {
  noofbook: 100
};

const BuyBook_1 = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_BOOK":
      return { ...state, noofbook: state.noofbook + 1 };

    default:
      return state;
  }
};

export default BuyBook_1;
