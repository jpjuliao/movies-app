const apiKey = "102c20b487b97ebf825b553f7e93f2a5";
const endpoint =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  apiKey +
  "&language=en-US&page="

export async function get(page: number = 1) {
  const response = await fetch(endpoint + page).then(r => r.json());
  // return {
  //   body: JSON.stringify(response)
  // }

  if (!response) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}