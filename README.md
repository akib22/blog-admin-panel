## Step 1: Clone the repo

```
git clone git@github.com:akib22/blog-admin-panel.git

cd blog-admin-panel
```

## Step 2: Create .env.local file

```
touch .env.local
```

From `.env.example` file copy all content and update with your own access token. You can get your access token from [here](https://gorest.co.in/access-token).

## Step 3: Start the server

```
yarn

REACT_APP_TOKEN={token} yarn start
```
