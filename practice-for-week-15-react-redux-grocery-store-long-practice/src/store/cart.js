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
        // const filteredState = {}
        // const keysArray = Object.keys(state);
        // for (let i = 0; i < keysArray.length; i++) {
        //   const key = parseInt(keysArray[i]);
        //   if (key !== action.produceId) {
        //     filteredState[key] = state[key];
        //   }
        // }
        // return filteredState;
        const filteredState = {...state}
        delete filteredState[action.produceId];
        return filteredState;
    default:
      return state;
  }
}

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
