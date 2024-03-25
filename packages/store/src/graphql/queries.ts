/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"

type GeneratedQuery<InputType, OutputType> = string & {
	__generatedQueryInput: InputType
	__generatedQueryOutput: OutputType
}

export const getGameRound = /* GraphQL */ `query GetGameRound($id: ID!) {
  getGameRound(id: $id) {
    id
    index
    question
    correctAnswer
    isComplete
    submittedAnswers {
      items {
        id
        answer
        isCorrect
        userID
        gameRoundID
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
    gameSessionID
    gameSession {
      id
      lobbyID
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      rounds {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetGameRoundQueryVariables,
	APITypes.GetGameRoundQuery
>
export const listGameRounds = /* GraphQL */ `query ListGameRounds(
  $filter: ModelGameRoundFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      index
      question
      correctAnswer
      isComplete
      submittedAnswers {
        nextToken
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListGameRoundsQueryVariables,
	APITypes.ListGameRoundsQuery
>
export const getSubmittedAnswer =
	/* GraphQL */ `query GetSubmittedAnswer($id: ID!) {
  getSubmittedAnswer(id: $id) {
    id
    answer
    isCorrect
    userID
    user {
      id
      email
      name
      selfie
      status
      type
      createdLobbies {
        nextToken
        __typename
      }
      joinedLobbies {
        nextToken
        __typename
      }
      submittedAnswers {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    gameRoundID
    gameRound {
      id
      index
      question
      correctAnswer
      isComplete
      submittedAnswers {
        nextToken
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetSubmittedAnswerQueryVariables,
		APITypes.GetSubmittedAnswerQuery
	>
export const listSubmittedAnswers = /* GraphQL */ `query ListSubmittedAnswers(
  $filter: ModelSubmittedAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubmittedAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      answer
      isCorrect
      userID
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameRoundID
      gameRound {
        id
        index
        question
        correctAnswer
        isComplete
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListSubmittedAnswersQueryVariables,
	APITypes.ListSubmittedAnswersQuery
>
export const getGameSession = /* GraphQL */ `query GetGameSession($id: ID!) {
  getGameSession(id: $id) {
    id
    lobbyID
    lobby {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    rounds {
      items {
        id
        index
        question
        correctAnswer
        isComplete
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetGameSessionQueryVariables,
	APITypes.GetGameSessionQuery
>
export const listGameSessions = /* GraphQL */ `query ListGameSessions(
  $filter: ModelGameSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lobbyID
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      rounds {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListGameSessionsQueryVariables,
	APITypes.ListGameSessionsQuery
>
export const getLobby = /* GraphQL */ `query GetLobby($id: ID!) {
  getLobby(id: $id) {
    id
    code
    isActive
    participants {
      items {
        id
        lobbyId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    creatorID
    creator {
      id
      email
      name
      selfie
      status
      type
      createdLobbies {
        nextToken
        __typename
      }
      joinedLobbies {
        nextToken
        __typename
      }
      submittedAnswers {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    gameSessionID
    gameSession {
      id
      lobbyID
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      rounds {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLobbyQueryVariables, APITypes.GetLobbyQuery>
export const listLobbies = /* GraphQL */ `query ListLobbies(
  $filter: ModelLobbyFilterInput
  $limit: Int
  $nextToken: String
) {
  listLobbies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListLobbiesQueryVariables,
	APITypes.ListLobbiesQuery
>
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    name
    selfie
    status
    type
    createdLobbies {
      items {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
    joinedLobbies {
      items {
        id
        lobbyId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    submittedAnswers {
      items {
        id
        answer
        isCorrect
        userID
        gameRoundID
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    createdAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      selfie
      status
      type
      createdLobbies {
        nextToken
        __typename
      }
      joinedLobbies {
        nextToken
        __typename
      }
      submittedAnswers {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>
export const getLobbiesJoined =
	/* GraphQL */ `query GetLobbiesJoined($id: ID!) {
  getLobbiesJoined(id: $id) {
    id
    lobbyId
    userId
    lobby {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    user {
      id
      email
      name
      selfie
      status
      type
      createdLobbies {
        nextToken
        __typename
      }
      joinedLobbies {
        nextToken
        __typename
      }
      submittedAnswers {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetLobbiesJoinedQueryVariables,
		APITypes.GetLobbiesJoinedQuery
	>
export const listLobbiesJoineds = /* GraphQL */ `query ListLobbiesJoineds(
  $filter: ModelLobbiesJoinedFilterInput
  $limit: Int
  $nextToken: String
) {
  listLobbiesJoineds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lobbyId
      userId
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListLobbiesJoinedsQueryVariables,
	APITypes.ListLobbiesJoinedsQuery
>
export const getGameRoundByGameSessionID =
	/* GraphQL */ `query GetGameRoundByGameSessionID(
  $gameSessionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGameRoundFilterInput
  $limit: Int
  $nextToken: String
) {
  getGameRoundByGameSessionID(
    gameSessionID: $gameSessionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      index
      question
      correctAnswer
      isComplete
      submittedAnswers {
        nextToken
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetGameRoundByGameSessionIDQueryVariables,
		APITypes.GetGameRoundByGameSessionIDQuery
	>
export const getSubmittedAnswerByUserID =
	/* GraphQL */ `query GetSubmittedAnswerByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubmittedAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  getSubmittedAnswerByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      answer
      isCorrect
      userID
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameRoundID
      gameRound {
        id
        index
        question
        correctAnswer
        isComplete
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetSubmittedAnswerByUserIDQueryVariables,
		APITypes.GetSubmittedAnswerByUserIDQuery
	>
export const getSubmittedAnswerByGameRoundID =
	/* GraphQL */ `query GetSubmittedAnswerByGameRoundID(
  $gameRoundID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubmittedAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  getSubmittedAnswerByGameRoundID(
    gameRoundID: $gameRoundID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      answer
      isCorrect
      userID
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameRoundID
      gameRound {
        id
        index
        question
        correctAnswer
        isComplete
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetSubmittedAnswerByGameRoundIDQueryVariables,
		APITypes.GetSubmittedAnswerByGameRoundIDQuery
	>
export const getGameSessionByLobbyID =
	/* GraphQL */ `query GetGameSessionByLobbyID(
  $lobbyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGameSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  getGameSessionByLobbyID(
    lobbyID: $lobbyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lobbyID
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      rounds {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetGameSessionByLobbyIDQueryVariables,
		APITypes.GetGameSessionByLobbyIDQuery
	>
export const getLobbyByCode = /* GraphQL */ `query GetLobbyByCode(
  $code: String!
  $sortDirection: ModelSortDirection
  $filter: ModelLobbyFilterInput
  $limit: Int
  $nextToken: String
) {
  getLobbyByCode(
    code: $code
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetLobbyByCodeQueryVariables,
	APITypes.GetLobbyByCodeQuery
>
export const getLobbyByCreatorID = /* GraphQL */ `query GetLobbyByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLobbyFilterInput
  $limit: Int
  $nextToken: String
) {
  getLobbyByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetLobbyByCreatorIDQueryVariables,
	APITypes.GetLobbyByCreatorIDQuery
>
export const getLobbyByGameSessionID =
	/* GraphQL */ `query GetLobbyByGameSessionID(
  $gameSessionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLobbyFilterInput
  $limit: Int
  $nextToken: String
) {
  getLobbyByGameSessionID(
    gameSessionID: $gameSessionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      isActive
      participants {
        nextToken
        __typename
      }
      creatorID
      creator {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      gameSessionID
      gameSession {
        id
        lobbyID
        updatedAt
        createdAt
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.GetLobbyByGameSessionIDQueryVariables,
		APITypes.GetLobbyByGameSessionIDQuery
	>
export const getUserByEmail = /* GraphQL */ `query GetUserByEmail(
  $email: AWSEmail!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      name
      selfie
      status
      type
      createdLobbies {
        nextToken
        __typename
      }
      joinedLobbies {
        nextToken
        __typename
      }
      submittedAnswers {
        nextToken
        __typename
      }
      updatedAt
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetUserByEmailQueryVariables,
	APITypes.GetUserByEmailQuery
>
export const lobbiesJoinedsByLobbyId =
	/* GraphQL */ `query LobbiesJoinedsByLobbyId(
  $lobbyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLobbiesJoinedFilterInput
  $limit: Int
  $nextToken: String
) {
  lobbiesJoinedsByLobbyId(
    lobbyId: $lobbyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lobbyId
      userId
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.LobbiesJoinedsByLobbyIdQueryVariables,
		APITypes.LobbiesJoinedsByLobbyIdQuery
	>
export const lobbiesJoinedsByUserId =
	/* GraphQL */ `query LobbiesJoinedsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLobbiesJoinedFilterInput
  $limit: Int
  $nextToken: String
) {
  lobbiesJoinedsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      lobbyId
      userId
      lobby {
        id
        code
        isActive
        creatorID
        gameSessionID
        updatedAt
        createdAt
        __typename
      }
      user {
        id
        email
        name
        selfie
        status
        type
        updatedAt
        createdAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
		APITypes.LobbiesJoinedsByUserIdQueryVariables,
		APITypes.LobbiesJoinedsByUserIdQuery
	>
