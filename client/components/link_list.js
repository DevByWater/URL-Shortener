import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {Links} from '../../imports/collections/Links'

class LinkList extends Component {
    render(){
        return (
            <ul>
            </ul>
        )
    }
}

export default createContainer(()=> {
    Meteor.subscribe('links')

    return { links: Links.find({}).fetch()}
},LinkList)