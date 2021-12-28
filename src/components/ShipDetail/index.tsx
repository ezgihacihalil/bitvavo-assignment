import { ApolloError } from '@apollo/client';
import * as React from 'react';
import { ShipDetailQuery, useShipDetailQuery } from '../../generated/graphql';

import './index.scss';
interface Props {
  id: string;
}

interface Ship {
  data?: ShipDetailQuery;
  error?: ApolloError;
  loading: boolean;
}

const ShipDetailContainer: React.FC<Props> = ({ id }) => {
  const { data, error, loading }: Ship = useShipDetailQuery({ variables: { id } });

  return <>
    <div className='ship'>
      {data?.ship?.image && (
        <div className="profile-card">
          <div className="image-container">
            <img src={data.ship.image} />
            <h1>{data.ship.name}</h1>
          </div>
          <div className="profile-bio">
            <p>{data.ship?.year_built}</p>
            <p>{data.ship.roles?.join(', ')}</p>
          </div>
        </div>)}
    </div>
  </>
};

export default ShipDetailContainer;