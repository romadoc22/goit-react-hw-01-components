import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import PropTypes from 'prop-types';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const elem1 = <span>Hello</span>;
// console.log(elem1);

// const element = React.createElement('div', {
//   a: 5,
//   b: 7,
//   children: 'Привіт світ',
// });
// console.log(element);

// const jsxElement = <div>qqwe 'Hello' {elem1}erywtgrv</div>;
// console.log(jsxElement);

// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);
// const data = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// ReactDOM.createRoot(document.getElementById('root')).render(profile);
