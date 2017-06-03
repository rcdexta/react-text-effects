import React from 'react'
import styled, { css } from 'styled-components'
import * as polished from 'polished'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
`

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`

const StyledEditor = styled(LiveEditor)`
  font-size: 0.8rem;
  cursor: text;
  font-family: 'Source Code Pro', Monaco, Monospace;
  ${column}
`

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 150%;
  color: black;
  height: auto;
  overflow: hidden;
  ${column}
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: #ff5555;
  color: #f8f8f2;
`

const LiveEdit = ({ noInline, code, scope }) => (
  <StyledProvider code={code} scope={scope}>
    <LiveWrapper>
      <StyledEditor />
      <StyledPreview />
    </LiveWrapper>
    <StyledError />
  </StyledProvider>
)

export default LiveEdit
