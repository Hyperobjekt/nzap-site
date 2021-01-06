/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults({
  static: "src/assets/dev-server"
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(function (req, res, next) {
  setTimeout(next, 2000); // Network latency
});

server.use((req, res, next) => {
  if (req.method === "POST") req.body.createdAt = Date.now();
  next();
});

server.post("/scenarios/", function (req, res, next) {
  // const error = validateDemo(req.body);
  // if (error) return res.status(400).send(error);
  // req.body.slug = createSlug(req.body.title); 
  next();
});

server.use(router);

const port = 3001;
server.listen(port, () => console.log(`JSON Server is running on port ${port}`));

// function createSlug(value) {
//   return value
//     .replace(/[^a-z0-9_]+/gi, "-")
//     .replace(/^-|-$/g, "")
//     .toLowerCase();
// }

// function validateDemo(demo) {
//   if (!demo.title) return "Title is required.";
//   if (!demo.authorId) return "Author is required.";
//   if (!demo.category) return "Category is required.";
//   return "";
// }
