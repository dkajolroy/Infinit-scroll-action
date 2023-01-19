import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import InfiniteScrollAction from '../src'
describe('Common render', () => {
  it('renders without crashing', () => {
    render(<InfiniteScrollAction callback={() => {}}>ami</InfiniteScrollAction>)
  })
})
