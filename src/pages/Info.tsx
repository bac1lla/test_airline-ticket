import React, {FC, useContext} from 'react';
import {Container} from "../styles/styled-components";
import {Context} from "../index";
import Ticket from "../components/Ticket";

const Info: FC = () => {

    const {ticket} = useContext(Context)

    return (
        <Container>
            <Ticket roundTrip={ticket.roundTrip}
                    destination={ticket.destination}
                    location={ticket.location}
                    departDate={ticket.departDate}
                    returnDate={ticket.returnDate}/>
        </Container>
    );
};

export default Info;



