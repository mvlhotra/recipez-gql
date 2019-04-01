module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateCreation {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateIngredient_Type {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateSaved_Recipe {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  user_id: Int!
  text: String!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  user_id: Int!
  text: String!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  user_id_ASC
  user_id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  user_id: Int!
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  user_id: Int
  text: String
}

input CommentUpdateManyMutationInput {
  user_id: Int
  text: String
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user_id: Int
  user_id_not: Int
  user_id_in: [Int!]
  user_id_not_in: [Int!]
  user_id_lt: Int
  user_id_lte: Int
  user_id_gt: Int
  user_id_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

type Creation {
  id: ID!
  user_id: Int!
  name: String!
  description: String!
}

type CreationConnection {
  pageInfo: PageInfo!
  edges: [CreationEdge]!
  aggregate: AggregateCreation!
}

input CreationCreateInput {
  user_id: Int!
  name: String!
  description: String!
}

type CreationEdge {
  node: Creation!
  cursor: String!
}

enum CreationOrderByInput {
  id_ASC
  id_DESC
  user_id_ASC
  user_id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreationPreviousValues {
  id: ID!
  user_id: Int!
  name: String!
  description: String!
}

type CreationSubscriptionPayload {
  mutation: MutationType!
  node: Creation
  updatedFields: [String!]
  previousValues: CreationPreviousValues
}

input CreationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CreationWhereInput
  AND: [CreationSubscriptionWhereInput!]
  OR: [CreationSubscriptionWhereInput!]
  NOT: [CreationSubscriptionWhereInput!]
}

input CreationUpdateInput {
  user_id: Int
  name: String
  description: String
}

input CreationUpdateManyMutationInput {
  user_id: Int
  name: String
  description: String
}

input CreationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user_id: Int
  user_id_not: Int
  user_id_in: [Int!]
  user_id_not_in: [Int!]
  user_id_lt: Int
  user_id_lte: Int
  user_id_gt: Int
  user_id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [CreationWhereInput!]
  OR: [CreationWhereInput!]
  NOT: [CreationWhereInput!]
}

input CreationWhereUniqueInput {
  id: ID
}

type Ingredient {
  id: ID!
  ingredient_type_id: Int!
  name: String!
}

type Ingredient_Type {
  id: ID!
  name: String!
}

type Ingredient_TypeConnection {
  pageInfo: PageInfo!
  edges: [Ingredient_TypeEdge]!
  aggregate: AggregateIngredient_Type!
}

input Ingredient_TypeCreateInput {
  name: String!
}

type Ingredient_TypeEdge {
  node: Ingredient_Type!
  cursor: String!
}

enum Ingredient_TypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Ingredient_TypePreviousValues {
  id: ID!
  name: String!
}

type Ingredient_TypeSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient_Type
  updatedFields: [String!]
  previousValues: Ingredient_TypePreviousValues
}

input Ingredient_TypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Ingredient_TypeWhereInput
  AND: [Ingredient_TypeSubscriptionWhereInput!]
  OR: [Ingredient_TypeSubscriptionWhereInput!]
  NOT: [Ingredient_TypeSubscriptionWhereInput!]
}

input Ingredient_TypeUpdateInput {
  name: String
}

input Ingredient_TypeUpdateManyMutationInput {
  name: String
}

input Ingredient_TypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [Ingredient_TypeWhereInput!]
  OR: [Ingredient_TypeWhereInput!]
  NOT: [Ingredient_TypeWhereInput!]
}

input Ingredient_TypeWhereUniqueInput {
  id: ID
}

type IngredientConnection {
  pageInfo: PageInfo!
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  ingredient_type_id: Int!
  name: String!
}

type IngredientEdge {
  node: Ingredient!
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  ingredient_type_id_ASC
  ingredient_type_id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  ingredient_type_id: Int!
  name: String!
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
  AND: [IngredientSubscriptionWhereInput!]
  OR: [IngredientSubscriptionWhereInput!]
  NOT: [IngredientSubscriptionWhereInput!]
}

input IngredientUpdateInput {
  ingredient_type_id: Int
  name: String
}

input IngredientUpdateManyMutationInput {
  ingredient_type_id: Int
  name: String
}

input IngredientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ingredient_type_id: Int
  ingredient_type_id_not: Int
  ingredient_type_id_in: [Int!]
  ingredient_type_id_not_in: [Int!]
  ingredient_type_id_lt: Int
  ingredient_type_id_lte: Int
  ingredient_type_id_gt: Int
  ingredient_type_id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [IngredientWhereInput!]
  OR: [IngredientWhereInput!]
  NOT: [IngredientWhereInput!]
}

input IngredientWhereUniqueInput {
  id: ID
}

