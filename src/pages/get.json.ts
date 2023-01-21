// Outputs: /builtwith.json
// export async function get({params, request}) {
//   return {
//     body: JSON.stringify({
//       name: 'Astro',
//       url: 'https://astro.build/',
//     }),
//   };
// }

const apiKey = "102c20b487b97ebf825b553f7e93f2a5";
const endpoint =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  apiKey +
  "&language=en-US&page="

export async function get(page: number = 1) {
  return await fetch(endpoint + page)
    .then((r) => {
      return { body: r.json() }
    })
    .catch(function (error) {
      console.log(error);
    });
}