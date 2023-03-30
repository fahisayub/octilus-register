import * as types from './user.types'
import axios from 'axios'


export const registerUserApi = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_USER_DATA_LOADING });

    await axios.post('https://dev.octilus.in/api/create.php', payload).then((res) => {
        dispatch({ type: types.ADD_USER_DATA_SUCCESS, payload: res.data });
        console.log(res.data);
    }).catch((err) => {
        dispatch({ type: types.ADD_USER_DATA_FAILURE })
        console.log(err);

    })

}
export const updateUserApi = (payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_USER_DATA_LOADING });

    await axios.put('https://dev.octilus.in/api/update.php', payload).then((res) => {
        dispatch({ type: types.UPDATE_USER_DATA_SUCCESS, payload: res });
        console.log(res);
    }).catch((err) => {
        dispatch({ type: types.UPDATE_USER_DATA_FAILURE })
        console.log(err);

    })

}