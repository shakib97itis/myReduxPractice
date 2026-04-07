import {
  ADDED,
  ALLCOMPLETE,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
  LOADED,
} from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED: {
      const {todoId, color} = action.payload;

      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color,
        };
      });
    }

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
