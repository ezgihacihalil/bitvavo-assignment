import { useShipListQuery } from '../../generated/graphql';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ButtonRenderer from './ButtonRenderer';
import ShipDetail from '../ShipDetail';
import LoadingRenderer from './LoadingRenderer';
import { useState } from 'react';

import './index.scss';


const ShipListContainer = () => {
  const { data } = useShipListQuery();
  const [selectedShip, setSelectedShip] = useState('');

  const shipList = data?.launchesPast?.map(launch => launch?.ships).flat(1);

  return (
    <div className="ship-list-container">
      <div className="ag-theme-alpine" style={{ height: 500, width: 700 }}>
        <AgGridReact
          columnDefs={[
            { field: 'name' },
            { field: 'type' },
            { field: 'active' },
            { field: 'year_built' },
            { field: 'home_port' },
            {
              field: 'id',
              cellRenderer: 'btnCellRenderer',
              cellRendererParams: {
                clicked: function (field: string) {
                  setSelectedShip(field);
                },
                buttonText: 'View',
              }
            }]}
          loadingCellRendererParams={{
            loadingMessage: 'Loading...',
          }}
          loadingCellRenderer={'loadingRenderer'}
          frameworkComponents={{
            btnCellRenderer: ButtonRenderer,
            loadingRenderer: LoadingRenderer,
          }}
          rowData={shipList}
          pagination={true}
          paginationPageSize={10}
        >
        </AgGridReact>
      </div>
      {selectedShip && <ShipDetail id={selectedShip} />}
    </div>
  )
};

export default ShipListContainer;