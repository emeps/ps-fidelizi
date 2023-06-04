import {Board} from "../components/Board";
import {Wrapper} from "../components/Wrapper";
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {Offer} from "../components/Offer";
import {Separator} from "../components/Separator";
import {Instructions} from "../components/Instructions";
import {Rules} from "../components/Rules";
import {Social} from "../components/Social";
import {Footer} from "../components/Footer";

export default function OfferPage() {
  return (
    <>
      <Board>
        <Wrapper>
          <Header />
          <Title />
          <Offer />
          <Separator />
          <Instructions />
          <Separator />
          <Rules />
          <Social />
        </Wrapper>
      </Board>
      <Footer />
    </>
  );
}
