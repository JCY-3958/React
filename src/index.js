import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter-3/Library';
import Clock from './chpater-4/Clock';
import Comment from './chpater-5/Comment';
import CommentList from './chpater-5/CommentList';
import NotificationList from './chapter-6/NotificationList';
import Accommodate from './chpater-7/Accommodate';
import ConfirmButton from './chpater-8/ConfirmButton';
import LandingPage from './chapter-9/LandingPage';
import AttendanceBook from './chapter-10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <AttendanceBook />
    </React.StrictMode>
  )
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
