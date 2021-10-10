const axios = require('axios');

console.log('Snipcart webhook received!');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const netlifyBuildHook =
    'https://api.netlify.com/build_hooks/5ef219aec0c4ea9331e5fe67?trigger_branch=master&trigger_title=Triggered+by+Snipcart+new+order+webhook';

  if (body.eventName && body.eventName === 'order.completed') {
    const response = await axios({
      method: 'post',
      url: netlifyBuildHook
    }).catch((error) => console.error(error));
  }

  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };
};
