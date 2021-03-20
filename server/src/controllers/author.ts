import { graphqlHTTP } from "express-graphql";
import { querySchema, mutationSchema } from "../schema/graphQL";

const query = graphqlHTTP({ schema: querySchema, graphiql: true });
const mutation = graphqlHTTP({ schema: mutationSchema, graphiql: true });

export { query, mutation };
