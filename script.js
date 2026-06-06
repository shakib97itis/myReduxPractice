// Initial State
const initialState = [
  {
    id: crypto.randomUUID(),
    count: 5,
  },
];

// Actions
const ADD_MATCH = 'ADD_MATCH';
const DELETE_MATCH = 'DELETE_MATCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action Creators
function addMatch() {
  return {
    type: ADD_MATCH,
  };
}

function deleteMatch(id) {
  return {
    type: DELETE_MATCH,
    payload: {id},
  };
}

function increment(id, value) {
  return {
    type: INCREMENT,
    payload: {id, value},
  };
}

function decrement(id, value) {
  return {
    type: DECREMENT,
    payload: {id, value},
  };
}

function reset() {
  return {
    type: RESET,
  };
}

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MATCH:
      return [...state, {id: crypto.randomUUID(), count: 0}];
    case DELETE_MATCH:
      return state.filter((match) => match.id !== action.payload.id);
    case INCREMENT:
      return state.map((match) => {
        if (match.id === action.payload.id) {
          return {...match, count: match.count + action.payload.value};
        }
        return match;
      });
    case DECREMENT:
      return state.map((match) => {
        if (match.id === action.payload.id) {
          if (match.count - action.payload.value < 0) return match;
          return {...match, count: match.count - action.payload.value};
        }
        return match;
      });
    case RESET:
      return initialState;
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(reducer);

// View
function generateMatch() {
  const match = document.createElement('div');
  match.classList.add('match');
  match.innerHTML = `
          <div class="wrapper">
            <button class="lws-delete">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match 1</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" name="increment" class="lws-increment" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" name="decrement" class="lws-decrement" />
            </form>
          </div>
          <div class="numbers">
            <h2 class="lws-singleResult">120</h2>
          </div>
    `;
  return match;
}

function render() {
  const allMatches = document.querySelector('.all-matches');
  const matches = store.getState();

  allMatches.innerHTML = '';

  matches.forEach((match, index) => {
    const matchElement = generateMatch();
    matchElement.querySelector('.lws-matchName').textContent = `Match ${
      index + 1
    }`;

    matchElement.querySelector('.lws-singleResult').textContent = match.count;

    // increment
    matchElement
      .querySelector('.incrementForm')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        const value = Number(e.target.increment.value);
        store.dispatch(increment(match.id, value));
      });

    // decrement
    matchElement
      .querySelector('.decrementForm')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        const value = Number(e.target.decrement.value);
        store.dispatch(decrement(match.id, value));
      });

    // delete
    matchElement.querySelector('.lws-delete').addEventListener('click', () => {
      store.dispatch(deleteMatch(match.id));
    });

    allMatches.appendChild(matchElement);
  });
}

render();

store.subscribe(render);

document.querySelector('.lws-addMatch').addEventListener('click', () => {
  store.dispatch(addMatch());
});

document.querySelector('.lws-reset').addEventListener('click', () => {
  store.dispatch(reset());
});
