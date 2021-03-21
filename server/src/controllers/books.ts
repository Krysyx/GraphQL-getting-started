import { graphqlHTTP } from "express-graphql";
import { bookSchema as schema } from "../schema/graphQL";

export default graphqlHTTP({ schema, graphiql: true });
