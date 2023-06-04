
import OfferPage from "./routes/OfferPage";
import { useParams } from "react-router-dom";
function App() {
  const { id } = useParams();

  return (
    <>
    <OfferPage id={id}/> 
    </>
  );
}

export default App;
