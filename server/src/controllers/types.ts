import { graphqlHTTP } from "express-graphql";
import { schema } from "../schema/graphQL/ConstructTypeSchema";

export const types = graphqlHTTP({ schema });
