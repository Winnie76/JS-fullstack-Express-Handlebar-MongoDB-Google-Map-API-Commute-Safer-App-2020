# Documentation


The "Commute Safer" app owns three core functionalities: safety tips, Pin/marker for bad locations & route planning and user registrations/login.

template engine: express-handlebars
website url: https://commute--safer.herokuapp.com/


*TIP

The "tips" function aims to let uses share safety messages with one other, which can increase their knowledge on self-protection and provide a sense of belonging, safety and support. Users can create, read, update and delete safety tips regarding general events or a specific location/route.


Get all tips:
click "view all tips" on homepage
https://commute--safer.herokuapp.com/tip/list

Post to the collection:
https://commute--safer.herokuapp.com/tip

Update a tip:
click 'pencil' icon to update
https://commute--safer.herokuapp.com/tip/list

Delete a tip
click 'bin' icon to delete
https://commute--safer.herokuapp.com/tip/list



*PIN


The pin/mark function is used to manage the pins/markers users added to the map, the data are stored as coordinates.There are "bad pins": places that make commuters feel unsafe and have a sketchy vibe/bad lighting/unfriendly crowds etc, this will be used alongside the GoogleMaps API.

Routing planning function is AVAILABLE so that users can plan their route as well as seeing all bad pins on map. Then they can avoid walking or driving pass bad pins/ unsafe places!

This function is based on users' location. It is expected to show as a map base with pins/marks on the map. The input is location of users(retrieving the longitude & laititude), and the outcome will be the pins/marks. Users are able to evaluate the location's safety level through pins.





Get all pins:
https://commute--safer.herokuapp.com/pin/getPins

Post to the collection:
https://commute--safer.herokuapp.com/pin/registerPins

Update a pin:
https://commute--safer.herokuapp.com/pin/updatePins

Delete a pin:
https://commute--safer.herokuapp.com/pin/deletePins


*USER REGISTRATION/LOGIN

For Registrations/Login, as commuter safer aims to provide a sense of belonging and safety by having a supportive community, it is essential to collect some information about the users. All information will be collected into a database for website. User can login/logout or see their profile! They can also update and delete their account!

Register:
https://commute--safer.herokuapp.com/user/register

Update a user:

https://commute--safer.herokuapp.com/user/updateUsers

Delete a user :

https://commute--safer.herokuapp.com/user/deleteUsers

Get all users information:

https://commute--safer.herokuapp.com/user/getUsers

Get profile:(when user logged in)

https://commute--safer.herokuapp.com/user/profile

login:

https://commute--safer.herokuapp.com/user/login

logout:
click logout button




