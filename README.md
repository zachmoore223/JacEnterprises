# Pages:
    -Index.html (localhost:8080) - login page to enter
    -About Page
    -Contact Page

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
    1. An aesthetically pleasing look and feel
    2. Dynamic app appealing to ages 6 to 13
    3. Use 2 APIs (Bored, Metro Art)
    4. Build our own API
        -Two GETS
        -One POST, PUT, or DELETE
    5. Each new vists will provide something new to learn or explore
    6. About page w/ professional pics and bios
    7. Contact page using provided CSS & HTML (https://github.com/cljenkinsjr/jackr-enterprises-site/blob/main/index.html)

# MVP:

    - Create Login for user (username only)
    - Create a main page for user to interact with
    - Create About Us page with professional pictures/short bios of team JAMZ
    - Create contact page 
    - Add a single API for the user to interact with