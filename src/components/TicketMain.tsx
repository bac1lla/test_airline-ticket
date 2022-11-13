import React, {FC, useContext, useState} from 'react';
import Logo from "../assets/img/s7-logo.png";
import {Button, Col, Row} from "../styles/styled-components";
import Baggage from "../assets/icons/baggage-min.svg";
import BaggageLarge from "../assets/icons/baggage-large.svg";
import styled from "styled-components";
import {GRAY_TEXT_COLOR, MAIN_BLUE_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR} from "../styles/consts";
import {IAvailableTime, ITicketSingle} from "../types/types";
import {Context} from "../index";

const TicketMain: FC<ITicketSingle> = ({location, destination, date, roundTrip}) => {
    const {ticket} = useContext(Context)
    const [activeBtnId, setActiveBtnId] = useState<string>("btnTime#0")

    const chooseTime = (id: number, time: IAvailableTime) => {
        ticket.setTime(time)
        setActiveBtnId(`btnTime#${id}`)
    }

    return (
        <TicketMainStyled>
            <TicketLabel>Невозвратный</TicketLabel>
            <TicketAirline>
                <AirlineLogo src={Logo} alt={"S7 Airlines"}/>
                <TicketAirlineText>S7 Airlines</TicketAirlineText>
            </TicketAirline>
            <Col alignItems={"flex-start"}>
                <Row>
                    <TicketFullRoute>
                        <TicketInfo>
                            <TicketTime>{ticket.time.startTime}</TicketTime>
                            <TicketCity>{location}</TicketCity>
                            <TicketDate>{date}</TicketDate>
                        </TicketInfo>
                        <TicketRoute>
                            <Col gap={9}>
                                <TicketAbbreviation>SVO</TicketAbbreviation>
                                <Dot/>
                            </Col>
                            <Line/>
                            <TicketRouteInfo>В пути 1 ч 55 мин</TicketRouteInfo>
                            <Col gap={9}>
                                <TicketAbbreviation>ROV</TicketAbbreviation>
                                <Dot/>
                            </Col>
                        </TicketRoute>
                        <TicketInfo>
                            <TicketTime>{ticket.time.finishTime}</TicketTime>
                            <TicketCity>{destination}</TicketCity>
                            <TicketDate>{date}</TicketDate>
                        </TicketInfo>
                    </TicketFullRoute>
                </Row>
                {
                    roundTrip ? <></> :
                        <TimeChoose>
                            {
                                ticket.availableTime.map((time, i) =>
                                    <ButtonTime key={`btnTime#${i}`} active={activeBtnId === `btnTime#${i}`}
                                                onClick={() => chooseTime(i, time)}>
                                        <StartTime>{time.startTime} -</StartTime>
                                        <FinishTime>{time.finishTime}</FinishTime>
                                    </ButtonTime>
                                )
                            }
                        </TimeChoose>
                }
            </Col>
            <TicketBaggage>
                <img src={Baggage} alt={"baggage-min"}/>
                <img src={BaggageLarge} alt={"baggage-large"}/>
            </TicketBaggage>
        </TicketMainStyled>
    );
};

export default TicketMain;

const TicketMainStyled = styled.div`
  width: 790px;
  display: flex;
  border-right: 1px solid #DDE3EE;
  justify-content: space-between;
  padding: 0 20px 41px 30px;
  position: relative;

  :nth-child(2) {
    border-top: 1px dashed ${MAIN_BLUE_COLOR};
  }
`
const TicketLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  padding: 6px 24px;
  background: #8BA5D8;
  border-radius: 15px 0;
  font-weight: 600;
  font-size: 12px;
  color: white;
`
const TicketAirline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding-top: 53px;
`
const AirlineLogo = styled.img`
  width: 39px;
  height: 39px;
`
const TicketAirlineText = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${GRAY_TEXT_COLOR};
`
const TicketFullRoute = styled(Row)`
  width: 530px;
`
const TicketInfo = styled(Col)`
  align-items: flex-start;
  width: 70px;
`
const TicketTime = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: ${PRIMARY_TEXT_COLOR};
  padding: 41px 0 8px 0;
`
const TicketCity = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${SECONDARY_TEXT_COLOR};
  white-space: nowrap;
`
const TicketDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${SECONDARY_TEXT_COLOR};
`
const TicketRoute = styled.div`
  display: flex;
  align-items: center;
  width: 297px;
  justify-content: space-between;
  padding-top: 14px;
  position: relative;
  height: 56px;
  margin-top: -34px;

`
const TicketRouteInfo = styled.span`
  color: ${GRAY_TEXT_COLOR};
  position: relative;
  top: 25px;
`
const Dot = styled.div`
  content: "";
  background: ${GRAY_TEXT_COLOR};
  width: 8px;
  height: 8px;
  border-radius: 100px;
`
const Line = styled.div`
  height: 1px;
  width: 269px;
  content: "";
  background: ${GRAY_TEXT_COLOR};
  position: absolute;
  top: 49px;
  left: 14px;
`
const TicketAbbreviation = styled.span`
  text-transform: uppercase;
  color: ${GRAY_TEXT_COLOR};
`
const TicketBaggage = styled(Row)`
  align-items: baseline;
  padding-top: 36px;
  gap: 10px;
`
const TimeChoose = styled(Row)`
  gap: 20px;
  margin-top: 30px;
  height: 40px;
`
const StartTime = styled.span`
  font-weight: 500;
  font-size: 18px;
`
const FinishTime = styled.span`
  font-weight: 500;
  font-size: 14px;
`

interface IButtonTime {
    active?: boolean
}
const ButtonTime = styled(Button)<IButtonTime>`
  background: ${props => props.active ? "#DDE3EE" : "white"};
  color: ${props => props.active ? PRIMARY_TEXT_COLOR : SECONDARY_TEXT_COLOR};
  padding: ${props => props.active ? "10px 15px" : "7px 5px"};
  border: ${props => props.active ? "none" : "1px solid #B7BAC1"};;
  height: ${props => props.active ? "40px" : "34px"};
  align-items: flex-end;
`