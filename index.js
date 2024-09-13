import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games; // if we request only title appollo will handle that
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(parent, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => args.id !== g.id);
      return db.games;
    },
    addGame(_, args) {
      let newGame = { ...args.game, id: db.games.length + 1 };
      db.games.push(newGame);
      return newGame;
    },
    updateGame(_, args) {
      let updatedGame;

      db.games.forEach((g, i) => {
        if (g.id === args.id) {
          updatedGame = { ...g, ...args.edits };
          db.games[i] = updatedGame;
        }
      });

      return updatedGame;
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs, //definations of different type of data
  resolvers, //resolver handlese the query based on schema and types
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log("🚀  Server ready at:", url);
