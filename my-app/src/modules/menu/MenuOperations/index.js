import axios from 'axios';
import actions from '../MenuActions/index';

const fetchAllMenuItems = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get('http://localhost:3001/menu')
    .then(response => dispatch(actions.fetchSuccess(response.data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchAllMenuItems };
