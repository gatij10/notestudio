import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/usercontext/UserContext';
import { NoteProvider } from './context/notecontext/NoteContext'


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


