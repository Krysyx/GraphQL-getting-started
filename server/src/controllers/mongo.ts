import { graphqlHTTP } from "express-graphql";
import {
  getAuthorsSchema,
  createAuthorSchema,
  updateAuthorSchema,
} from "../schema/graphQL";

import { querySchema, mutationSchema } from "../schema/graphQL/AuthorSchema";

//TODO: implement stacked queries and mutation instead of spreading them in multiple separated files
const getAuthors = graphqlHTTP({ schema: getAuthorsSchema, graphiql: true });
const create = graphqlHTTP({ schema: createAuthorSchema, graphiql: true });
const update = graphqlHTTP({ schema: updateAuthorSchema, graphiql: true });

export { getAuthors, create, update };
