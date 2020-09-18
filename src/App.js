import React from 'react';
import { Provider } from 'react-redux';
import Store from 'store/store';
import 'App.scss';

import PasswordManager from 'views/PasswordManager';

export function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <PasswordManager />
      </Provider>
    </div>
  );
}

export default App;
