const objType = new GrapQLObjectType({
  name: 'meta',
  fileds: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

let ListType = new GraphQLObjectType({
  name: 'List',
  fileds: {
    _id: {
      type: GraphQLID
    },
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    },
    data: {
      type: GraphQLString
    },
    checked: {
      type: GraphQLBoolean
    },
    meta: {
      type: objType
    }
  }
})

const listFields = {
  type: new GraphQLList(ListType),
  args: {},
  resolve (root, params, options) {
    return List.find({}).exec() // 数据库查询
  }
}