import React from 'react';

interface Props {
  loadingMessage: string;
}


const LoadingRenderer: React.FC<Props>  = ({ loadingMessage }) => {
  return (
    <div
      className="ag-custom-loading-cell"
      style={{ paddingLeft: '10px', lineHeight: '25px' }}
    >
      <i className="fas fa-spinner fa-pulse"></i>{' '}
      <span> {loadingMessage}</span>
    </div>
  );
};

export default LoadingRenderer;