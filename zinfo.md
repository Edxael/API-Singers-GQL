# Info & Notes 

Where Im at: 
Query Fragments -- Sec: 4 -- Lecture: 24




=================================================================
This is the master branch

--------------------------------------------------

Other information on GraphQL Queries: https://www.youtube.com/watch?v=bX2e4FILf78
to see the request "QUERRY" and the PAYLOAD ---> Developert Tools "NETWORK" 

--------------------------------------------------


Information on this project.
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .

### To run the GraphQL-Server (Command Terminal in Root)
- $ nodemon server.js



---------------------------------------------
## Intalling the Json server:

### Terminal command to install server:
npm install --save json-server

### Line addes to Json to start the server: 
"json:server": "json-server --watch db.json"


## to start the json server: 
npm run json:server

##Resources
- http://localhost:3000/users
- http://localhost:3000/companies

Home
- http://localhost:3000



--------------------------------------------------
# Example of Query when single 'RootQueryType'
### Branch Single-RootQuery

{
  user(id: "77"){
    age
    firstName
    company {
      id
      name
      description
    }
  }
}

---[Answer]-------
{
  "data": {
    "user": {
      "age": 38,
      "firstName": "Ayumi Hamasaki",
      "company": {
        "id": "1",
        "name": "Avex",
        "description": "Japan"
      }
    }
  }
}

--------------------------------------------------
--------------------------------------------------

Using the key-Word: "QUERY"

query{
  company(id: "1"){
    name
    users{
      firstName
    }
  }
}

--------------------------------------------------
--------------------------------------------------

Giving a nae to the "QUERY"

query FindC1{
  company(id: "1"){
    name
    users{
      firstName
    }
  }
}

--------------------------------------------------
--------------------------------------------------
