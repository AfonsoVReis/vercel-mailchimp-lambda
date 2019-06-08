const { send, json } = require('micro')
const cors = require('micro-cors')()
const Mailchimp = require('mailchimp-api-v3')

const API_KEY = process.env.API_KEY
const LIST_ID = process.env.LIST_ID

async function addToList(emailAddress) {
  const mailchimp = new Mailchimp(API_KEY);
  return mailchimp.request({
    method : 'post',
    path : '/lists/' + LIST_ID + '/members',
    body : {
      email_address : emailAddress,
      status : 'subscribed',
    }
  })
}

const call = async (req, res) => {
  const body = await json(req)
  try {
    const result =  await addToList(body.email)
    send(res, 200)
  } catch (error) {
    send(res, 400)
  }
}

module.exports = cors(call);