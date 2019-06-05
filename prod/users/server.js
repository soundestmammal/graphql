// All logic for the express server
// Convention is GraphQL "Uppercase G Q L"
// graphiql is a dev tool
// What is a schema in GraphQL?

const express = require('express');
const expressGraphQL = require('express-graphql'); // glue between GraphQL and express
const schema = require('./schema/schema');

const app = express();
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true 
}));
app.listen(4000, () => {
    console.log("Listening on port 4000");
});

