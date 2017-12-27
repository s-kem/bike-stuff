import fetchGithubFollowersListener from './fetchGithubFollowers'
import { fork } from 'redux-saga/effects'

export default function* sagasMain() {
  yield fork(fetchGithubFollowersListener)
}