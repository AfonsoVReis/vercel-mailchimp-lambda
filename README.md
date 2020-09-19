# vercel-mailchimp-lambda

A lambda function to handle mailchimp subscribes to be deployed in [Vercel](https://vercel.com/)

## Development

Install & run the project with:

```sh
yarn install && yarn run micro
```

### Deploy to vercel

Download and install [Vercel cli](https://vercel.com/download) and simply run:

```sh
$ vercel
```

## Env variables

After configuring your audience in Mailchimp you should set up the following keys in your Vercel project dashboard:

```javascript
API_KEY
LIST_ID
```
You can also define your env variables in `vercel.json` as such:

```javascript
{
...
"env": {
        "API_KEY": "....",
        "LIST_ID": "...."
    }
```

## Cross-Origin Resource Sharing (CORS)

This package supports CORS


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

