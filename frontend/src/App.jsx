import { Board } from "./components/Board"
import { Header } from "./components/Header"
import { Instructions } from "./components/Instructions"
import { Offer } from "./components/Offer"
import { Separator } from "./components/Separator"
import { Title } from "./components/Title"

function App() {
  return (
    <>
      <Board>
        <Header/>
        <Title/>
        <Offer/>
        <Separator/>
        <Instructions/>
        <Separator/>
      </Board>
    </>
  )
}

export default App
