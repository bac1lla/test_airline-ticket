import React, {FC} from 'react';
import TicketMain from "./TicketMain";
import styled from "styled-components";
import {PRIMARY_TEXT_COLOR} from "../styles/consts";

interface ITicketProps {
    location: string,
    destination: string,
    departDate: string,
    returnDate?: string
    roundTrip: boolean
}

const Ticket: FC<ITicketProps> = ({location, destination, departDate, returnDate, roundTrip}) => {

    return (
        <TicketStyled>
            {
                roundTrip ?
                    <div>
                        <TicketMain location={location} date={departDate} destination={destination} roundTrip={true}/>
                        <TicketMain location={destination} date={returnDate || departDate} destination={location}
                                    roundTrip={true}/>
                    </div>
                    :
                    <TicketMain location={location} date={departDate} destination={destination} roundTrip={false}/>
            }
            <TicketPrice>{roundTrip ? "9 300 ₽" : "4 150 ₽"}</TicketPrice>
        </TicketStyled>
    );
};

export default Ticket;

const TicketStyled = styled.div`
  background: #FFFFFF;
  box-shadow: 0 0 14px rgba(112, 121, 153, 0.3);
  border-radius: 15px;
  display: flex;
`
const TicketPrice = styled.span`
  font-weight: 700;
  font-size: 32px;
  color: ${PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
`