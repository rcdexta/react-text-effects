import { keyframes } from 'styled-components'

export const KfTextFocusIn = keyframes`
  0% {
    -webkit-filter:blur(12px);filter:blur(12px);opacity:0;
  }
  100% {
  -webkit-filter:blur(0);filter:blur(0);opacity:1;
  }
`
export const KfTextFocusExpand = keyframes`
  0% {
    letter-spacing:-.5em;-webkit-filter:blur(12px);filter:blur(12px);opacity:0;
  }
  100% {
    -webkit-filter:blur(0);filter:blur(0);opacity:1;
  }
`

export const KfTextFocusContract = keyframes`
  0% {
    letter-spacing: 1em;-webkit-filter: blur(12px);filter: blur(12px);opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);filter: blur(0px);opacity: 1;
  }
`

export const KfTextBlurOut = keyframes`
  0% {
    -webkit-filter: blur(0.01);filter: blur(0.01);
  }
  100% {
    -webkit-filter: blur(12px) opacity(0%);filter: blur(12px) opacity(0%);
  }
`

export const KfTextBlurContract = keyframes`
  0% {
    -webkit-filter: blur(0.01);filter: blur(0.01);
  }
  100% {
    letter-spacing: -0.5em;-webkit-filter: blur(12px) opacity(0%);filter: blur(12px) opacity(0%);
  }
`

export const KfTextBlurExpand = keyframes`
  0% {
    -webkit-filter: blur(0.01);filter: blur(0.01);
  }
  100% {
    letter-spacing: 1em;-webkit-filter: blur(12px) opacity(0%);filter: blur(12px) opacity(0%);
  }
`

export const KfTextPopUpTop = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`

export const KfTextPopUpRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateX(15px);
            transform: translateX(15px);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`

export const KfTextPopUpBottom = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(15px);
            transform: translateY(15px);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`

export const KfTextPopUpLeft = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateX(-15px);
            transform: translateX(-15px);
    -webkit-transform-origin: 15% 15%;
            transform-origin: 15% 15%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`

export const KfTypewriter = keyframes`
  from{width: 0;}
  to{width: 9em;}
`

export const KfBlinkTextCursor = keyframes`
  from{border-right-color: black;}
  to{border-right-color: transparent;}
`

export const KfShadowDropCenter = keyframes`
  0% {
    text-shadow: 0 0 0 #fff;
  }
  100% {
    text-shadow: 0 0 15px #000;
  }
`

export const KfShadowDropTop = keyframes`
  0% {
    text-shadow: 0 0 0 #fff;
  }
  100% {
    text-shadow: 0 -6px 15px #000;
  }
`

export const KfShadowDropRight = keyframes`
  0% {
    text-shadow: 0 0 0 #fff;
  }
  100% {
    text-shadow: 6px 0px 15px #000;
  }
`

export const KfShadowDropBottom = keyframes`
  0% {
    text-shadow: 0 0 0 #fff;
  }
  100% {
    text-shadow: 0px 6px 15px #000;
  }
`

export const KfShadowDropLeft = keyframes`
  0% {
    text-shadow: 0 0 0 #fff;
  }
  100% {
    text-shadow: -6px 0px 15px #000;
  }
`
