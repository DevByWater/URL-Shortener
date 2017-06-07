import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';

import Header from './components/header'


const App = () => {
  return (
    <div>
        <Header />
    </div>
  )
}
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.render-target'))
});