type Link {
  id: ID!
  description: String!
  url: String!
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  description: String!
  url: String!
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  id: ID!
  description: String!
  url: String!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  description: String
  url: String
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createCreation(data: CreationCreateInput!): Creation!
  updateCreation(data: CreationUpdateInput!, where: CreationWhereUniqueInput!): Creation
  updateManyCreations(data: CreationUpdateManyMutationInput!, where: CreationWhereInput): BatchPayload!
  upsertCreation(where: CreationWhereUniqueInput!, create: CreationCreateInput!, update: CreationUpdateInput!): Creation!
  deleteCreation(where: CreationWhereUniqueInput!): Creation
  deleteManyCreations(where: CreationWhereInput): BatchPayload!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateManyIngredients(data: IngredientUpdateManyMutationInput!, where: IngredientWhereInput): BatchPayload!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  createIngredient_Type(data: Ingredient_TypeCreateInput!): Ingredient_Type!
  updateIngredient_Type(data: Ingredient_TypeUpdateInput!, where: Ingredient_TypeWhereUniqueInput!): Ingredient_Type
  updateManyIngredient_Types(data: Ingredient_TypeUpdateManyMutationInput!, where: Ingredient_TypeWhereInput): BatchPayload!
  upsertIngredient_Type(where: Ingredient_TypeWhereUniqueInput!, create: Ingredient_TypeCreateInput!, update: Ingredient_TypeUpdateInput!): Ingredient_Type!
  deleteIngredient_Type(where: Ingredient_TypeWhereUniqueInput!): Ingredient_Type
  deleteManyIngredient_Types(where: Ingredient_TypeWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createSaved_Recipe(data: Saved_RecipeCreateInput!): Saved_Recipe!
  updateSaved_Recipe(data: Saved_RecipeUpdateInput!, where: Saved_RecipeWhereUniqueInput!): Saved_Recipe
  updateManySaved_Recipes(data: Saved_RecipeUpdateManyMutationInput!, where: Saved_RecipeWhereInput): BatchPayload!
  upsertSaved_Recipe(where: Saved_RecipeWhereUniqueInput!, create: Saved_RecipeCreateInput!, update: Saved_RecipeUpdateInput!): Saved_Recipe!
  deleteSaved_Recipe(where: Saved_RecipeWhereUniqueInput!): Saved_Recipe
  deleteManySaved_Recipes(where: Saved_RecipeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  creation(where: CreationWhereUniqueInput!): Creation
  creations(where: CreationWhereInput, orderBy: CreationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Creation]!
  creationsConnection(where: CreationWhereInput, orderBy: CreationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreationConnection!
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  ingredient_Type(where: Ingredient_TypeWhereUniqueInput!): Ingredient_Type
  ingredient_Types(where: Ingredient_TypeWhereInput, orderBy: Ingredient_TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient_Type]!
  ingredient_TypesConnection(where: Ingredient_TypeWhereInput, orderBy: Ingredient_TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Ingredient_TypeConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  saved_Recipe(where: Saved_RecipeWhereUniqueInput!): Saved_Recipe
  saved_Recipes(where: Saved_RecipeWhereInput, orderBy: Saved_RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Saved_Recipe]!
  saved_RecipesConnection(where: Saved_RecipeWhereInput, orderBy: Saved_RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Saved_RecipeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Saved_Recipe {
  id: ID!
  user_id: Int!
  recipe_link: String!
}

type Saved_RecipeConnection {
  pageInfo: PageInfo!
  edges: [Saved_RecipeEdge]!
  aggregate: AggregateSaved_Recipe!
}

input Saved_RecipeCreateInput {
  user_id: Int!
  recipe_link: String!
}

type Saved_RecipeEdge {
  node: Saved_Recipe!
  cursor: String!
}

enum Saved_RecipeOrderByInput {
  id_ASC
  id_DESC
  user_id_ASC
  user_id_DESC
  recipe_link_ASC
  recipe_link_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Saved_RecipePreviousValues {
  id: ID!
  user_id: Int!
  recipe_link: String!
}

type Saved_RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Saved_Recipe
  updatedFields: [String!]
  previousValues: Saved_RecipePreviousValues
}

input Saved_RecipeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Saved_RecipeWhereInput
  AND: [Saved_RecipeSubscriptionWhereInput!]
  OR: [Saved_RecipeSubscriptionWhereInput!]
  NOT: [Saved_RecipeSubscriptionWhereInput!]
}

input Saved_RecipeUpdateInput {
  user_id: Int
  recipe_link: String
}

input Saved_RecipeUpdateManyMutationInput {
  user_id: Int
  recipe_link: String
}

input Saved_RecipeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user_id: Int
  user_id_not: Int
  user_id_in: [Int!]
  user_id_not_in: [Int!]
  user_id_lt: Int
  user_id_lte: Int
  user_id_gt: Int
  user_id_gte: Int
  recipe_link: String
  recipe_link_not: String
  recipe_link_in: [String!]
  recipe_link_not_in: [String!]
  recipe_link_lt: String
  recipe_link_lte: String
  recipe_link_gt: String
  recipe_link_gte: String
  recipe_link_contains: String
  recipe_link_not_contains: String
  recipe_link_starts_with: String
  recipe_link_not_starts_with: String
  recipe_link_ends_with: String
  recipe_link_not_ends_with: String
  AND: [Saved_RecipeWhereInput!]
  OR: [Saved_RecipeWhereInput!]
  NOT: [Saved_RecipeWhereInput!]
}

input Saved_RecipeWhereUniqueInput {
  id: ID
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  creation(where: CreationSubscriptionWhereInput): CreationSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  ingredient_Type(where: Ingredient_TypeSubscriptionWhereInput): Ingredient_TypeSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  saved_Recipe(where: Saved_RecipeSubscriptionWhereInput): Saved_RecipeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  first_name: String!
  last_name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  first_name: String
  last_name: String
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  first_name: String
  last_name: String
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    