import {Provider} from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Input from './components/input';
import Preview from './components/Preview';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Input />
        <Preview />
      </section>
    </Provider>
  );
}

export default App;
