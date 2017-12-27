import reducer from '../../../src/client/redux/reducers/githubReducer'

const initialState = {
  followers: [],
  userId: '',
  error: false,
}

describe('Github Reducer', () => {
  it('exports the correct default state', () => {
    expect(reducer()).toEqual(initialState)
  })

  it('responds correctly to github/SET_FOLLOWERS', () => {
    const action = {
      type: 'github/SET_FOLLOWERS',
      followers: [ 'follower1', 'follower2' ],
    }
    const expectedState = {
      ...initialState,
      followers: [ 'follower1', 'follower2' ],
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('responds correctly to github/SET_USER_ID', () => {
    const action = {
      type: 'github/SET_USER_ID',
      userId: 'patrickrgaffney',
    }
    const expectedState = {
      ...initialState,
      followers: [],
      userId: 'patrickrgaffney',
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('responds correctly to github/SET_ERROR', () => {
    const action = {
      type: 'github/SET_ERROR',
      userId: 'patrickrgaffney',
    }
    const expectedState = {
      ...initialState,
      error: true,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
