export default function ContainHeader(props) {
  return (
    <>
      <div className={`text-center ${props.color}`}>
        <div>{props.value}</div>
      </div>
    </>
  );
}
