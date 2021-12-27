import { ShipListQuery } from '../../generated/graphql';
// import './styles.css';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
  data: ShipListQuery;
}

const ShipList: React.FC<Props> = ({ data }) => {
  const shipList = data?.launchesPast?.map(launch => launch?.ships).flat(1);

  return (

    <div className="ag-theme-alpine" style={{ height: 600, width: 800 }}>
      <AgGridReact
        rowData={shipList}>
        <AgGridColumn field="name"></AgGridColumn>
        <AgGridColumn field="type"></AgGridColumn>
        <AgGridColumn field="active"></AgGridColumn>
        <AgGridColumn field="year_built"></AgGridColumn>
        <AgGridColumn field="home_port"></AgGridColumn>
      </AgGridReact>
    </div>
  )
};

export default ShipList;