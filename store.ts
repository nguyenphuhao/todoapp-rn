import rootReducer from './src/services/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/services/rootSagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(rootSaga);

export default store;
