import { graphqlHTTP } from "express-graphql";
import { authorSchema as schema } from "../schema/graphQL";

export default graphqlHTTP({ schema, graphiql: true });
