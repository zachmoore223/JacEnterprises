# Instructions:
  * To Use website:
    * Run JamzApplication to run http://localhost:8080 for API server
    * Type 'npm start' in terminal to run website server

# End Points:
* All USERS: api/users
* SPECIFIED USER: api/users/{user_id}

# Curls:
* GET ALL USERS: 
* `curl -X GET http://localhost:8080/api/users -H 'Content-Type: application/json'`
* GET SPECIFIED USER: 
* `curl -X GET http://localhost:8080/api/users/1 -H 'Content-Type: application/json'`
* POST NEW USER: 
* `curl -X POST http://localhost:8080/api/users -H 'Content-Type: application/json' -d '{"userName": "Test"}'`

# Requirements:
    1. An aesthetically pleasing look and feel - DONE
    2. Dynamic app appealing to ages 6 to 13 - kind of
    3. Use 2 APIs (Bored, Metro Art) - DONE
    4. Build our own API - DONE
        -Two GETS - DONE
        -One POST, PUT, or DELETE - DONE (POST)
    5. Each new vists will provide something new to learn or explore - DONE
    6. About page w/ professional pics and bios - DONE
    7. Contact page using provided CSS & HTML (https://github.com/cljenkinsjr/jackr-enterprises-site/blob/main/index.html) - DONE

# MVP:

    - DONE Create Login for user (username only)
    - DONE Create a main page for user to interact with
    - DONE Create About Us page with professional pictures/short bios of team JAMZ
    - DONE Create contact page 
    - DONE Add a single API for the user to interact with