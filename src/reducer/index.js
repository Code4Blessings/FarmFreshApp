import {
	LOGIN_ATTEMPT,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOG_OUT,
	ADD_TO_CART,
	DELETE_CART_ITEM,
	UPDATE_CART_ITEM,
} from '../actions';

const initialState = {};
const reducer = (state = initialState, action) => {
	console.log(state);
};
export default reducer;
