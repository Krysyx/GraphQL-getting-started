import { graphqlHTTP } from "express-graphql";
import { getAuthorsSchema, createAuthorSchema } from "../schema/graphQL";

const getAuthors = graphqlHTTP({ schema: getAuthorsSchema, graphiql: true });
const create = graphqlHTTP({ schema: createAuthorSchema, graphiql: true });

export { getAuthors, create };
