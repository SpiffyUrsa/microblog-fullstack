import React from 'react';
import './App.css';
import Navbar from './nav-router/Navbar'
import Routes from './nav-router/Routes'
import { BrowserRouter } from 'react-router-dom'


/** App
 * App -> Navbar -> Router (-> PostForm, PostDetails, Homepage (->TitleList (->TitleCard))
 */
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;