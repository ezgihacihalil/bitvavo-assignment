import { gql } from '@apollo/client';

export const QUERY_SHIP_DETAIL = gql`
  query ShipDetail($id: ID!) {
  ship(id: $id) {
      name
      year_built
      id
      image
      roles
    }
  }
`;