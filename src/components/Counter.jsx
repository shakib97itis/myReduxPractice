import {connect} from 'react-redux';
import {increment, decrement} from '../redux/counter/actions';

function Counter({count, increment, decrement}) {
  console.log(count);
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
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
  return {count: state.value};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment: () => dispatch(increment(ownProps.incValue)),
    decrement: () => dispatch(decrement(ownProps.decValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
