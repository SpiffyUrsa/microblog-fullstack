import React, { useEffect } from 'react';
import './App.css';
import Navbar from './nav-router/Navbar'
import Routes from './nav-router/Routes'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getPostsFromAPI } from "./actionCreators";


/** App
 * App -> Navbar -> Router (-> PostForm, PostDetails, Homepage (->TitleList (->TitleCard))
 */
function App() {

  const dispatch = useDispatch();

  useEffect(function() {
    console.log("Our effect runs!");
    dispatch(getPostsFromAPI());
  }, [dispatch])

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