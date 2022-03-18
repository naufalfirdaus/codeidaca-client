import {
    call,
    put,
  } from "redux-saga/effects";
  
  import apiCampDetail from "../../api/ApiCampDetail";
  import {
    doGetBootcampSucceed,
    doGetBootcampFailed,
  } from "../actions/CampDetailAction";
  
  function* handleGetBootcamp(action) {
    console.log("sudah sampai di middleware");
    const { payload } = action;
    try {
      const result = yield call(apiCampDetail.findAll, payload);
      yield put(doGetBootcampSucceed(result));
    } catch (error) {
      yield put(doGetBootcampFailed(error));
    }
  }
    
  export { handleGetBootcamp };
  