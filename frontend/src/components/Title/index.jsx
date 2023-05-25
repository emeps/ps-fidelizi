import { SubtitleSpan, TitleContainer, TitleH1 } from "./Title.style";

import { dataMock } from "../../mock/data";

export const Title = () => {
  return (
    <>
      <TitleContainer>
        <SubtitleSpan>Demonstração FideliZi</SubtitleSpan>
        <TitleH1>{dataMock.description}</TitleH1>
      </TitleContainer>
    </>
  );
};
