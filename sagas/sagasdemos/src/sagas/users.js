import {takeEvery, call, fork} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

//worker saga
function* getUsers(){
    try{
        //call is used to execute a promise, put
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
    //fork will create and excute the sagas in parallel
    fork(watchGetUsersRequest)
    // fork(anothersaga)
]

export default userSagas;

