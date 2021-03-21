import { graphqlHTTP } from "express-graphql";
import { bookSchema } from "../schema/graphQL";

export default graphqlHTTP({ schema: bookSchema, graphiql: true });

// const bookQuery = graphqlHTTP({ schema: queryBookSchema, graphiql: true });
// const bookMutation = graphqlHTTP({ schema: mutationBookSchema, graphiql: true });

// export { bookQuery, bookMutation };
