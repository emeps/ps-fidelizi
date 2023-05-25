import {
  SocialContainer,
  SocialTitle,
  SocialLinkContainer,
  SocialLink,
  SocialImg,
} from "./Social.style";

import insta from "../../assets/icon/insta.svg";
import fb from "../../assets/icon/fb.svg";
import twitter from "../../assets/icon/twitter.svg";

export const Social = () => {
  return (
    <SocialContainer>
      <SocialTitle>Siga Demonstração FideliZi</SocialTitle>
      <SocialLinkContainer>
        <SocialLink href="https://www.facebook.com/fidelizii" target="_blank">
          <SocialImg src={fb} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/fidelizii" target="_blank">
          <SocialImg src={insta} />
        </SocialLink>
        <SocialLink href="https://www.twitter.com/fidelizii" target="_blank">
          <SocialImg src={twitter} />
        </SocialLink>
      </SocialLinkContainer>
    </SocialContainer>
  );
};
