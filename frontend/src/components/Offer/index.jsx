/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  OfferContainer,
  OfferContainerImage,
  OfferImage,
  OfferContainerComponent,
  OfferTextFooter,
  OfferActiveContainer,
  OfferSharedSpan,
  OfferSharedContainer,
  OfferAlertContainer,
  OfferAlertHeader,
  OfferAlertBody,
  OfferSharedButton,
  OfferShared,
  OfferAviable,
  OfferActive,
  OfferAviableQuantity,
  OfferAviableQuantitySpan,
} from "./Offer.style";
import { SocialMedia } from "../SocialMedia";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Form, Modal, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { Br } from "react-flags-select";
import { ModalFidelizi } from "../Modal";

import { api } from "../../api/axios.api";
import validatedCPF from '../../helpers/validateCPF'

// TODO: Inserir o loading
// TODO: Inserir a mensagem de sucesso e erro

export const Offer = () => {
  // Controle do Modal
  const [modalShowActive, setModalShowActive] = useState(false);
  const [modalShowShared, setModalShowShared] = useState(false);

  // Controler do conteudo da página
  const [offer, setOffer] = useState({});

  // Controler do CPF
  const [cpf, setCpf] = useState("");

  // Controle dos cadastro
  const[fullname, setFullname] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[dataBirth, setDataBirth] = useState('');

  //Contole das requisições
  const [isCreateUser, setIsCreateUser] = useState(false);

  // Função para pegar a oferta
  const getOffer = async () => {
    const response = await api.get("/offers/1");
    setOffer(response.data.offer);
  };

  const handleCPF = (e) => {
    setCpf(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/check-user/1", { cpf });
    constructorModal(data.offer_code);
    
  };
  const createUser = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/check-create-user/1", { cpf, fullname, email, phone, dataBirth });
  }
  const constructorModal = (offer_code) => {
    switch (offer_code) {
      case "OFC100":
        console.log("CPF inválido");
        return;
      case "OFC101":
        console.log("Usuário não encontrado");
        setIsCreateUser(true)
        return;

      case "OFC102":
        console.log("Oferta esgotada");
        return;

      case "OFC103":
        console.log("Usuário já possui essa oferta");
        return;

      case "OFC200":
        console.log("Oferta ativada com sucesso");
        return;

      default:
        console.log("Eu nçao li nada ");
        return;
    }
  };

  // Função para limpar os campos
  const clearInputs = () => {
    setCpf("");
  };

  useEffect(() => {
    getOffer();
  }, [isCreateUser]);

  return (
    <>
      <OfferContainer>
        <OfferContainerImage>
          <OfferImage src={offer.image} />
        </OfferContainerImage>
        <OfferContainerComponent>
          <OfferActiveContainer>
            <div onClick={() => setModalShowActive(true)}>
              <OfferActive>
                <FontAwesomeIcon icon={faCheck} /> <span>ATIVAR OFERTA</span>
              </OfferActive>
              <OfferAviable>
                <OfferAviableQuantity>
                  {offer.amount_registered}
                </OfferAviableQuantity>
                <br />
                <OfferAviableQuantitySpan>disponíveis</OfferAviableQuantitySpan>
              </OfferAviable>
            </div>
          </OfferActiveContainer>
          <OfferSharedContainer>
            <OfferSharedButton onClick={() => setModalShowShared(true)}>
              <FontAwesomeIcon icon={faShare} />
              <OfferShared>COMPARTILHAR</OfferShared>
            </OfferSharedButton>
          </OfferSharedContainer>
          <OfferAlertContainer>
            <OfferAlertHeader>
              OFERTA DISPONÍVEL POR TEMPO LIMITADO! FALTAM:
            </OfferAlertHeader>
            <OfferAlertBody>
              <FontAwesomeIcon icon={faClock} />{" "}
              <span>{offer.date_remaing + " dias restantes"}</span>
            </OfferAlertBody>
          </OfferAlertContainer>
        </OfferContainerComponent>
      </OfferContainer>
      <OfferTextFooter>
        {offer.reward + " " + offer.description}
      </OfferTextFooter>

      <ModalFidelizi
        show={modalShowActive}
        onHide={() => {
          setModalShowActive(false);
          clearInputs();
        }}
        title={"ATIVE SUA OFERTA"}
      >
        {!isCreateUser ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2 text-center">
              <Form.Label>
                Para ativar a oferta, digite seu CPF para identificação.
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira seu CPF"
                as={IMaskInput}
                mask="000.000.000-00"
                className="text-center mt-2 font-weight-bolder"
                onChange={handleCPF}
              />

              <Button
                disabled={!validatedCPF(cpf)}
                className="text-center mt-2  px-5"
                type="submit"
                style={{ backgroundColor: "#834be1" }}
              >
                Continuar <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </Form.Group>
          </Form>


        ) : (
          <Form className="mb-2 text-center">
            <Form.Group className="mb-2 text-center">
              <Form.Label>
                <strong>
                  Para ativar esta oferta, é necessário participar do Fidelizi
                  em{" "}
                  <a
                    href="https://fidelizii.com.br/demonstracao-fidelizi"
                    style={{ color: "#834be1" }}
                  >
                    Demostração FideliZi!
                  </a>
                </strong>
              </Form.Label>
              <Form.Text className="text-muted">
                Preencha os campos abaixo para participar!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 border border-secondary p-4 border-opacity-25 rounded-4 text-start">
              <Form.Label className="mb-3">
                <strong>Dados Essenciais</strong>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Nome completo <Form.Text muted>(Obritagório)</Form.Text>
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Email <Form.Text muted>(Obritagório)</Form.Text>
                </Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3 border border-secondary p-4 border-opacity-25 rounded-4 text-start">
              <Form.Label className="mb-3">
                <strong>Dados Adicionais</strong>
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Data de Nascimento <Form.Text muted>(Obritagório)</Form.Text>
                </Form.Label>
                <Form.Control
                  type="text"
                  as={IMaskInput}
                  mask="00/00/0000"
                  placeholder="DD/MM/AAAA"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Br />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    as={IMaskInput}
                    mask="+55 (00) 00000-0000"
                    placeholder="+55"
                  />
                </InputGroup>
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3">
              <Button
                className="text-center mt-2  px-5"
                type="submit"
                style={{ backgroundColor: "#834be1" }}
              >
                Continuar <FontAwesomeIcon icon={faAngleRight} />
              </Button>
              <Form.Group className="mb-2 text-center">
                <Form.Label className= "px-2 mt-3">
                  <span>
                    Ao participar você concorda e aceita os{" "}
                    <a
                      href="https://fidelizii.com.br/termos-de-uso"
                      style={{ color: "#834be1" }}
                    >
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a
                      href="https://fidelizii.com.br/politica-de-privacidade-e-cookies"
                      style={{ color: "#834be1" }}
                    >
                      políticas de privacidade
                    </a>{" "}
                    do FideliZi{" "}
                  </span>
                </Form.Label>
              </Form.Group>
            </Form.Group>
          </Form>
        )}
      </ModalFidelizi>

      {/* TODO:Refatorar o modal para reaproveitar como componente */}

      <Modal
        show={modalShowShared}
        onHide={() => {
          setModalShowShared(false);
        }}
      >
        <Modal.Header
          closeButton
          style={{
            border: "none",
            borderBottom: "1px dashed #dee2e6",
          }}
        >
          <Modal.Title
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <OfferSharedSpan>COMPARTILHE ESSA OFERTA</OfferSharedSpan>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <SocialMedia />{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};
