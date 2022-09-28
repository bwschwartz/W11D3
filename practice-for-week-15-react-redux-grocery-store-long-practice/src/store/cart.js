import produceData from '../mockData/produce.json'

export default function cartReducer (state = {}, action) {

  switch (action.type) {
    case ADDPRODUCE:
      
    default:
      return state;
  }
}

const ADDPRODUCE = 'cart/ADD'
export const addProduceToCart = function (produceId) {
  return {
    type: ADDPRODUCE,
    produceId: produceId
  }
}
