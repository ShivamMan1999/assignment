import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
// import { store } from './redux/store';

import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//     // <Provider store={store}>
//     < BrowserRouter >
//         <HashRouter>
//             <div className="red_overlay">
//                 <App />
//             </div>
//         </HashRouter>
//     </BrowserRouter >
//     // </Provider >
//     ,
//     document.getElementById("root")
// );
reportWebVitals();
