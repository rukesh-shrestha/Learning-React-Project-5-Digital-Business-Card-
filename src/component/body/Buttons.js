import Button from "./Button";
import "./css/style.css";
export default function CollectionButton() {
  return (
    <>
      <div className="row">
        <div className="col col-md-0 col-sm-0 col-lg-0">
          <Button icon="fa fa-envelope" value="Email" styleclass="button1" />
        </div>
        <div className="col col-md-0 col-sm-0 col-lg-0">
          <Button value="LinkedIn" icon="fa fa-linkedin" styleclass="button2" />
        </div>
      </div>
    </>
  );
}
