**⚠️ Warning:** This project is currently in **active development** and is **not yet functional**. The codebase is unstable, features are incomplete, and breaking changes may occur without notice.  

# YTmark
A YouTube video bookmark manager – Technical demo for Sébastien &amp; Gary

## Setup

### .env

Create an `.env` file 

### Clerk

1. Create an account on [clerk.com](https://clerk.com/) 
2. Then don't forget to add your Clerk environment variables in the `.env` file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_***
CLERK_SECRET_KEY=sk_****
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Neon

1. Create an account on [neon.tech](https://neon.tech/)
2. Then don't forget to add your Neon environment variables in the `.env` file

```
DATABASE_URL=postgresql://*****
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Neon

If you want to update the schema, don't forget to push:

### Applying changes to the database

```
npx drizzle-kit push
```

## Drizzle Studio

Run this command:

```
npx drizzle-kit studio
```

Then open: https://local.drizzle.studio