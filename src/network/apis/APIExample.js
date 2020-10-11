import { axiosInstance } from "./index";
const handlerEnabled = false;
const dummyData = require('./dummyData.json')

// Replace endpoint and change api name
const apiExampleRequest = async () => {
  return await axiosInstance.get(`ENDPOINT`, { handlerEnabled });
};

const apiDummyDataRequest = async () => {
  return await axiosInstance.get(`GET_DUMMY_DATA`, { dummyData });
};

export default {
  apiExampleRequest,
  apiDummyDataRequest
};
