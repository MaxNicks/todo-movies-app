import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/components/navigation';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
