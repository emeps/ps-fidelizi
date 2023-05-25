import { FooterImg, FooterWrapper } from "./Footer.style";
import footer from "../../assets/img/logo_fidelizi.png";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImg src={footer} />
    </FooterWrapper>
  );
};
