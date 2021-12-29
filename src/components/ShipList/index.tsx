import { useShipListQuery } from '../../generated/graphql';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ShipDetail from '../ShipDetail';
import LoadingRenderer from './LoadingRenderer';
import { useState } from 'react';

import './index.scss';
import ViewButtonRenderer from './ViewButtonRenderer';
import RemoveButtonRenderer from './RemoveButtonRenderer';
import { GridApi } from 'ag-grid-community';

const ShipListContainer: React.FC = () => {
  const { data } = useShipListQuery();
  const [selectedShip, setSelectedShip] = useState('');

  const shipList = data?.launchesPast?.map(launch => launch?.ships).flat(1);

  return (
    <div className="ship-list-container">
      <div className="ag-theme-alpine" style={{ height: 500, width: 700 }}>
        <AgGridReact
          columnDefs={[
            { field: 'name', headerName: 'Name' },
            { field: 'type', headerName: 'Type' },
            { field: 'active', headerName: 'Is Active' },
            { field: 'year_built', headerName: 'Year Built' },
            { field: 'home_port', headerName: 'Home Port' },
            {
              field: 'id',
              headerName: 'View',
              cellRenderer: 'viewBtnCellRenderer',
              cellRendererParams: {
                clicked: function (field: string) {
                  setSelectedShip(field);
                },
                buttonText: 'View',
              }
            },
            {
              field: 'id',
              headerName: 'Remove',
              cellRenderer: 'removeBtnCellRenderer',
              cellRendererParams: {
                clicked: function (node: {data: string}, api: GridApi) {
                  const deletedRow = node.data;

                  api.applyTransaction({ remove: [deletedRow] })
                },
                buttonText: 'Remove',
              }
            }
          ]}
          loadingCellRendererParams={{
            loadingMessage: 'Loading...',
          }}
          loadingCellRenderer={'loadingRenderer'}
          frameworkComponents={{
            viewBtnCellRenderer: ViewButtonRenderer,
            removeBtnCellRenderer: RemoveButtonRenderer,
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