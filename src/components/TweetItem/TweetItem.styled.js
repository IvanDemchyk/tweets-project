import styled from "styled-components";
import figure from "images/figure.png";
import logo from "images/logo.png";
import ellipse from "images/Ellipse.png";
import rect from "images/Rectangle.png";

export const TweetBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;

  background-image: url("${logo}"), url("${figure}"), url("${ellipse}"),
    url("${rect}"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 308px, 106px, 380px, 380px;
  background-repeat: no-repeat;
  background-position: 20px 20px, right 36px top 28px, top 170px left 137px,
    center center, center center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-top: 178px;
  padding-bottom: 36px;
`;

export const AvatarImg = styled.img`
  width: 78px;

  border-radius: 50px;
  overflow: hidden;
  object-fit: cover;
`;
export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px 0;
`;

export const StatsText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const TweetButton = styled.button`
  padding: 14px 39px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  background: ${(props) => (props.following ? "#5CD3A8" : "#EBD8FF")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
