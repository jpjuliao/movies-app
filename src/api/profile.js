export async function getUser(params, request) {
  // const profile = await request.json();
  // await saveProfile(profile);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}