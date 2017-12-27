// import { call, put, select, takeLatest } from 'redux-saga/effects'
// import {
//   fetchFollowers,
//   setError,
//   setFollowers,
// } from '../actions/githubActions'
// import { get } from './helpers/makeFetchCall'
// import { getGithubUserId } from '../selectors'

// export function* fetchGithubFollowers() {
//   const userId = yield select(getGithubUserId)
//   const url = `https://api.github.com/users/${userId}/followers`
//   const response = yield call(get, { url })

//   if (response.error) {
//     yield put(setError())
//   } else if (Array.isArray(response.payload) && response.payload.length > 0) {
//     yield put(setFollowers(response.payload))
//   } else {
//     yield put(setFollowers([ 'no followers' ]))
//   }
// }

// export default function* () {
//   yield takeLatest(fetchFollowers().type, fetchGithubFollowers)
// }

export default function* () {
  yield null
}
