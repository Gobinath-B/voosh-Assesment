

`# Authentication API

This is a Node.js-based authentication API that allows users to register, log in, log out, view and edit their profiles, set profile privacy, and upload profile pictures.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gobinath-B/voosh-Assesment.git `

1.  Install dependencies:

    bashCopy code

    `npm install`

2.  Set up environment variables:

    -   Create a `.env` file in the root directory.
    -   Define environment variables like `PORT`, `DATABASE_URL`, etc. in the `.env` file.
3.  Start the server:

    bashCopy code

    `npm start`

Usage
-----

### Register User

-   Endpoint: `POST /register`
-   Description: Registers a new user with the provided username, email, and password.

### Log In User

-   Endpoint: `POST /login`
-   Description: Logs in an existing user with the provided username and password.

### Log Out User

-   Endpoint: `POST /logout`
-   Description: Logs out the currently authenticated user.

### View User Profile

-   Endpoint: `GET /profile`
-   Description: Retrieves the profile details of the currently authenticated user.

### Update User Profile

-   Endpoint: `PUT /profile`
-   Description: Updates the profile details of the currently authenticated user.

### Set Profile Privacy

-   Endpoint: `PUT /profile/privacy`
-   Description: Sets the profile privacy setting (public or private) for the currently authenticated user.

### Upload Profile Picture

-   Endpoint: `POST /profile/upload`
-   Description: Uploads a new profile picture for the currently authenticated user.