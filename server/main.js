import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import ConnectRoute from 'connect-route'
import { Links } from '../imports/collections/Links'


Meteor.startup(()=> {
    Meteor.publish('links', function(){
        return Links.find({})
    })
})

// Executed whenever a user visits route like 'localhost:3000/abcd'
function onRoute(req, res, next){
    //Find link matching token in url inside Links collection
    const link = Links.findOne({ token: req.params.token})

    //If link => redirect user to long url
    if(link){
        Links.update(link, {$inc: {clicks: 1}})
        res.writeHead(307, {'Location': link.url})
        res.end()
    } else {
        //else => send user to normal react app
        next()
    }

    

}

const middleware = ConnectRoute(function(router){
    router.get('/:token', onRoute)
})

WebApp.connectHandlers.use(middleware)