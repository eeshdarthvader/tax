import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../Header";

export default class TaxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabA: true,
      tabB: false,
      validatedA: false,
      validatedB: false,
      isActiveA: true,
      isActiveB: false,
      formA: {
        basicSalary: "",
        totalHouseRentAllowances: "",
        payingHouseRentAllowances: "",
        conveyanceAllowances: "",
        cityCompensatoryAllowances: "",
        providentFund: "",
        others: "",
        dateOfBirth: ""
      },
      formB: {
        slab: "",
        age: "",
        dateOfBirth: ""
      }
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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validatedA: true });
    if (form.checkValidity() === true) {
      const {
        basicSalary,
        totalHouseRentAllowances,
        conveyanceAllowances,
        cityCompensatoryAllowances,
        providentFund,
        others,
        dateOfBirth
      } = this.state.formA;
      const data = {
        basicSalary: basicSalary,
        totalHouseRentAllowances: totalHouseRentAllowances,
        payingHouseRentAllowances: 96000,
        conveyanceAllowances: conveyanceAllowances,
        cityCompensatoryAllowances: cityCompensatoryAllowances,
        providentFund: providentFund,
        others: others,
        dateOfBirth: dateOfBirth
      };

      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { data })
        .then(res => {
          console.log(res.data);
          this.props.history.push("/taxpaid");
        });
    }

    // this.props.history.push("/taxpaid");
  }

  handleSubmitB(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validatedB: true });
    this.props.history.push("/taxpaid");
    if (form.checkValidity() === true) {
      const { slab, age, dateOfBirth } = this.state.formB;
      const data = {
        slab: slab,
        age: age,
        dateOfBirth: dateOfBirth
      };

      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { data })
        .then(res => {
          console.log(res.data);
          this.props.history.push("/taxpaid");
        });
    }
  }

  render() {
    const {
      tabA,
      tabB,
      validatedA,
      validatedB,
      isActiveA,
      isActiveB,
      formA,
      formB
    } = this.state;
    return (
      <div>
        <Header />
        <center>
          <h1>Calculate your tax</h1>
        </center>

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
                  <Form
                    noValidate
                    validated={validatedA}
                    onSubmit={e => this.handleSubmitA(e)}
                  >
                    <Form.Group as={Row} controlId="formHorizontalBasicSalary">
                      <Form.Label column sm={4}>
                        Basic Salary
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          value={formA.basicSalary}
                          placeholder="Basic Salary"
                        />
                      </Col>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalHRA">
                      <Form.Label column sm={4}>
                        House Rent Allowance
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          required
                          value={formA.totalHouseRentAllowances}
                          placeholder="House Rent Allowance"
                        />
                      </Col>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCA">
                      <Form.Label column sm={4}>
                        Conveyance Allowance
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          value={formA.conveyanceAllowances}
                          placeholder="Conveyance Allowance "
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCCA">
                      <Form.Label column sm={4}>
                        City Compensatory Allowance
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          value={formA.cityCompensatoryAllowances}
                          placeholder="City Compensatory Allowance"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPF">
                      <Form.Label column sm={4}>
                        Provident Funds
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          value={formA.providentFund}
                          placeholder="Provident Funds"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalOthers">
                      <Form.Label column sm={4}>
                        Others
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="text"
                          value={formA.others}
                          placeholder="Others"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDOB">
                      <Form.Label column sm={4}>
                        Date of birth
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          required
                          type="date"
                          value={formA.dateOfBirth}
                          placeholder="dob"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Col>
                        <Button type="submit">Calculate</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              )}
              {tabB && (
                <div id="b" className="tabcontent">
                  <Form
                    noValidate
                    validated={validatedB}
                    onSubmit={e => this.handleSubmitB(e)}
                  >
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Salary Range
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            selected
                            label="0 - 5 Lac"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="5 - 10 Lacs"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="10 Lac and above"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalDOB">
                        <Form.Label column sm={2}>
                          Date of birth
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            required
                            // value={formB.dateOfBirth}
                            type="date"
                            placeholder="dob"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>

                    <Form.Group as={Row}>
                      <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Calculate</Button>
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
