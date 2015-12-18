# User Authentication Scaffold

_by Nicholas Neumann-Chun and Paul Richter_

### Description

The important part is the `users` directory, which contains a user model and route.  There's also authorization middleware that can be plugged into any route.

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
- `refreshToken`: default `false` - renew token in authMiddleware
- `saltRounds`: default `10` - slows password hashing in bcrypt
- `validatePassword`: default returns `true`
- `validateUsername`: default returns `true`
