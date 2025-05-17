export async function POST(request) {
  try {
    const { email, firstName } = await request.json();

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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Subscription error:', error.message);
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 