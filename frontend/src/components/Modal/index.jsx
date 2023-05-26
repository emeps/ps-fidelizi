/* eslint-disable react/prop-types */
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";

export const  ModalFidelizi = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{
          fontWeight: '700',
          color: '#492b7c',
          padding: '0.5em 0',
          borderBottomStyle: 'dashed'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            
            }}>
            <span style={{textAlign: "center"}}>{props.title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }