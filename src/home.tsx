export default async function home() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${
      Math.floor(Math.random() * 10) + 1
    }`
  );
  const json = await response.json();
  const name = json.name;

  return (
    <html lang="en">
      <head>
        <title>Hello World</title>
        <link href="/public/output.css" rel="stylesheet"></link>
      </head>
      <body>
        <p class="text-red-500 p-28">Hello, {name}!</p>
      </body>
    </html>
  );
}
