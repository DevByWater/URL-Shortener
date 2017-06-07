import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';


const App = () => {
  return (
    <h1>Hello World</h1>
  )
}
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.render-target'))
});
