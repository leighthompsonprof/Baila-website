export async function POST(request) {
  try {
    const { email, firstName } = await request.json();

    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDdiOGY1MmI1YmRlYWQ2MzU4ODlkODFlYTgzZGQwZmRjYjdkYWYyMjZjZTg5OWE1N2U1ODk1M2Q1ODk0MGUwZDE5M2E3YTg5NTgxZjRmMzgiLCJpYXQiOjE3NDcxODU3NDAuMjk0NTg0LCJuYmYiOjE3NDcxODU3NDAuMjk0NTg2LCJleHAiOjQ5MDI4NTkzNDAuMjkxMDEyLCJzdWIiOiIxNTMzMjg0Iiwic2NvcGVzIjpbXX0.UxIXmO0c8YK5n_YbtP5TxN24TAvLN5MM6Rf2bydiTL3ZeAT0CjanaNxgg7xBcv16dktVpycWnmQzQwkc14fW7dJ7BhZuKwAqZvkrgfgGQ3cEvNh0SpS8sAw_fuJMdTuHabJ28ziZxhS0kffA01dj3ZUGmoa6hfeWLg5P9s9g-DUE7UdswP48pUgxAbg1H22o2NlChQH7OzZPeLzNxboY7hqtRg12RmHTuH8Ne0OR2Ar0hmwDWC7Ts3pKhj5IAlYAy1jDr_fvTnDce2Ja2rFfpaioQVrevOtOytzy4gjatmsY9Cy7NazeFWQJc3DzwpGjSvUNL1C8QKKOZqTkEHU6gY-o-BLO29GQeVa5yzyWram82YAdNyuerb5jwqiCww_D1X0NlUL3mWLhZnyqE_kwOERm194Cu8HdehUjSGU5IBmHHtfG4A3abDcm1SE7DCkcxhvRNr4Q9J6644Sx-uWMHbGekxsfQH0lkOdkONrxOsqumt6VtxeXYPqPsmjCrkFJaMeGwOmEmiNqAN7LXMNPwr6KWAlKuM3Vnrb9s7breASqxz2SAwGP1oiXsJZ3c1Yom32Ph04wEWuMaB8-IdqtSJ5mAE5BZYgW3qxBKAO3mXoyQkJv6nLMSmGhzmftzmmsoz1cV2iyz2obktHn4L6fzJb6x3p0M2xZ6j7FBwOB24M'
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
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 