/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '../Label'

storiesOf('Label', module).add('<Label text="hello world" />', () => (
  <Label text="hello world" />
))
