import { GridApi } from "ag-grid-community";

interface Props {
  clicked: (n: { data: string }, a: GridApi) => void;
  node: { data: string };
  api: GridApi;
}

const RemoveButtonRenderer: React.FC<Props> = ({ clicked, node, api }) => {
  const btnClickedHandler = () => {
    clicked(node, api);
  }

  return (
    <button className="view-button" onClick={btnClickedHandler}>{'Remove'}</button>
  )
}

export default RemoveButtonRenderer;