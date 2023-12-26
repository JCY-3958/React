import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter-3/Library';
import Clock from './chapter-4/Clock';
import Comment from './chapter-5/Comment';
import CommentList from './chapter-5/CommentList';
import NotificationList from './chapter-6/NotificationList';
import Accommodate from './chapter-7/Accommodate';
import ConfirmButton from './chapter-8/ConfirmButton';
import LandingPage from './chapter-9/LandingPage';
import AttendanceBook from './chapter-10/AttendanceBook';
import SignUp from './chapter-11/SignUp';
import Calculator from './chapter-12/Calculator';
import ProfileCard from './chapter-13/ProfileCard';
import DarkOrLight from './chapter-14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
