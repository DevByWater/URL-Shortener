import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';

import Header from './components/header'
import LinkCreate from './components/link_create'
import { Links } from '../imports/collections/Links'
import LinkList  from './components/link_list'


const App = () => {
  return (
    <div>
        <Header />
        <LinkCreate />
        <LinkList />
    </div>
  )
}
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.render-target'))
});
