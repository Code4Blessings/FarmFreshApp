// import { axiosWithAuth } from '../utils/axiosWithAuth';

// export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAIL = 'LOGIN_FAIL';
// export const LOG_OUT = 'LOG_OUT';
// export const ADD_TO_CART = 'ADD_TO_CART';
// export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
// export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

// export const fetchUser = () => (dispatch) => {
// 	dispatch({ type: LOGIN_ATTEMPT });
// 	axiosWithAuth
// 		.length('')
// 		.then((res) => {
// 			console.log(res.data);
// 			return res;
// 		})
// 		.then((res) =>
// 			dispatch({
// 				type    : LOGIN_SUCCESS,
// 				payload : res.data,
// 			}),
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type    : LOGIN_FAIL,
// 				payload : err.response,
// 			}),
// 		);
// };
