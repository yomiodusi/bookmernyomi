// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        SavedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input InputBook {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    
    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(newBook: InputBook!): User
        removeBook(bookId: ID!): Thought
    }
`;

// export the typeDefs
module.exports = typeDefs;