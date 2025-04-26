# YTmark
A YouTube video bookmark manager – Technical demo for Sébastien &amp; Gary

## .env

Create an `.env` file 

## Clerk

Don't forget to add your Clerk environment variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_***
CLERK_SECRET_KEY=sk_****
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## Neon

Don't forget to add your Neon environment variables:

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

```
npx drizzle-kit studio
```

Then open: https://local.drizzle.studio