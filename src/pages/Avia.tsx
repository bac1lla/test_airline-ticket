import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button, Container, Input, InputGroup, InputIcon, InputLabel} from "../styles/styled-components";
import {MAIN_BLUE_COLOR} from "../styles/consts";
import useInput from "../hooks/useInput";
import {useNavigate} from "react-router";
import {AVIA_INFO_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CalendarBlue from "./../assets/icons/calendar-blue.svg"
import CalendarGray from "./../assets/icons/calendar-gray.svg"

const validateCountry = (location: string): boolean =>
    /^[a-zA-ZА-Яа-я\s]+$/.test(location)

const validateDate = (date: string): boolean =>
    /^\d\d.\d\d.\d\d\d\d$/.test(date)

const validateData = (location: string, destination: string, departDate: string): boolean =>
    validateCountry(location) && validateCountry(destination) && validateDate(departDate)

const Avia = observer(() => {

    const location = useInput("")
    const destination = useInput("")
    const departDate = useInput("")
    const returnDate = useInput("")
    const [activeBtn, setActiveBtn] = useState<boolean>(false)

    useEffect(() => {
        setActiveBtn(validateData(location.value, destination.value, departDate.value));
    }, [location, destination, departDate, activeBtn]);

    const navigate = useNavigate()
    const {ticket} = useContext(Context)

    const handleSubmit = () => {
        ticket.setLocation(location.value)
        ticket.setDestination(destination.value)
        ticket.setDepartDate(departDate.value)
        ticket.setReturnDate(returnDate.value)
        ticket.setRoundTrip(validateDate(returnDate.value))
        navigate(AVIA_INFO_ROUTE)
    }

    return (
        <Container>
            <AviaMain>
                <AviaForm>
                    <AviaInput>
                        <InputLabel>Откуда</InputLabel>
                        <Input {...location} placeholder={"Город вылета"} maxLength={16}/>
                    </AviaInput>
                    <AviaInput>
                        <InputLabel>Куда</InputLabel>
                        <Input {...destination} placeholder={"Город прилёта"} maxLength={16}/>
                    </AviaInput>
                    <AviaInput>
                        <InputLabel>Туда</InputLabel>
                        <InputGroup>
                            <InputIcon src={CalendarBlue} alt={"calendar"}/>
                            <Input icon={true} {...departDate} placeholder={"дд.мм.гг"} maxLength={10}/>
                        </InputGroup>
                    </AviaInput>
                    <AviaInput>
                        <InputLabel>Обратно</InputLabel>
                        <InputGroup>
                            <InputIcon src={CalendarGray} alt={"calendar"}/>
                            <Input icon={true} {...returnDate} placeholder={"дд.мм.гг"} maxLength={10}/>
                        </InputGroup>
                    </AviaInput>
                </AviaForm>
                <AviaSendForm>
                    <Button disabled={!activeBtn} onClick={() => handleSubmit()}>Найти билеты</Button>
                </AviaSendForm>
            </AviaMain>
        </Container>
    );
});

export default Avia;

const AviaMain = styled.div`
  background: #FFFFFF;
  box-shadow: 0 0 14px rgba(112, 121, 153, 0.3);
  border-radius: 15px;
`
const AviaForm = styled.div`
  display: flex;
  padding: 20px 30px 30px 30px;
  gap: 25px;
  background: ${MAIN_BLUE_COLOR};
  height: 100px;
  border-radius: 15px 15px 0 0;
`
const AviaSendForm = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 23px 30px;
  border-radius: 0 0 15px 15px;
`
const AviaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`
