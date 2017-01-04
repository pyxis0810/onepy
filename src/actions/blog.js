import { createAction } from 'redux-actions';
import axios from 'axios';

import { baseUrl } from './';

import {
    GET_BLOG
} from './';

export const getBlog = createAction(GET_BLOG, () => {
  return axios.get(`${baseUrl}/blog`)
    .then(function (response) {
      const blogs = response.data.item.slice(0,6);
      return blogs;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
});
