import produceData from '../mockData/produce.json'

export default function produceReducer (state = {}, action) {
  switch (action.type) {

    case POPULATE:
      const actionProduceObject = {};
      action.produce.forEach(produceObj  => {
        actionProduceObject[produceObj.id] = produceObj
      });
      return actionProduceObject

    default:
      return state;

  }
}

const POPULATE = 'produce/POPULATE'

export const populateProduce = {
  type: POPULATE,
  produce: produceData
}