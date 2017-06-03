import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { TextFocus } from '../components'

storiesOf('App', module).add('default', () => (
  <div>
    <h2>Text Focus</h2>
    <TextFocus type='in' duration='2s'>
      Alohomora
    </TextFocus>
  </div>
))
