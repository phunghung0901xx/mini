import React from 'react';
import { Provider } from "react-redux"
import { store } from './redux';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}
export default App;
