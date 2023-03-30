import * as types from './user.types'
import axios from 'axios'


export const registerUserApi = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_USER_DATA_LOADING });

    await axios.post('https://dev.octilus.in/api/create.php', payload).then((res) => {
        dispatch({ type: types.ADD_USER_DATA_SUCCESS, payload: res });
        console.log(res);
    }).catch((err) => {
        dispatch({ type: types.ADD_USER_DATA_FAILURE })
        console.log(err);

    })

}