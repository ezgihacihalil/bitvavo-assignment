import * as React from 'react';
import { useShipDetailQuery } from '../../generated/graphql';
import ShipDetail from './ShipDetail';

const ShipDetailContainer = () => {
  const { data, error, loading } = useShipDetailQuery({ variables: { id: 'GOMSTREE' } });

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return <>
    {error || !data ? <div>No data available</div> : <ShipDetail data={data} />}
  </>
};

export default ShipDetailContainer;