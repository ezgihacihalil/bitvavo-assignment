interface Props {
  clicked: (c: string) => void;
  buttonText: string;
  value: string;
  valueFormatted: string;
}

const ButtonRenderer: React.FC<Props> = ({ clicked, buttonText, value, valueFormatted }) => {
  const cellValue = valueFormatted ? valueFormatted : value;
  
  const btnClickedHandler = () => {
    clicked(cellValue);
  }

  return (
    <button className="view-button" onClick={btnClickedHandler}>{buttonText}</button>
  )
}

export default ButtonRenderer;