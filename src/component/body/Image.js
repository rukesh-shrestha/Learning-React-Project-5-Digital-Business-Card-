import rukeshimage from "./images/rukesh.JPG";
import "./css/style.css";
export default function Image() {
  return (
    <>
      <div>
        <img
          src={rukeshimage}
          class="mx-auto d-block img-fluid image"
          alt="..."
        />
      </div>
    </>
  );
}
