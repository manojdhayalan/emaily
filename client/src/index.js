import "materialize-css/dist/css/materialize.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from './reducers';
import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const el = document.getElementById("root");


const root = ReactDOM.createRoot(el);


root.render(<Provider store={store}><App /></Provider>);