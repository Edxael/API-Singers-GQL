# Info & Notes 

Information on this project.


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