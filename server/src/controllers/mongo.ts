import { graphqlHTTP } from "express-graphql";
import {
  getAuthorsSchema,
  createAuthorSchema,
  updateAuthorSchema,
} from "../schema/graphQL";

const getAuthors = graphqlHTTP({ schema: getAuthorsSchema, graphiql: true });
const create = graphqlHTTP({ schema: createAuthorSchema, graphiql: true });
const update = graphqlHTTP({ schema: updateAuthorSchema, graphiql: true });

export { getAuthors, create, update };
