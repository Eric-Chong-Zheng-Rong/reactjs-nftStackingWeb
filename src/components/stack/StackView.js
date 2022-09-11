import React, { Component } from "react";
import axios from "axios";
import Media from 'react-media';

// import { WagmiConfig, createClient } from "wagmi";
// import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ModalSuccess from "../../layouts/modal/ModalSuccess";
import ModalFailed from "../../layouts/modal/ModalFailed";

class StackView extends Component {
  state = {
    accountInfo: {
      availableCandy: 120,
      stakedCandy: 0,
      staked: false,
      stakedDays: 0,
    },

    nftInfoList: [
      {isPlaced: false, numCandy: 0,},      
    ],

    modalSuccessForm: {
      modalShow: false,
    },

    modalFailedForm: {
      modalShow: false,
      errMsg: "",
    },
  };

  componentDidMount() {
    // this.apiConnectWallet();
  }

  render() {
    return (
      <div className="bg-orange row-height-100vh">
        <ModalSuccess
          modalSuccessForm={this.state.modalSuccessForm}
          dynamicSetForm={this.dynamicSetForm}
        />

        <ModalFailed
          modalFailedForm={this.state.modalFailedForm}
          dynamicSetForm={this.dynamicSetForm}
        />

        {/* <Container fluid>
          <WagmiConfig client={() => this.client()}>
            <ConnectKitProvider>
              <p>AAA</p>
              <ConnectKitButton />
            </ConnectKitProvider>
          </WagmiConfig>
        </Container> */}
        
        <Container className="">
          <br/>
          <br/>
          <br/>
          <Row className="p-2" style={{ display: "flex", justifyContent: "center" }}>
            {this.mediaController()}
          </Row>
          <br/>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
            {(this.state.accountInfo.staked) ? 
              <Button
                className=""
                variant="secondary"
                size="lg"
                onClick={() => this.actionMintZombie()}
              >
              Mint Zombie Birds
              </Button> : 
              <Button
                className=""
                variant="secondary"
                size="lg"
                onClick={() => this.actionStack()}
              >
              Stack
              </Button>} 
            </Col>
          </Row>
          <br/>
          <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                {(this.state.accountInfo.staked) ? 
                <h5 className="font-weight-bold"
                  onClick={() => this.setAccountInfo("stakedDays", this.state.accountInfo.stakedDays + 10)}>
                  Days Staked : {this.state.accountInfo.stakedDays}
                </h5> : 
                <h5 className="font-weight-bold">
                  Candies Available : {this.state.accountInfo.availableCandy}
                </h5>}
                
              </Col>
          </Row>
          {/* </Row> */}
        </Container>
      </div>
    );
  }

  // Layout function
  mediaController = () => {
    // dynamic controlling candy box
    let nftInfoList = [...this.state.nftInfoList];

    const divDisplayCandy = (value) => {
      return (
        <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center">
          <img className="height-10vh"
            src={
              process.env.PUBLIC_URL +
              "/assets/candy.png"
            }
          />
          <h5>x{value.numCandy}</h5>
        </div>
      )
    }

    const divBtnPlaceCandy = (index) => {
      return (
        <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center"
          onClick={() => this.actionCandyPlace(index)}>
          <div className="text-center">
            <h3>Click To Place Candy</h3>
          </div>
        </div>
      )
    }

    const divBtnAddCandyBox = () => {
      return (
        <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center"
          onClick={() => this.actionAddNewNftInfoObject()}>
          <span>+</span>
        </div>
      )
    }

    return (
      <Media
          queries={{
            xsm: "(max-width: 575px)",
            sm: "(min-width: 576px) and (max-width: 767px)",
            md: "(min-width: 768px) and (max-width: 991px)",
            lg: "(min-width: 992px)",
          }}
        >
          {(matches) => 
            matches.xsm ? (
              <>
                {nftInfoList.map((value, index) => (
                    <>
                      {value.isPlaced ? 
                      <Col sm={12}>                        
                        {divDisplayCandy(value)}
                      </Col> :
                      <Col sm={12}>
                        {divBtnPlaceCandy(index)}
                      </Col>
                      }

                      {(!this.state.accountInfo.staked && nftInfoList.length -1 == index) ? 
                      <Col sm={12}>
                        {divBtnAddCandyBox()}
                      </Col> :
                      <></>}
                    </>
                  ))
                }
              </>
            ) :          
            matches.sm ? (
              <>
                {nftInfoList.map((value, index) => (
                    <>
                      {value.isPlaced ? 
                      <Col sm={6}>
                        {divDisplayCandy(value)}
                      </Col> :
                      <Col sm={6}>
                        {divBtnPlaceCandy(index)}
                      </Col>
                      }

                      {(!this.state.accountInfo.staked && nftInfoList.length -1 == index) ? 
                      <Col sm={6}>
                        {divBtnAddCandyBox()}
                      </Col> :
                      <></>}
                    </>
                  ))
                }
              </>
            ) :
            matches.md ? (
              <>
                {nftInfoList.map((value, index) => (
                    <>
                      {value.isPlaced ? 
                      <Col md={4}>
                        {divDisplayCandy(value)}
                      </Col> :
                      <Col md={4}>
                        {divBtnPlaceCandy(index)}
                      </Col>
                      }

                      {(!this.state.accountInfo.staked && nftInfoList.length -1 == index) ? 
                      <Col md={4}>
                        {divBtnAddCandyBox()}
                      </Col> :
                      <></>}
                    </>
                  ))
                }
              </>
            ) :
            matches.lg ? (
              <>
                {nftInfoList.map((value, index) => (
                    <>
                      {value.isPlaced ? 
                      <Col lg={2}>
                        {divDisplayCandy(value)}
                      </Col> :
                      <Col lg={2}>
                        {divBtnPlaceCandy(index)}
                      </Col>
                      }
                      
                      {(!this.state.accountInfo.staked && nftInfoList.length -1 == index) ? 
                      <Col lg={2}>
                        {divBtnAddCandyBox()}
                      </Col> :
                      <></>}
                    </>
                  ))
                }
              </>
            ) : (
              <></>
            )
          }
        </Media>
    )
  }

