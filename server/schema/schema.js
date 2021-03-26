const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

var books = [
  {id: '1', name: 'Name of the Wind', genre: 'Fantasy'},
  {id: '2', name: 'The Final Empire', genre: 'Fantasy'},
  {id: '3', name: 'The Long Earth', genre: 'Sci-Fi'},
  {id: '4', name: 'Ice and Fire', genre: 'Adventure'},
  {id: '5', name: 'Blood and Sand', genre: 'Thriller'},
]

// Book Object type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
})

// Root Query
const RootQuery =  new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parent, args){
        // code to get data from db / other sources
        return _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})