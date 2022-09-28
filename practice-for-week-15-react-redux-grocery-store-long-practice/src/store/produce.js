import produceData from '../mockData/produce.json'

export default function produceReducer (state = {}, action) {
  switch (action.type) {

    case POPULATE:
      const actionProduceObject = {};
      action.produce.forEach(produceObj  => {
        actionProduceObject[produceObj.id] = produceObj
      });
      return actionProduceObject

    case TOGGLE:
      const toggledState = {...state};
      toggledState[action.produceId].liked = !toggledState[action.produceId].liked;
      return toggledState;

    default:
      return state;

  }
}

const POPULATE = 'produce/POPULATE'

export const populateProduce = {
  type: POPULATE,
  produce: produceData
}

const TOGGLE = 'produce/TOGGLE'
export const toggleLike = (produceId) => ({
  type: TOGGLE,
  produceId: produceId
})