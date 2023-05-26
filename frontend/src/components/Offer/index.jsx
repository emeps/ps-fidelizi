/* eslint-disable react/prop-types */
import {
  OfferContainer,
  OfferContainerImage,
  OfferImage,
  OfferContainerComponent,
  OfferTextFooter,
  OfferActiveContainer,
  // OfferActiveButton,
  OfferSharedSpan,
  OfferSharedContainer,
  OfferAlertContainer,
  OfferAlertHeader,
  OfferAlertBody,
  OfferSharedButton,
  // OfferContainerQuantity
} from "./Offer.style";
import { dataMock } from "../../mock/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Modal from "react-modal";

import { ModalFidelizi } from "../Modal";

// TODO: Arrumar o raio da borda da imagem (OfferContainerImage)
// TODO: Estilizar Botão dos modais
// TODO: Estilizar os modais
// TODO: Estilizar a tag pre
// TODO: Inserir o campo e o botão de envio
// TODO: Inserir o loading
// TODO: Inserir a mensagem de sucesso e erro

export const Offer = () => {
  const [modalShowActive, setModalShowActive] = useState(false);
  const [modalShowShared, setModalShowShared] = useState(false);

  return (
    <>
      <OfferContainer>
        <OfferContainerImage>
          <OfferImage src={dataMock.image} />
        </OfferContainerImage>
        <OfferContainerComponent>
          <OfferActiveContainer>
            {/* <OfferActiveButton onClick={() => setModalShowActive(true)}>
              <span>
                <FontAwesomeIcon icon={faCheck} /> ATIVAR OFERTA
              </span>
              <OfferContainerQuantity>
                <span>{dataMock.quantity}</span>
                <br />
                <span>{dataMock.complementQuantity}</span>
              </OfferContainerQuantity>
            </OfferActiveButton> */}
          </OfferActiveContainer>
          <OfferSharedContainer>
            <OfferSharedButton  onClick={() => setModalShowShared(true)} >
              <OfferSharedSpan>
                <FontAwesomeIcon icon={faShare} /> COMPARTILHAR
              </OfferSharedSpan>
            </OfferSharedButton>
          </OfferSharedContainer>
          <OfferAlertContainer>
            <OfferAlertHeader>{dataMock.alertDescription}</OfferAlertHeader>
            <OfferAlertBody>
              <FontAwesomeIcon icon={faClock} /> <span>{dataMock.days}</span>
            </OfferAlertBody>
          </OfferAlertContainer>
        </OfferContainerComponent>
      </OfferContainer>
      <OfferTextFooter>{dataMock.description}</OfferTextFooter>

      <ModalFidelizi
        show={modalShowActive}
        onHide={() => setModalShowActive(false)}
        title={"ATIVAR OFERTA"}
      >
        <div>Colocar aqui input para CPF</div>
      </ModalFidelizi>
      <ModalFidelizi
        show={modalShowShared}
        onHide={() => setModalShowShared(false)}
        title={"COMPARTILHAR"}
      >
        <div>
          Colocar aqui o component com as imagens e links para compartilhar
        </div>
      </ModalFidelizi>
    </>
  );
};
