import {connect} from 'react-redux';
import * as coinActions from '../../store/actions';
import Coin from './Coin';

const mapStateToProps = (state) => ({
  coin: state.coin,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinDetails: (id) => {
    dispatch(coinActions.getCoinDetailsAction(id));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coin);
