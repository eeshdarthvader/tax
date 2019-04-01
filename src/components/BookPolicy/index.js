import React, { Fragment } from "react";

import {
  Container,
  Row,
  Col,
  Divider,
  Badge,
  Button,
  Label,
  Field,
  Select,
  Checkbox,
  Banner,
  Collapse,
  Fade
} from "@cleartrip/bento";

import ItineraryHeader from "../../lib/ItineraryHeader";
import ItineraryBody from "../../lib/ItineraryBody";
import ItineraryCollapsed from "../../lib/ItineraryCollapsed";

import Header from "../Header";

import Check from './icons/check.svg'
import Chev from './icons/chev.svg'

class BookPolicy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      review: 'active',
      contact: 'inactive',
      travellers: 'inactive',
      payment: 'inactive'
    }
  }
  render() {
    return (
      <div className="bg-grey" >

        {/* Page Header */}
        <Header />

        <Container >

          {/* Page Title */}
          <Row className="my-40">
            <Col>
              <h1 className="fs-heading-3 c-black fw-700 mb-16">
                Complete your booking
              </h1>
              <p className="fs-heading c-grey-60 m-0">
                In 4 simple steps
              </p>
            </Col>
          </Row>

          {/* Itinerary */}
          <Row className="my-40">
            <Col>

              {/* Review Itinerary */}
              <If condition={this.state.review === 'collapsed'}>

                <Fade
                  initialPose="in"
                  pose={this.state.review === 'collapsed' ? 'in' : 'out'}
                >
                  <ItineraryCollapsed>
                    <Row>
                      <Col span={6} style={{marginLeft: '-8px'}}>
                        <div className="flex flex-middle pl-32" style={{ height: '84px' }}>
                          <img src={Check} alt="Application details" />
                          <p className="fs-body-2 c-grey-40 ml-24">
                            Application details
                          </p>
                        </div>
                      </Col>
                      <Col span={7}>
                        <div className="flex flex-column flex-center" style={{ height: '84px' }}>
                          <p className="fs-body-2 fw-600 mb-4">
                              Money back
                          </p>
                          <p className="fs-caption-2 c-grey-40">
                              820-25
                          </p>
                        </div>
                      </Col>
                      
                      <Col span={5}>
                        <div className="flex flex-middle" style={{ height: '84px' }}>
                          <p className="fs-body-2 fw-600 lh-0">
                            Rs 885
                          </p>
                         
                        </div>
                      </Col>
                      <Col span={2}>
                        <div
                          className="flex flex-middle flex-right pr-32" style={{ height: '84px' }}
                        >
                          <img src={Chev} alt="Application details" />
                        </div>
                      </Col>
                    </Row>
                  </ItineraryCollapsed>
                </Fade>
              </If>

              <If condition={this.state.review === 'active'}>
                <ItineraryHeader step={1} active>
                  Review your policy details
                </ItineraryHeader>
              </If>

              <Collapse
                pose={this.state.review === 'collapsed' ? 'collapsed': 'open'}
              >
                <ItineraryBody>
                <Row>
                  <Col span={6}>
                  <div
                      className="flex flex-center flex-middle bg-grey-05"
                      style={{
                        width: "200px",
                        height: "160px"
                      }}
                    ></div>
                  </Col>
                  <Col span={18}>
                    <p className="fs-body-3 fw-600 mb-16">
                        Money back
                    </p>
                    
                    <p className="fs-body-2 mb-12">
                        820-25
                    </p>
                    

                    <Divider className="my-20" />

                    <p className="fs-body mb-4">
                      After making the payment, you will need to upload images of passport and photograph of all travellers.
                    </p>
                    <p className="fs-body mb-4">
                      Once accepted, visa applications require a minimum of 3 - 5 working days to process and may take longer.
                    </p>
                    <p className="fs-body mb-4">
                      For tourist visa, the passport should be valid for at least six months from the date of travel.
                    </p>

                    <Divider className="my-20" />

                    <p className="mb-16 fs-body">Payable amount</p>

                    

                    <p className="fs-caption-2 c-grey-40 mb-20">
                      Inclusive of all taxes
                    </p>

                    <p className="fs-caption-2 c-grey-40 mb-20 lh-body">
                      Note: - The Visa Fee is non-refundable in case the visa application is not approved by the UAE Immigration authority Plus a refundable deposit might be applicable (Subject to specific nationals)
                    </p>

                    <Button
                      type="primary"
                      className="mt-24 pb-30"
                      onClick={() => this.setState({
                        'review': 'collapsed',
                        'contact': 'active'
                      })}>
                      Continue booking
                    </Button>

                  </Col>
                </Row>
              </ItineraryBody>
              </Collapse>





              <If condition={this.state.contact === 'collapsed'}>
                <ItineraryCollapsed>
                <Row>
                  <Col span={6} style={{ marginLeft: '-8px' }}>
                    <div className="flex flex-middle pl-32" style={{ height: '84px' }}>
                      <img src={Check} alt="Application details" />
                      <p className="fs-body-2 c-grey-40 ml-24">
                        Email Address
                      </p>
                    </div>
                  </Col>
                  <Col span={16}>
                    <div className="flex flex-column flex-center" style={{ height: '84px' }}>
                      <p className="fs-body-2 fw-600 mb-4">
                       customeremail@gmail.com
                      </p>
                      <p className="fs-caption-2 c-grey-40">
                        Updates and visas for all travellers will be sent to this Email address
                      </p>
                    </div>
                  </Col>
                  <Col span={2}>
                    <div
                      className="flex flex-middle flex-right pr-32" style={{ height: '84px' }}
                    >
                      <img src={Chev} alt="Application details" />
                    </div>
                  </Col>
                </Row>
              </ItineraryCollapsed>
              </If>

              <If condition={this.state.contact === 'inactive'}>
                <ItineraryHeader step={2}>
                  Add your email address
                </ItineraryHeader>
              </If>

              <If condition={this.state.contact === 'active'}>
                <ItineraryHeader step={2} active>
                  Add your email address
                </ItineraryHeader>
              </If>

              <Collapse
                pose={(this.state.contact === 'collapsed' ||
                this.state.contact === 'inactive') ? 'collapsed' : 'open'}
              >
                <ItineraryBody>
                <Row className="mb-32">
                  <Col span={6} />
                  <Col span={13}>
                    <Banner label="Note:">
                      <p>
                        Updates and visas for all travellers will be sent to this email address
                      </p>
                    </Banner>
                  </Col>
                </Row>

                <Row>
                  <Col span={6} />
                  <Col span={10}>

                    {/* Email address */}
                    <div className="mb-28">
                      <Label className="mb-8" for="email">
                        Email address
                      </Label>
                      <Field
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                      />

                     
                    </div>


                    {/* Phone Number */}
                    <div className="mb-28">
                      <Label className="mb-8" for="phone">
                        Phone number
                      </Label>
                      <Row>
                        <Col span={7}>
                          <Field value="+971 (UAE)" disabled />
                        </Col>
                        <Col>
                          <Field name="phone" id="phone" />
                        </Col>
                      </Row>
                    </div>


                      <Button
                        type="primary"
                        className="mt-24 pb-30"
                        onClick={() => this.setState({
                          'review': 'collapsed',
                          'contact': 'collapsed',
                          'travellers': 'active'
                        })}>
                        Continue booking
                    </Button>

                  </Col>
                </Row>
              </ItineraryBody>
              </Collapse>


              <If condition={this.state.travellers === 'collapsed'}>
                <ItineraryCollapsed>
                <Row>
                  <Col span={6} style={{ marginLeft: '-8px' }}>
                    <div className="flex flex-middle pl-32" style={{ height: '84px' }}>
                      <img src={Check} alt="Application details" />
                      <p className="fs-body-2 c-grey-40 ml-24">
                        Travellers
                      </p>
                    </div>
                  </Col>
                  <Col span={16}>
                    <div className="flex flex-column flex-center" style={{ height: '84px' }}>
                      <p className="fs-body-2 fw-600 mb-4">
                        Traveller name, Traveller name
                      </p>
                    </div>
                  </Col>
                  <Col span={2}>
                    <div
                      className="flex flex-middle flex-right pr-32" style={{ height: '84px' }}
                    >
                      <img src={Chev} alt="Application details" />
                    </div>
                  </Col>
                </Row>
              </ItineraryCollapsed>
              </If>

              <If condition={this.state.travellers === 'inactive'}>
                <ItineraryHeader step={3}>
                  Tell us who's travelling
                </ItineraryHeader>
              </If>


              <If condition={this.state.travellers === 'active'}>
                <ItineraryHeader step={3} active>
                  Tell us who's travelling
                </ItineraryHeader>
              </If>


              <Collapse
                pose={(this.state.travellers === 'collapsed' ||
                  this.state.travellers === 'inactive') ? 'collapsed' : 'open'}
              >
                <ItineraryBody>
                <Row className="mb-32">
                  <Col span={6} />
                  <Col span={15}>
                    <Banner label="Note:">
                      <p className="lh-body mb-4">
                        Ensure that all names match that in the passport
                      </p>
                      <p>
                        Ensure that all passports are valid for at least 6 months from the date of visit
                      </p>
                    </Banner>
                  </Col>
                </Row>

                <Row>
                  <Col span={6} />
                  <Col span={10}>

                    <div className="pb-8 mb-24 mt-20 bb bc-grey-10">
                      <p className="fs-body-3">
                        Adult 1
                      </p>
                    </div>

                    {/* Email address */}
                    <div className="mb-28">
                      <Label className="mb-8" for="email">
                        Full name
                      </Label>
                      <Row className="mb-20">
                        <Col span={6}>
                          <Select id="title">
                            <option selected value="Title">
                              Title
                            </option>
                            <option value="mr">
                              Mr.
                            </option>
                            <option value="mrs">
                              Mrs
                            </option>
                          </Select>
                        </Col>
                        <Col>
                          <Field
                            name="email"
                            id="email"
                            placeholder="Full name"
                          />
                        </Col>
                      </Row>


                      <Row className="mb-20">
                        <Col span={12}>
                          <Label className="mb-8" for="email">
                            Date of birth
                          </Label>
                          <Field
                            name="email"
                            id="email"
                            placeholder="DD/MM/YY"
                          />
                        </Col>
                      </Row>


                      <Label className="mb-8" for="email">
                        Passport information
                      </Label>
                      <Row>
                        <Col span={12}>
                          <Field
                            name="email"
                            id="email"
                            placeholder="Passport number"
                          />
                        </Col>
                        <Col span={12}>
                          <Field
                            name="email"
                            id="email"
                            placeholder="Validity DD/MM/YY"
                          />
                        </Col>
                      </Row>
                    </div>

                    <Button type="primary" className="mt-20 pb-30">
                      Continue booking
                    </Button>

                  </Col>
                </Row>
              </ItineraryBody>
              </Collapse>





              <ItineraryHeader step={4}>
                Pay to complete your booking
              </ItineraryHeader>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default BookPolicy;