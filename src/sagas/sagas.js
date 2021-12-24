import * as API from '../api/api'

import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPostsError, fetchPostsStart, fetchPostsSuccess } from '../redux/actions/postsActions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* fetchPosts() {
    yield put(fetchPostsStart());
	try {
		const posts = yield call(API.fetchPosts);

		yield put(fetchPostsSuccess(posts));
	} catch (e) {
		console.log(e);
		yield put(fetchPostsError());
	}
}
function* mySaga() {
  yield takeLatest('FETCH_POSTS_REQUEST', fetchPosts);
}

export default mySaga;