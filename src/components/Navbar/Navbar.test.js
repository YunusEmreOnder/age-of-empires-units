import React from 'react';
import { render } from '@testing-library/react'
import TopMenu from './index'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store,wrapper
  it('Hello', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><TopMenu /></Provider>)
    expect(getByText('Hello Worldd!')).not.toBeNull()
  })
})