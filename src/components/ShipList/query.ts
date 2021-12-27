import { gql } from '@apollo/client';

export const QUERY_SHIP_LIST = gql`
  query ShipList {
    launchesPast {
      ships {
        name
        active
        year_built
        type
        home_port
        id
      }
    }
  }
`;