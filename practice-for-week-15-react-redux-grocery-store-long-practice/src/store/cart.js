import produceData from '../mockData/produce.json'

export default function cartReducer (state = {}, action) {
  switch (action.type) {
    case ADDPRODUCE:
      const key = action.produceId;
      const newState = {
        ...state,
        [key]: {
          id: key,
          count: 1
         }
      }
      return newState;

    case REMOVEPRODUCE:
      const filteredState = {...state};
      delete filteredState[action.produceId];
      return filteredState;

    case UPDATECOUNT:
      const updatedState = {...state};
      updatedState[action.produceId].count+=action.amt;
      return updatedState;

    case CLEARCART:
      return {};

    default:
      return state;
  }
}

const UPDATECOUNT = 'cart/UPDATE'
export const updateCountInCart = (produceId, amt) => {
  return {
    type: UPDATECOUNT,
    produceId: produceId,
    amt: amt
  };
};

const ADDPRODUCE = 'cart/ADD'
export const addProduceToCart = (produceId) => {
  return {
    type: ADDPRODUCE,
    produceId: produceId
  };
};

const REMOVEPRODUCE = 'cart/REMOVE'
export const removeProduceFromCart = (produceId) => {
  return {
    type: REMOVEPRODUCE,
    produceId: produceId
  };
};

const CLEARCART = 'cart/CLEAR'
export const clearCart = () => {
  return {
    type: CLEARCART
  };
};

