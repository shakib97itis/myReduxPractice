import {ADD_BOOKING, DELETE_BOOKING} from './actionTypes';

export const addBooking = (payload) => ({type: ADD_BOOKING, payload});
export const deleteBooking = (payload) => ({type: DELETE_BOOKING, payload});
