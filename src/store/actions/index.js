import fetch from 'cross-fetch';

export const GET_COIN_LIST = "GET_COIN_LIST";
export const GET_RATES = "GET_RATES";
export const GET_COIN_DETAILS = "GET_COIN_DETAILS";

const COIN_LIST_API_URL = 'https://api.coingecko.com/api/v3/coins/list';
const CURRENCY_API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
const RATE_API_URL = 'https://api.coingecko.com/api/v3/exchange_rates';
const COIN_DETAILS_API_URL = 'https://api.coingecko.com/api/v3/coins';

export function getCoinListAction() {
    return async (dispatch) => {
        const coinList = await (await fetch(COIN_LIST_API_URL)).json();
        const currency = await (await fetch(CURRENCY_API_URL)).json();
        const crossList = coinList.filter(({ symbol }) => currency.find(({ symbol: currencySymbol }) => symbol === currencySymbol));

        dispatch({
            type: GET_COIN_LIST,
            payload: {
                currency,
                crossList,
            },
        });
    }
}

export function getRatesAction() {
  return async (dispatch) => {
    const rates = await (await fetch(RATE_API_URL)).json();

    dispatch({
      type: GET_RATES,
      payload: {
        rates,
      },
    });
  }
}

export function getCoinDetailsAction(id) {
  return async (dispatch) => {
    const coin = await (await fetch(`${COIN_DETAILS_API_URL}/${id}`)).json();

    dispatch({
      type: GET_COIN_DETAILS,
      payload: {
        coin,
      },
    });
  }
}
