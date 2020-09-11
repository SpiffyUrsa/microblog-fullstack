import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../homepage/Homepage.js'
import NewPost from '../posts/NewPost.js';
import PostDetails from '../posts/PostDetails.js'
import NotFound from "../NotFound";

/** Routes: Contains the routes for the app.
 * 
 * App -> Routes
 */

function Routes() {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/notfound">
          <NotFound />
        </Route>
        <Route exact path="/:id">
          <PostDetails />
        </Route>
        <NotFound />
      </Switch>
    </div>
  )
}

export default Routes