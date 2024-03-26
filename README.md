# LEETCODE PROBLEM SERVICE

This microservice handles addition of problems and testcases along with solutions
for Leetcode platform.

To set up the project on your local machine do the following steps:

1. Clone the project

```
git clone https://github.com/sonal1201/Leetcode-Backend-Project.git
```

2. Go inside the downloaded folder and install node modules

```
cd LeetCode-Problem-Service && npm install
```

3. Create a new .env file in the root directory and set the following env variables

```
PORT=3000
```

4. Start the backend server

```
npm run dev
```

# How routing working in the Project

- /api/v1/problems/ping
  - because the route starts with /api
    - apiRouter --> v1Router --> problemRouter --> problemController
