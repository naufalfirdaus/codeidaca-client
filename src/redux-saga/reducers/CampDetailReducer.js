import * as ActionType from "../constants/CampDetailConstant";

const INIT_STATE = {
  bootcamps: [],
};
const BootcampReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMP_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_BOOTCAMP_SUCCEED:
      return applyGetBootcampSucceed(state, action);

    default:
      return state;
  }
};

const applyGetBootcampSucceed = (state, action) => {
  // const { payload } = action;
  // console.log("sudah sampai di reducer");
  // console.log(state.bootcamps);
  // const {bootcamp} = payload;
  let result = [action.payload]
  console.log(result);
  let hasil = [...result]
  // let {batch,curriculum,instructor,materi} = all
  console.log(hasil[0].curriculum.curr_tag);
  // let listmateri = [...materi]
  // const list = hasil[0].curriculum.map((mat) => (
  //   mat.curr_tag
  // ))
  // console.log(list);

  return {
    ...state,
    bootcamps: [...result],
  };
};

export default BootcampReducer;
