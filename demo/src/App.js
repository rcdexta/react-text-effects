import React, { Component } from 'react'
import './App.css'
import Preview from './components/Preview'
import { TextFocus, TextBlur, TextPopUp, TextTypeWriter, TextShadow } from '../../components/styles'
import { ProjectTitle, SmallHeading } from './styles/common'
import styled from 'styled-components'
import * as polished from 'polished'

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: ${polished.rem(1024)};
  padding: ${polished.rem(20)};
  padding-bottom: ${polished.rem(100)};
  text-align: center;
  color: #373A46;
`

const textFocusCode = `<TextFocus type='in' duration='2s'>
    Alohomora
</TextFocus>`

const textBlurCode = `<TextBlur type='out' duration='2s'>
    Evanesco
</TextBlur>`

const textPopCode = `<TextPopUp type='top' duration='1s'>
    Dumbledore
</TextPopUp>
`

const typeWriterCode = `<TextTypeWriter duration='5s'>
    Avada Kedavra
</TextTypeWriter>`

const shadowCode = `<TextShadow type='center' duration='5s'>
    Prior Incantato
</TextShadow>`

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectTitle>react-text-effects</ProjectTitle>
        <Container>
          <SmallHeading>
            This playground displays
            {' '}
            <a href="https://github.com/FormidableLabs/react-live/">react-live</a>
            {' '}
            templates for all the text-effects available. Play with the prop values based on documentation below and see the changes in the right preview pane
            {' '}
          </SmallHeading>
          <Preview
            globalVar={TextFocus}
            directive="TextFocus"
            title="1. Text Focus"
            code={textFocusCode}
            attrs={[['type', 'string', 'in, expand, contract', 'Transition Type'], ['duration', 'string', 'E.g.: 2s', 'Duration of animation in seconds']]}
          />
          <Preview
            globalVar={TextShadow}
            directive="TextShadow"
            title="2. Text Shadow"
            code={shadowCode}
            attrs={[['type', 'string', 'center, top, left, right, bottom', 'Shadow Direction'], ['duration', 'string', 'E.g.: 4s', 'Typing speed']]}
          />
          <Preview
            globalVar={TextBlur}
            directive="TextBlur"
            title="3. Text Blur"
            code={textBlurCode}
            attrs={[['type', 'string', 'out, expand, contract', 'Transition Type'], ['duration', 'string', 'E.g.: 2s', 'Duration of animation in seconds']]}
          />
          <Preview
            globalVar={TextPopUp}
            directive="TextPopUp"
            title="4. Text Pop Up"
            code={textPopCode}
            attrs={[['type', 'string', 'top, right, bottom, left', 'Pop Up Direction'], ['duration', 'string', 'E.g.: 2s', 'Duration of animation in seconds']]}
          />
          <Preview
            globalVar={TextTypeWriter}
            directive="TextTypeWriter"
            title="5. Text Type Writer"
            code={typeWriterCode}
            attrs={[['duration', 'string', 'E.g.: 4s', 'Typing speed']]}
          />
        </Container>
      </div>
    )
  }
}

export default App
