import React, { useEffect, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Coin({ getCoinDetails, coin, params }) {
  const { match: { params: id }} = params;

  useEffect(() => {
    getCoinDetails(id.id);
  }, [getCoinDetails, id.id]);

  const coinDetails = useMemo(() => {
    return coin && Object.keys(coin).map(key => (
      <div key={key}>
        {(typeof coin[key] !== 'object') && <Typography variant="h6">{key}:</Typography>}
        {(typeof coin[key] !== 'object') && <Typography variant="body2">{coin[key]}</Typography>}
      </div>
    ))
  }, [coin]);

  return (
    <div>
      {coinDetails}
    </div>
  )
}
