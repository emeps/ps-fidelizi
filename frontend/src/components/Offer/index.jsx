import {
  OfferContainer,
  OfferContainerImage,
  OfferImage,
  OfferContainerComponent,
} from "./Offer.style";
import { dataMock } from "../../mock/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


// TODO: Arrumar o raio da borda da imagem (OfferContainerImage)
// TODO: Estilizar Botão dos modais
// TODO: Estilizar os modais
// TODO: Estilizar a tag pre
// TODO: Inserir o campo e o botão de envio
// TODO: Inserir o loading
// TODO: Inserir a mensagem de sucesso e erro

export const Offer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <OfferContainer>
        <OfferContainerImage>
          <OfferImage src={dataMock.image} />
        </OfferContainerImage>
        <OfferContainerComponent>
          <div>
            <button onClick={openModal}>
              <span>
                <FontAwesomeIcon icon={faCheck} /> ATIVAR OFERTA
              </span>
              <div>
                <span>{dataMock.quantity}</span>
                <br />
                <span>{dataMock.complementQuantity}</span>
              </div>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal de exemplo"
            >
              <h2>Olá</h2>
              <button onClick={closeModal}>Fechar</button>
            </Modal>
          </div>
          <div>
            <button onClick={openModal}>
              <span>
                <FontAwesomeIcon icon={faShare} /> COMPARTILHAR
              </span>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal de exemplo"
            >
              <h2>Olá</h2>
              <button onClick={closeModal}>Fechar</button>
            </Modal>
          </div>
          <div>
            <span>{dataMock.alertDescription}</span>
            <span> <FontAwesomeIcon icon={faClock}/> {dataMock.days}</span>
          </div>
        </OfferContainerComponent>
      </OfferContainer>
      <pre>{dataMock.description}</pre>
    </>
  );
};
