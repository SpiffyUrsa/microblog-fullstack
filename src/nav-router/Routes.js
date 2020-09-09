import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from '../homepage/Homepage.js'
import PostForm from '../common/PostForm.js'
import PostDetails from '../posts/PostDetails.js'

function Routes(){

  return(
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/new">
          <PostForm />
        </Route>

        <Route exact path="/:postId">
          <PostDetails />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes