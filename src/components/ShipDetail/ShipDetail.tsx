import * as React from 'react';
import { ShipDetailQuery } from '../../generated/graphql';
// import './styles.css';

interface Props {
  data: ShipDetailQuery;
}

const ShipDetail: React.FC<Props> = ({ data }) => {
  const { ship } = data;

  if (!ship) {
    return <div>No ship available</div>;
  }

  return (
    <div>
      {ship.image && <img
        src={ship.image}
        key={ship.image}
        alt={ship.name || 'ship'}
      />}
    </div>
  );
};

export default ShipDetail;