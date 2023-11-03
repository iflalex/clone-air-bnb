import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import './styles/index.scss';
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router/>
  </Provider>
);