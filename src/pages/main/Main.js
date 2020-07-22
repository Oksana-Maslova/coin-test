import React, { useEffect, useMemo, useState, useCallback, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Main({ getCoinList, getRateList, currency, crossList, rates }) {
  useEffect(() => {
    getCoinList();
    getRateList();
  }, [getCoinList, getRateList]);

  const [isVisible, setIsVisible] = useState(false);
  const showRate = useCallback(() => setIsVisible(true), [setIsVisible]);
  const mainList = useMemo(() => {
    return crossList && crossList.map(item => (
      <Card key={item.id} variant="outlined">
        <CardContent>
          <Typography variant="h6">Symbol</Typography>
          <div>{item.symbol}</div>
          <Typography variant="h6">Name:</Typography>
          <div>{item.name}</div>
          <Typography variant="h6">Current price:</Typography>
          <div>{currency.find(({symbol}) => symbol === item.symbol).current_price}</div>
          <Typography variant="h6">Changes of price for last 24h:</Typography>
          <div>{currency.find(({symbol}) => symbol === item.symbol).price_change_24h}</div>
          <Button variant="contained" color="primary" onClick={showRate}>Rate</Button>
          {isVisible && (
            <Typography variant="h5">
              Rate is {rates.rates[item.symbol] ? rates.rates[item.symbol].value : 'unknown'}
            </Typography>
          )}
          <br />
          <br />
          <Link to={`coin/${item.id}`}>More details</Link>
        </CardContent>
      </Card>
    ))
  }, [crossList, currency, isVisible, rates, showRate]);

  return (
    <Fragment>
      {mainList}
    </Fragment>
  );
};
