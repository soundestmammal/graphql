// Active Recall

// Key Point: All of the knowledge for telling GraphQL what data looks like
// How each object is related to each other.
// What is a root query? An entrypoint into our application
// What does the resolve do in GQL? Used to return data from our database


/* User has a:
    (string) firstName
    (pointer) company_id ->
    (pointer) position_id ->
*/

const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

// What a User Object should look like
/* Two required properties:
    1. Name
    2. Fields (object)
*/
const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {

            }
        }
    }
});