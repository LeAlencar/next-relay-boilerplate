This is a [Next.js](https://nextjs.org/) Template using [Relay Modern](https://relay.dev). 
---

The template is using the step-by-step guide from relay docs just so you can undestand how it's done. You'll need to add a github token in order to work.

## Getting Started

---
First, get your github token and add it to the .env file following the .env.example convection:
https://relay.dev/docs/getting-started/step-by-step-guide/#21-github-graphql-authentication


After that, install the dependencies:
```bash
npm install
#or
yarn install
```
then, generate relay files:
```bash
# create a __generated__ folder in the repo.
npm run relay
#or
yarn relay
```

After that, run the project:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


