import { useShipListQuery } from '../../generated/graphql';
import ShipList from './ShipList';

const ShipListContainer = () => {
  const { data, error, loading } = useShipListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>
    {error || !data ? <div>No data available</div> : <ShipList data={data} />}
  </>
};

export default ShipListContainer;