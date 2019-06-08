# zeit-mailchimp

A lambda function to handle mailchimp subscribes to be deployed in [Zeit.io](https://zeit.co/)

## Development

Install & run the project with:

```sh
yarn install && yarn run micro
```

### Deploy to zeit

Download and install [zeit cli](https://zeit.co/download) and simply run:

```sh
$ now
```

## Env variables

After configuring your audience in Mailchimp you should set up the following keys in your Zeit project dashboard:

```javascript
API_KEY
LIST_ID
```
You can also define your env variables in `now.jason` as such:

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

