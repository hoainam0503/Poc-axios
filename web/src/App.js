import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Dashboard from './containers/Dashboard/index';
import store from './app-state/store';
import userManager from './utils/auth/userManager';

function App() {
  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <>
          <Suspense fallback="Loading...">
            <Dashboard />
          </Suspense>
          <ToastContainer />
        </>
      </OidcProvider>
    </Provider>
  );
}

export default App;
