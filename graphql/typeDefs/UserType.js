export default `
  type User {
    id: ID
    name: String
    age: Int
    email: String
    friends: [User]
  }

  type Query {
    users: [User]
  }

  input CreateUserInput {
    id: Int
    name: String
    age: Int
    email: String
    friends: [Int]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: Int!, input: CreateUserInput!): User
    deleteUser(id: Int!): User
  }
`;