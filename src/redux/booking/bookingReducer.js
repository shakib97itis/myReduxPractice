const initialState = {
  bookings: [
    {
      id: 1,
      from: 'Dhaka',
      to: 'Sylhet',
      date: '11-01-23',
      guests: 2,
      class: 'Economy',
    },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case 'DELETE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default bookingReducer;
