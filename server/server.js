require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const { authMiddleware } = require("./utils/auth.js");

const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const db = require("./config/mongoose.config");
const app = express();

app.use(cookieParser());


// context: passed to every route in graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
}

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "client", "build", "index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// require("dotenv").config();

// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const { join } = require("path");

// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/mongoose.config");

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(join(__dirname, "..", "client", "build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "client", "build", "index.html"));
// });

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// startApolloServer(typeDefs, resolvers);
