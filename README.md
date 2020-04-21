## Authentication with AWS Cognito

_Description:_ Example Authentication app with AWS Cognito. Target of practice is apply new features of react latest version and typescript. Build base structure for react project use typescript.

### Main features

- Sign up
- Sign in
- Forgot password
- Reset password
- Home/Books pages(Requite signed in)

### Requite configs

    All configs relating to AWS will be in src/configs folder

- AWS_REGION
- AWS_USER_POOL_ID
- AWS_USER_POOL_WEB_CLIENT

### Structure

```
.
├── App.css
├── App.tsx
├── actions
│   ├── auth.ts
│   ├── book.ts
│   ├── index.ts
│   └── types.ts
├── aws-exports
│   └── index.ts
├── components
│   ├── Form
│   │   ├── Form.styles.ts
│   │   └── Form.tsx
│   └── RedirectLink
│       ├── index.styles.ts
│       └── index.tsx
├── configs
│   ├── dev.ts
│   ├── index.ts
│   ├── production.ts
│   └── staging.ts
├── constants
│   └── index.ts
├── contexts
│   ├── AuthContext.ts
│   ├── BooksContext.ts
│   └── index.ts
├── index.css
├── index.tsx
├── models
│   ├── book.model.ts
│   └── index.ts
├── pages
│   ├── Books
│   │   └── index.tsx
│   ├── ForgotPassword
│   │   ├── index.styles.ts
│   │   └── index.tsx
│   ├── Home
│   │   └── index.tsx
│   ├── ResetPassword
│   │   ├── index.styles.ts
│   │   └── index.tsx
│   ├── SignIn
│   │   ├── index.styles.ts
│   │   └── index.tsx
│   ├── SignUp
│   │   ├── index.styles.ts
│   │   └── index.tsx
│   └── index.tsx
├── react-app-env.d.ts
├── reducers
│   ├── AuthReducers.ts
│   ├── BooksReducers.ts
│   └── index.ts
├── routes
│   ├── PrivateRoute.tsx
│   └── index.tsx
├── serviceWorker.ts
└── setupTests.ts
```

### Install packages and run app in local

- Install packages: `yarn`

- Run app: `yarn start`

### Some added packages

- [aws-amplify](https://github.com/aws-amplify/amplify-js)
- [material-ui/core](https://github.com/mui-org/material-ui)

### Reference

- Amazon Cognito: https://aws.amazon.com/cognito/
- Amplify Framework: https://aws-amplify.github.io
- Material UI: https://material-ui.com

---

My special thanks go to _An Nguyen_ provided account to working with Cognito
