import closeButton from "../../../../assets/images/plussign.svg";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup__container">
      <img
        src={closeButton}
        alt="imagem de um icone de fechar"
        className="popup__close-button"
        onClick={onClose}
      />
      <h3 className="popup__title">{title}</h3>
      {children}
    </div>
  );
}
