## vite-mui-ts boilerplate

TypeScript + React + Redux + MUI + RRD + ESLint + Prettier

![vite-mui-ts](https://i.ibb.co/j8JSrhV/Screenshot-2023-07-06-121352.png)

### Getting Started

#### Clone the repo

```
git clone git@github.com:cjbelo/vite-rtk-mui-ts.git my-app
```

```
cd my-app
```

#### Install Dependencies

```
yarn
```

#### Run

```
yarn dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.ts

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```

> tsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```

### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| yarn dev      | Runs the application.              |
| yarn build    | Create builds for the application. |
| yarn preview  | Runs the Vite preview              |
| yarn lint     | Display eslint errors              |
| yarn lint:fix | Fix the eslint errors              |
| yarn format   | Runs prettier for all files        |
| yarn test     | Run tests                          |
