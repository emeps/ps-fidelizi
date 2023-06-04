import { Modal } from "react-bootstrap";
import { styled } from "styled-components";

const ModalSpan = styled.h4`
  font-size: 20px;
  text-align: center;
  width: 100%;
  color: #492b7c;
  margin-bottom: 0px;
`;
export const ModalFidelizi = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{
          border: "none",
          borderBottom: "1px dashed #dee2e6",
        }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ModalSpan>{props.title}</ModalSpan>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};
