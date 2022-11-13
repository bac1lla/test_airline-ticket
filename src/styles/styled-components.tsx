import styled from "styled-components";
import {MAIN_BLUE_COLOR, WHITE_TEXT_COLOR} from "./consts";

export const Container = styled.div`
  margin: auto;
  width: 1200px;
  padding: 70px 110px;
`

interface IButton {
    disabled?: boolean
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.disabled ? "rgba(256, 256, 256, 0.5)" : WHITE_TEXT_COLOR};
  font-size: 14px;
  padding: 15px 20px;
  border: none;
  outline: none;
  height: 40px;
  background: ${props => props.disabled ? "#B7BAC1" : MAIN_BLUE_COLOR};
  border-radius: 10px;
  
  &:active {
    color: ${props => props.disabled ? WHITE_TEXT_COLOR : "rgba(256, 256, 256, 0.5)"};
  }
`

interface IInput {
    icon?: boolean
}

export const Input = styled.input<IInput>`
  background: ${WHITE_TEXT_COLOR};
  padding: ${props => props.icon ? "12px 12px 12px 34px" : "12px"};
  border-radius: 10px;
  min-width: 208px;
  border: none;
  outline: none;
  font-weight: 700;
  line-height: 16px;
`
export const InputIcon = styled.img`
  position: absolute;
  padding: 12px 6px 12px 12px;
  z-index: 1;
`
export const InputGroup = styled.div`
  position: relative;
`

export const InputLabel = styled.span`
  font-size: 11px;
  color: ${WHITE_TEXT_COLOR};
`

interface ICol {
    gap?: number
    alignItems?: string
}

export const Col = styled.div<ICol>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  justify-content: center;
  gap: ${props => props.gap ? props.gap + "px" : "none"};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`