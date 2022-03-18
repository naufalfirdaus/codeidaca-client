import * as ActionType from "../constants/CampDetailConstant.js";

export const doGetBootcampRequest = (payload) => ({
  type: ActionType.GET_BOOTCAMP_REQUEST,
  payload,
});

export const doGetBootcampSucceed = (payload) => ({
  type: ActionType.GET_BOOTCAMP_SUCCEED,
  payload
});

export const doGetBootcampFailed = (payload) => ({
  type: ActionType.GET_BOOTCAMP_FAILED,
  payload,
});
