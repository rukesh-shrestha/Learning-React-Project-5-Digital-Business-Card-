import ContainHeader from "./contain-header";
import Button from "./Buttons";
import Description from "./Description";
import SocialIcon from "./SocialIcon";
import "./css/style.css";
export default function Contain() {
  return (
    <>
      <div className="container contain">
        <ContainHeader value="Rukesh Shrestha" color="name" />
        <ContainHeader value="Frontend Developer" color="degination" />
        <ContainHeader value="shrestharukesh.com.np" color="website" />
        <Button />
        <Description
          title="About"
          description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        />
        <Description
          title="Interests"
          description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
        <SocialIcon />
      </div>
    </>
  );
}