  layoutDynamicCandyBox = () => {

    let nftInfoList = [...this.state.nftInfoList];
    return (
      <>
        {nftInfoList.map((value, index) => (
            <>
              {(index % 4 == 4) ? <Col md={2}/> : <></>}
              {value.isPlaced ? 
              <Col sm={4} md={4} lg={2}>
                <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center">
                  <img className="height-10vh"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/candy.png"
                    }
                  />
                  <h5>x{value.numCandy}</h5>
                </div>
              </Col> :
              <Col sm={4} md={4} lg={2}>
                <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center"
                  onClick={() => this.actionCandyPlace(index)}>
                  <div className="text-center">
                    <h3>Click To Place Candy</h3>
                  </div>
                </div>
              </Col>
              }
              
              {(index % 4 == 4) ? <Col md={2}/> : <></>}

              {(!this.state.accountInfo.staked && nftInfoList.length -1 == index) ? 
              <Col sm={4} md={4} lg={2}>
                <div className="p-2 m-1 height-20vh bg-none border-2-black border-radius-10 d-flex align-items-center justify-content-center"
                  onClick={() => this.actionAddNewNftInfoObject()}>
                  <span>+</span>
                </div>
              </Col> :
              <></>}
            </>
          ))
        }
      </>
    )
  }
  // Layout function end

  // API function
  apiConnectWallet = async () => {
    return await window.ethereum.request({ method: 'eth_requestAccounts'});
  };
  
  // API function end

  // client = () => {
  //   return createClient(
  //     getDefaultClient({
  //       appName: "Your App Name",
  //       alchemyId : "YFyUn5aMEN_vSH49eewewAxQcIaE2V6s",
  //     }),
  //   );
  // } 

  setAccountInfo = (type, value) => {
    console.log("setAccountInfo");
    console.log("type: " + type);
    console.log("value: " + value);

    // switch(type) {
    //   case "numImage": {
    //     value = (value < 4) ? value : this.state.stakeInfo.numImageAvailable;
    //   };
    //   break;
    // }

    this.setState(
      {
        accountInfo: {
          ...this.state.accountInfo,
          [type]: value,
        },
      },

      console.log(
        "accountInfo: " + JSON.stringify(this.state.accountInfo)
      )
    );
  };

  dynamicSetForm = (formObject, type, value) => {
    console.log("dynamicSetForm");
    console.log("type: " + type);

    this.setState(
      {
        [formObject]: {
          ...this.state[formObject],
          [type]: value,
        },
      },
      () => {
        console.log(
          "dynamicSetForm: " + formObject + " " + JSON.stringify(this.state[formObject])
        );
      }
    );
  };

  actionCandyPlace = (index) => {
    let nftInfoList = [...this.state.nftInfoList];
    let accountInfo = {...this.state.accountInfo};

    if (accountInfo.availableCandy - 4 >= 0) {
      nftInfoList[index] = { ...nftInfoList[index], isPlaced: true, numCandy: 4 };

      accountInfo = {...accountInfo, 
        availableCandy: accountInfo.availableCandy - 4,
        stakedCandy: accountInfo.stakedCandy + 4,
      }

      this.setState({ 
          nftInfoList: nftInfoList, 
          accountInfo: accountInfo, 
        }
      )
    } else {
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Insufficient Candies to be placed. 4 candies are required in order to place."
        }
      })
    }
  }

  actionAddNewNftInfoObject = () => {
    let nftInfoList = [...this.state.nftInfoList];

    let lastObject = nftInfoList[nftInfoList.length -1];

    if (!lastObject.isPlaced) {
      // alert
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Please place candy before add a new candy box."
        }
      })
    } else {
      // add new object
      let object = {
        isPlaced: false, 
        numCandy: 0
      };
  
      nftInfoList = nftInfoList.concat(object);
      this.setState(
        { nftInfoList: nftInfoList }
      )
    }

    
  }

  actionStack = () => {
    let accountInfo = this.state.accountInfo;

    if (accountInfo.stakedCandy < 4) {
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Insufficient Candies to be staked. 4 candies are required in order to stake."
        }
      })
    } else {
      let nftInfoList = [...this.state.nftInfoList];
      let lastObject = nftInfoList[nftInfoList.length - 1];

      if (!lastObject.isPlaced) {
        nftInfoList = nftInfoList.splice(0, nftInfoList.length -1);
      }

      this.setState({
        modalSuccessForm: {
          ...this.state.modalSuccessForm,
          modalShow: true,
          successMsg: "Successfully staked Candies"
        },
        accountInfo: {
          ...this.state.accountInfo,
          staked: true,
        },
        nftInfoList : nftInfoList,        
      })
    }
  }

  actionMintZombie = () => {
    let accountInfo = this.state.accountInfo;

    if (accountInfo.stakedDays < 30) {
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Candies need to be staked for 30 days."
        }
      })
    } else {
      // this.setState({
      //   modalSuccessForm: {
      //     ...this.state.modalSuccessForm,
      //     modalShow: true,
      //     successMsg: "Successfully staked Candies"
      //   },
      //   stakeInfo: {
      //     ...this.state.stakeInfo,
      //     staked: true,
      //   },
        
      // })
    }
  }
}

export default StackView;
