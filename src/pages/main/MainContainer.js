import {connect} from 'react-redux';
import * as coinActions from '../../store/actions';
import Main from './Main';

const mapStateToProps = (state) => ({
  currency: state.currency,
  crossList: state.crossList,
  rates: state.rates,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinList: () => {
    dispatch(coinActions.getCoinListAction());
  },
  getRateList: () => {
    dispatch(coinActions.getRatesAction());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
