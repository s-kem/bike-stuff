import { fork } from 'redux-saga/effects'
import fetchGithubFollowersListener from './fetchGithubFollowers'

export default function* sagasMain() {
  yield fork(fetchGithubFollowersListener)
}
