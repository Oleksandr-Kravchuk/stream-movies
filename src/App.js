import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';

import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
          <AppRouter />
      </HashRouter>
    </Provider>
  );
}

export default App;
