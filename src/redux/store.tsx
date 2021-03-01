import {configureStore} from '@reduxjs/toolkit';

const preloadedState = sessionStorage.getItem('selectedMovie')
  ? JSON.parse(localStorage.getItem('selectedMovie') as string)
  : {};

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger, sagaMiddleware];

export const store = configureStore({
  reducer: {},
  preloadedState,
  // middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
});

// sagaMiddleware.run(rootWatcher);

// store.subscribe(() => {
//   sessionStorage.setItem('selectedMovie', JSON.stringify(store.getState()));
// });

export type RootState = ReturnType<typeof store.getState>;
