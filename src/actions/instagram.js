import { createAction } from 'redux-actions';
import axios from 'axios';

import { baseUrl } from './';

import {
    GET_INSTAGRAM
} from './';

export const getInstagram = createAction(GET_INSTAGRAM, () => {
  return axios.get(`${baseUrl}/instagram`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
});
