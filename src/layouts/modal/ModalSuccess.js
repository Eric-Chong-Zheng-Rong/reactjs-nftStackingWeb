import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

import * as Constant from "../../global/Constant.js";

class ModalSuccess extends Component {

  // <SuccessModal
  // show={this.state.successModalShow}
  // onHide={() => this.setState({ successModalShow: false })}
  // />
  render() {
    return (
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.modalSuccessForm.modalShow}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="show-grid">
          <Container fluid className="text-center m-2">
            <Row>
              <Col>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="3x"
                  className="mb-3 text-success"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Success</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{this.props.modalSuccessForm.successMsg}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="success"
                  onClick={() => 
                    this.props.dynamicSetForm(Constant.modalSuccessForm, Constant.modalShow, false)}
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
export default ModalSuccess;