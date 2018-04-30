# QUERIS & MUTATIONS

The following are examples of how to execute queries and mutations

To test your queries:

- Start server:  $ nodemon server.js
- Go to: http://localhost:4000/graphql
- Test you queries.



----------------------------------------------------
----------------------------------------------------
### Query User by ID:

query{
  user(id: "34"){
    firstName
    age
  }
}



----------------------------------------------------
### Query Company and All User

query{
  company(id: "1"){
    name
    description
    users{
      firstName
      age
    }
  }
}



----------------------------------------------------
### Add User

mutation{
  addUser(firstName: "Shakira", age: 32, companyId: "2"){
    firstName
    age
    id
  }
}



----------------------------------------------------
### Delete User

mutation{
  deleteUser(id: "SbSTqGF"){
    id
  }
}



----------------------------------------------------
### Update User

mutation{
  updateUser(id: "ychwsrr", firstName: "Taeyang"){
    firstName
    id
    age
    company {
      id
    }
  }
}


----------------------------------------------------
