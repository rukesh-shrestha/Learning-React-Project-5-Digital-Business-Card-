import Button from "./Button";
export default function social() {
  return (
    <div className="row row-margin">
      <Button icon="fa fa-twitter" styleclass="social" />
      <Button icon="fa fa-facebook" styleclass="social" />
      <Button icon="fa fa-instagram" styleclass="social" />
      <Button icon="fa fa-github" styleclass="social" />
    </div>
  );
}
