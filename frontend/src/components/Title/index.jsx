import { SubtitleSpan, TitleContainer, TitleH1 } from "./Title.style";
import { api } from "../../api/axios.api";
import { useEffect,useState } from "react";


export const Title = ({id}) => {
  const [title, setTitle] = useState({})
  const [titleExists, setTitleExists] = useState(false)
  
  const getTitle = async () => {
    const response = await api.get(`/offers/${id}`)
    if (response.data.offer) {
      setTitleExists(true);
      setTitle(response.data.offer)
    } else {
      setTitleExists(false);
    }
  }
  useEffect(() => {
    getTitle()
  },[])

  return (
    <>
      <TitleContainer>
        <SubtitleSpan>Demonstração FideliZi</SubtitleSpan>
        <TitleH1>{titleExists ? (`${title.reward||null} ${title.description||null}`):('Oferta não encontrada!')}</TitleH1>
      </TitleContainer>
    </>
  );
};
