# MONGO + EXPRESS + React + NESTJS

## Description
Our project combines React for building the front-end, NestJS for the back-end, and Material-UI (MUI) for consistent design. With React, we've created a user-friendly interface where users can be easily created and managed. The form for adding users is powered by React, ensuring smooth interactions and real-time updates. Behind the scenes, NestJS manages the server-side operations such as storing and fetching user data, offering a reliable and scalable solution. Material-UI adds a polished look and feel to the interface, making it visually appealing and easy to navigate for users.

## Before Installation

### Version

```
$ node >= 16
$ typeScript >= v4
```

### Environment
```bash
# Create in frontend .env.local file with this parameters
VITE_APP_BASE_URL
VITE_APP_BASE_PREFIX

# Create in backend .env.local file with this parameters
BASE_PREFIX
PORT
MONGO_HOST
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# Run all parts
$ yarn run dev

# Run only frontend
$ yarn run dev:fe

# Run only backend
$ yarn run dev:be
```
