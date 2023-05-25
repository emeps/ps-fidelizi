import { Board } from "./components/Board"
import { Header } from "./components/Header"
import { Instructions } from "./components/Instructions"
import { Offer } from "./components/Offer"
import { Rules } from "./components/Rules"
import { Separator } from "./components/Separator"
import { Title } from "./components/Title"


// TODO: Alterar div para section para manter a semantica
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
        <Rules/>
      </Board>
    </>
  )
}

export default App
