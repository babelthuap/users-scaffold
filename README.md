# User Authentication Scaffold

_by Nicholas Neumann-Chun and Paul Richter_

### Description

The important part is the `users` directory, which contains a user model and route.  There's also authorization middleware that can be plugged into any route.

The other branches of this repo contain examples.  The `backend-example` demonstrates how to plug the user stuff into a basic Express app.  The `angular-example` builds on the backend example, showing how to use the user stuff on the client side.

### Packages Needed For User Stuff

`npm i --save express mongoose jwt-simple bcryptjs moment`

### Required Registration Info

The client needs to send this information with a registration POST request:

```
{
  username
  password
  password2
}
```

A login POST only needs

```
{
  username
  password
}
```

### Config Constants (In `authConfig.js`)

- `expTime`: default `{num: 7, unit: 'days'}` - expiration time for tokens
- `refreshToken`: default `false` - whether to renew token in authMiddleware
- `saltRounds`: default `10` - slows password hashing in bcrypt (10 is normal, 13 is noticeably slow)
- `validatePassword`: default returns `true` - put restrictions on the form that passwords can take
- `validateUsername`: default returns `true` - put restrictions on the form that usernames can take
