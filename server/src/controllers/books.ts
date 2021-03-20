import { graphqlHTTP } from "express-graphql";
import { queryBookSchema, mutationBookSchema } from "../schema/graphQL";

const bookQuery = graphqlHTTP({ schema: queryBookSchema, graphiql: true });
const bookMutation = graphqlHTTP({ schema: mutationBookSchema, graphiql: true });

export { bookQuery, bookMutation };
