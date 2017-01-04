import { combineReducers } from 'redux';
import locale from './locale';
import blog from './blog';
import instagram from './instagram';

export default combineReducers({
  locale: locale,
  blog: blog,
  instagram: instagram
});
