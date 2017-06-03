import styled from 'styled-components'
import {
  KfTextFocusIn,
  KfTextFocusExpand,
  KfTextFocusContract,
  KfTextBlurOut,
  KfTextBlurContract,
  KfTextBlurExpand,
  KfTextPopUpTop,
  KfTextPopUpRight,
  KfTextPopUpBottom,
  KfTextPopUpLeft,
  KfTypewriter,
  KfBlinkTextCursor,
  KfShadowDropCenter,
  KfShadowDropLeft,
  KfShadowDropRight,
  KfShadowDropTop,
  KfShadowDropBottom
} from './styles/keyframes'
import { capitalize } from './helpers/string'

const focusKlasses = { KfTextFocusIn, KfTextFocusExpand, KfTextFocusContract }
const blurKlasses = { KfTextBlurOut, KfTextBlurContract, KfTextBlurExpand }
const popKlasses = { KfTextPopUpTop, KfTextPopUpRight, KfTextPopUpBottom, KfTextPopUpLeft }
const shadowKlasses = { KfShadowDropCenter, KfShadowDropLeft, KfShadowDropRight, KfShadowDropTop, KfShadowDropBottom }

const textFocusType = type => {
  return focusKlasses[`KfTextFocus${capitalize(type)}`]
}

const blurType = type => {
  return blurKlasses[`KfTextBlur${capitalize(type)}`]
}

const popType = type => {
  return popKlasses[`KfTextPopUp${capitalize(type)}`]
}

const shadowType = type => {
  return shadowKlasses[`KfShadowDrop${capitalize(type)}`]
}

export const TextFocus = styled.div`
  -webkit-animation: ${props => textFocusType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: ${props => textFocusType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const TextBlur = styled.div`
  -webkit-animation: ${props => blurType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: ${props => blurType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const TextPopUp = styled.div`
  -webkit-animation: ${props => popType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: ${props => popType(props.type)} ${props => props.duration || '1s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const TextShadow = styled.div`
  -webkit-animation: ${props => shadowType(props.type)} ${props => props.duration || '1s'} both;
  animation: ${props => shadowType(props.type)} ${props => props.duration || '1s'} both;
`

export const TextTypeWriter = styled.div`
    width: 12em;
    border-right: 2px solid black;
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    animation: ${KfTypewriter} ${props => props.duration || '1s'} steps(34) 1s 1 normal both,
         ${KfBlinkTextCursor} 500ms steps(34) infinite normal;
`
