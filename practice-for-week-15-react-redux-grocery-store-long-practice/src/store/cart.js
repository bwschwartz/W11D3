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
