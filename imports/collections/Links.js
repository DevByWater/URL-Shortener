import { Mongo } from 'meteor/mongo'
import { check, Match } from 'meteor/check'
import validUrl from 'valid-url'


Meteor.methods({
    'links.insert': function(url) {
        console.log('links insert: ', url )
        validUrl.isUri(url)
        check(url, Match.Where(url => validUrl.isUri(url)))
    }
})



export const Links = new Mongo.Collection('links')