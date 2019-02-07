import axios from 'axios';
import * as actions from '../CategoryActions/index';

const fetchAllCategoryItems = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get('http://localhost:3001/categories')
    .then(response => dispatch(actions.fetchSuccess(response.data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchAllCategoryItems };
