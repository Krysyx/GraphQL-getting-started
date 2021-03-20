import { graphqlHTTP } from "express-graphql";
import { queryAuthorSchema, mutationAuthorSchema } from "../schema/graphQL";

const authorQuery = graphqlHTTP({ schema: queryAuthorSchema, graphiql: true });
const authorMutation = graphqlHTTP({ schema: mutationAuthorSchema, graphiql: true });

export { authorQuery, authorMutation };
