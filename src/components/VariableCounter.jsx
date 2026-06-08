/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import {connect} from 'react-redux';
import {increment, decrement} from '../redux/counter/actions';
import {
  dynamicDecrement,
  dynamicIncrement,
} from '../redux/dynamicCounter/actions';

function VariableCounter({count, increment, decrement, title}) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h1>{title}</h1>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return ownProps.dynamic
    ? {count: state.dynamicCounter.value}
    : {count: state.counter.value};
}

function mapDispatchToProps(dispatch, ownProps) {
  return ownProps.dynamic
    ? {
        increment: () => dispatch(dynamicIncrement(5)),
        decrement: () => dispatch(dynamicDecrement(2)),
      }
    : {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
