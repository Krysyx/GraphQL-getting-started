import { graphqlHTTP } from "express-graphql";
import schema from "../schema/graphQL/getAuthorsSchema";

const getAuthors = graphqlHTTP({ schema, graphiql: true });

export { getAuthors };
