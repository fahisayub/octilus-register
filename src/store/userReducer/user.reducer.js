import * as types from './user.types';


let initState = {
    isLoading: false, isError: false, userId: '', message: '', success: false,
}

export const userReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case types.ADD_USER_DATA_LOADING: return { ...state, isLoading: true, isError: false }
        case types.ADD_USER_DATA_SUCCESS: return { ...state, isLoading: false, isError: false, userId: payload.id, success: payload.success }
        case types.ADD_USER_DATA_FAILURE: return { ...state, isLoading: false, isError: true }

        case types.UPDATE_USER_DATA_LOADING: return { ...state, isLoading: true, isError: false }
        case types.UPDATE_USER_DATA_SUCCESS: return { ...state, isLoading: false, isError: false, userId: payload.id, success: payload.success, }
        case types.UPDATE_USER_DATA_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state;
    }
}