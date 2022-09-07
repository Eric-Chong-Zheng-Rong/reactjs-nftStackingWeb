import React, { Component } from 'react';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import Constant from "../../global/Constant.json";

class ModalFailed extends Component {
  render() {
    return (
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.modalFailedForm.modalShow}
      >
       
        <Modal.Body className="show-grid">
          <Container fluid className="text-center m-2">
            <Row>
              <Col>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="3x"
                  className="mb-3 text-danger"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Failed</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{this.props.modalFailedForm.errMsg}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => 
                    this.props.dynamicSetForm(Constant.modalFailedForm, Constant.modalShow, false)}
                  className="rounded-pill width-100p"
                >
                  Close
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
};
export default ModalFailed;