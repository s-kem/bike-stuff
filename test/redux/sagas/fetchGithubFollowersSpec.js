import listener, { fetchGithubFollowers as saga }
  from '../../../src/client/redux/sagas/fetchGithubFollowers'
import { takeLatest } from 'redux-saga/effects'

describe('Fetch Github Followers Saga', () => {
  it('listens for the correct action fired', () => {
    const generator = listener()
    const step = lastYield => generator.next(lastYield).value
    const constant = 'github/FETCH_FOLLOWERS'

    expect(step()).toEqual(takeLatest(constant, saga))
  })
})
