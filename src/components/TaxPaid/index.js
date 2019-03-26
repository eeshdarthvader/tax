import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../Header";

export default class TaxPaid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabA: true,
      tabB: false,
      isActiveA: true,
      isActiveB: false
    };

    this.onTabAClick = this.onTabAClick.bind(this);
    this.onTabBClick = this.onTabBClick.bind(this);
  }

  onTabAClick() {
    if (!this.state.isActiveA) {
      this.setState({
        isActiveA: true,
        isActiveB: false,
        tabA: true,
        tabB: false
      });
    }
  }

  onTabBClick() {
    if (!this.state.isActiveB) {
      this.setState({
        isActiveA: false,
        isActiveB: true,
        tabB: true,
        tabA: false
      });
    }
  }

  handleSubmitA(event) {
    const form = event.currentTarget;
    this.props.history.push("/selectpolicies");
  }

  handleSubmitB(event) {
    const form = event.currentTarget;
    this.props.history.push("/selectpolicies");
  }

  render() {
    const {
      tabA,
      tabB,
      validatedA,
      validatedB,
      isActiveA,
      isActiveB
    } = this.state;
    return (
      <div>
        <Header />
        {/* <center>
          <h1>Calculate your tax</h1>
        </center> */}

        <Container className="taxformContainer">
          <Row>
            <Col className="tabsContainer" md="auto" xs="auto" lg={3}>
              <ul className="tabsList">
                <li
                  className={isActiveA && `active`}
                  onClick={this.onTabAClick}
                >
                  CTC Breakup
                </li>
                <li
                  className={isActiveB && `active`}
                  onClick={this.onTabBClick}
                >
                  Tax Slab
                </li>
              </ul>
            </Col>
            <Col>
              {tabA && (
                <div id="a" className="tabcontent">
                  <Form onSubmit={e => this.handleSubmitA(e)}>
                    <Form.Group as={Row} controlId="formHorizontalTaxtobepaid ">
                      <Form.Label column sm={4}>
                        Tax to be paid
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Tax to be paid "
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontal80C">
                      <Form.Label column sm={4}>
                        Tax saved under 80c
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Tax saved under 80c"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Col>
                        <Button type="submit">Select Policies</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              )}
              {tabB && (
                <div id="a" className="tabcontent">
                  <Form onSubmit={e => this.handleSubmitA(e)}>
                    <Form.Group as={Row} controlId="formHorizontalTaxtobepaid ">
                      <Form.Label column sm={4}>
                        Tax to be paid
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Tax to be paid "
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontal80C">
                      <Form.Label column sm={4}>
                        Tax saved under 80c
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Tax saved under 80c"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Col>
                        <Button type="submit">Select Policies</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
