import {takeEvery, call, fork} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

//worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        //any code here
        //will be called 
        //once this call has beeen resolved
        console.log(result)
    }
    catch(e){}
}
//watcher saga
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const userSagas = [
    fork(watchGetUsersRequest)
]

export default userSagas;

