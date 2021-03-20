import { graphqlHTTP } from "express-graphql";
import { queryBookSchema } from "../schema/graphQL";

const bookQuery = graphqlHTTP({ schema: queryBookSchema, graphiql: true });

export { bookQuery };
