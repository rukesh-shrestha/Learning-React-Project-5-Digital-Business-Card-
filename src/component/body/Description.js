import "./css/style.css";
export default function Description(props) {
  return (
    <>
      <div className="text-light">
        <div className="description">{props.title}</div>
        <div className="description-text">{props.description}</div>
      </div>
    </>
  );
}
