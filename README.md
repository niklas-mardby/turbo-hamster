# 🐹 turbo-hamster 🐹

An experiment repo for Turbo and state management with Redux.

# Stack

# Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

# Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

# Setup

Clone the repo and install dependencies

```
git clone https://github.com/niklas-mardby/turbo-hamster.git
cd turbo-hamster
yarn
```

## Build

To build all apps and packages, run the following command:

```
cd turbo-hamster
yarn build
```

## Develop

To develop all apps and packages, run the following command:

```
cd turbo-hamster
yarn dev
```

# History

- Created the repo with readme on Github
- Cloned the repo locally
- yarn global add turbo
- pnpm dlx create-turbo@latest
- yarn
- yarn dev
- open localhost and it works!
