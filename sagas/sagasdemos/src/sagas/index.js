import UserSagas from "./users";
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...UserSagas
    ])
    //similar to promise.all
    //waits till all sagas are created in parallel
}