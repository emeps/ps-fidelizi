import { SubtitleSpan, TitleContainer, TitleH1 } from "./Title.style";
import { api } from "../../api/axios.api";
import { useEffect,useState } from "react";


export const Title = () => {
  const [title, setTitle] = useState({})
  const getTitle = async () => {
    const response = await api.get(`/offers/1`)
    setTitle(response.data.offer)
  }
  useEffect(() => {
    getTitle()
  },[])

  return (
    <>
      <TitleContainer>
        <SubtitleSpan>Demonstração FideliZi</SubtitleSpan>
        <TitleH1>{title.reward + ' ' + title.description}</TitleH1>
      </TitleContainer>
    </>
  );
};
