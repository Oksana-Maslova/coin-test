import * as CoinActions from '../actions/index'

const defaultState = {
  currency: [],
  crossList: [],
  rates: [],
  coin: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CoinActions.GET_COIN_LIST:
      return {
        ...state,
        ...action.payload,
      };
      case CoinActions.GET_RATES:
        return {
          ...state,
          ...action.payload,
        };
      case CoinActions.GET_COIN_DETAILS:
        return {
          ...state,
          ...action.payload,
        };
        default:
            return state;
    }
}
