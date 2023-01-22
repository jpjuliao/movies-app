# Welcome to Movies App

An app to search for [Movies](https://developers.themoviedb.org/3). Created with [AstroJS](https://docs.astro.build) and [TailwindCSS](https://tailwindcss.com/).

Watch the [Demo](https://jpjuliao-movies-app.netlify.app/) hosted with CI/CD in [Netlify](https://netlify.com/)

![Site demo](./site-demo.gif)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Api Key

Create an API Key in [The Movie DB](https://developers.themoviedb.org/3/) and add it to the environment variable "SECRET_KEY".

```bash
cp .env-example .env
```
