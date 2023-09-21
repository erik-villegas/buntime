import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import home from './home'

const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .get("/", home)
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
