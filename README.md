# Nextjs Admin Jwt Boilerplate

This is a admin site boilerplate of the series [nextjs-client-jwt-boilerplate](https://github.com/hunkim98/nextjs-client-jwt-boilerplate), [nestjs-auth-jwt-boilerplate](https://github.com/hunkim98/nestjs-serverless-jwt-boilerplate)

This repository uses next js for its frontend framework. Currently, this repository only has functionalities of listing the users in the service


### Reminders

> This is the admin frontend project for my `fullstack` boilerplate.
> If you are interested in getting to know the client framework and server framework, check out the below repositories also!

#### For Client: [nextjs-client-jwt-boilerplate](https://github.com/hunkim98/nextjs-client-jwt-boilerplate)

#### For Admin: [nestjs-serverless-jwt-boilerplate](https://github.com/hunkim98/nestjs-serverless-jwt-boilerplate)

<hr/>

# Previews

#### Login screen
<img width="1792" alt="Screen Shot 2022-08-26 at 1 19 17 AM" src="https://user-images.githubusercontent.com/57612141/186717973-c160c14e-583e-4c96-962b-10125d86876b.png">

#### User listing
<img width="1792" alt="Screen Shot 2022-08-26 at 1 22 15 AM" src="https://user-images.githubusercontent.com/57612141/186718339-9f1bc28b-79bd-49e2-b2ae-d9683d1f37cc.png">

# Installation

```
$ yarn
```

or 

```
$ npm install
```

<hr/>

# Start project

```
$ yarn dev
```

or
```
$ npm run dev
```

#### Don't forget to start the server to test out the project!!!

If you don't have any server created to test this admin site, go check my [nestjs-serverless-jwt-boilerplate](https://github.com/hunkim98/nestjs-serverless-jwt-boilerplate) to quickly begin the project.

<hr/>

# Explanation

This is an admin site for managing data in the server. Currently the admin site has only the basic functionality of listing the registered users only. You may add more functionalities as you develop your backend server.


#### IMPORTANT!
If you see the AuthProvider onTokenReceived function, you can see that it expects the axios response to have `role` data in it.

```ts  
const onTokenReceived = (response: AxiosResponse<any, any>) => {
const { accessToken, role, isEmailVerified } =
    response.data as VerifiedUserResDto;
if (role === "ADMIN") {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    dispatch(validateAuthentication({ accessToken }));
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
} else {
    throw new AxiosError("Not an admin");
}
};
```

This means that only the user with the role `ADMIN` will be accepted to login to this admin website. This also means that in your backend server DB, you must have a column for tracking the role of a user. A good practice is to use an enum for that purpose.

```ts 
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
```

If you are not sure how to create a column dedicated to differentiating if the user is `ADMIN` or `USER` check my [nestjs-serverless-jwt-boilerplate](https://github.com/hunkim98/nestjs-serverless-jwt-boilerplate) repository that is linked to this repository. In the schema file, you can see that the User schema has a column that contains information on the role of the user.
