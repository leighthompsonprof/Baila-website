exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, firstName } = JSON.parse(event.body);

    if (!process.env.MAILERLITE_API_KEY) {
      throw new Error('MailerLite API key is not configured');
    }

    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
      },
      body: JSON.stringify({
        email,
        name: firstName,
        resubscribe: true,
        autoresponders: true,
        type: 'active'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Subscription error:', error.message);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Failed to subscribe' })
    };
  }
}; 