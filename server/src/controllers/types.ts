import { graphqlHTTP } from "express-graphql";
import { schema } from "../schema/ConstructTypeSchema";

export const types = graphqlHTTP({ schema });
