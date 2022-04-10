import Fastify from "fastify";
import mercurius from "mercurius";

const app = Fastify();

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const resolvers = {
  Query: {
    add: async (_: any, { x, y }: { x: any; y: any }) => x + y,
  },
};

app.register(mercurius, {
  schema,
  resolvers,
});

app.get("/", async function (req: any, reply: any) {
  const query = "{ add(x: 2, y: 2) }";
  return reply.graphql(query);
});

app.listen(4000);
