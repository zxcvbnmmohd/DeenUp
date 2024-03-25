/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"

type GeneratedMutation<InputType, OutputType> = string & {
	__generatedMutationInput: InputType
	__generatedMutationOutput: OutputType
}

export const createGameRound = /* GraphQL */ `mutation CreateGameRound(
  $input: CreateGameRoundInput!
  $condition: ModelGameRoundConditionInput
) {
  createGameRound(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateGameRoundMutationVariables,
	APITypes.CreateGameRoundMutation
>
export const updateGameRound = /* GraphQL */ `mutation UpdateGameRound(
  $input: UpdateGameRoundInput!
  $condition: ModelGameRoundConditionInput
) {
  updateGameRound(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateGameRoundMutationVariables,
	APITypes.UpdateGameRoundMutation
>
export const deleteGameRound = /* GraphQL */ `mutation DeleteGameRound(
  $input: DeleteGameRoundInput!
  $condition: ModelGameRoundConditionInput
) {
  deleteGameRound(input: $input, condition: $condition) {
    id
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
` as GeneratedMutation<
	APITypes.DeleteGameRoundMutationVariables,
	APITypes.DeleteGameRoundMutation
>
export const createSubmittedAnswer =
	/* GraphQL */ `mutation CreateSubmittedAnswer(
  $input: CreateSubmittedAnswerInput!
  $condition: ModelSubmittedAnswerConditionInput
) {
  createSubmittedAnswer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.CreateSubmittedAnswerMutationVariables,
		APITypes.CreateSubmittedAnswerMutation
	>
export const updateSubmittedAnswer =
	/* GraphQL */ `mutation UpdateSubmittedAnswer(
  $input: UpdateSubmittedAnswerInput!
  $condition: ModelSubmittedAnswerConditionInput
) {
  updateSubmittedAnswer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.UpdateSubmittedAnswerMutationVariables,
		APITypes.UpdateSubmittedAnswerMutation
	>
export const deleteSubmittedAnswer =
	/* GraphQL */ `mutation DeleteSubmittedAnswer(
  $input: DeleteSubmittedAnswerInput!
  $condition: ModelSubmittedAnswerConditionInput
) {
  deleteSubmittedAnswer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
		APITypes.DeleteSubmittedAnswerMutationVariables,
		APITypes.DeleteSubmittedAnswerMutation
	>
export const createGameSession = /* GraphQL */ `mutation CreateGameSession(
  $input: CreateGameSessionInput!
  $condition: ModelGameSessionConditionInput
) {
  createGameSession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateGameSessionMutationVariables,
	APITypes.CreateGameSessionMutation
>
export const updateGameSession = /* GraphQL */ `mutation UpdateGameSession(
  $input: UpdateGameSessionInput!
  $condition: ModelGameSessionConditionInput
) {
  updateGameSession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateGameSessionMutationVariables,
	APITypes.UpdateGameSessionMutation
>
export const deleteGameSession = /* GraphQL */ `mutation DeleteGameSession(
  $input: DeleteGameSessionInput!
  $condition: ModelGameSessionConditionInput
) {
  deleteGameSession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteGameSessionMutationVariables,
	APITypes.DeleteGameSessionMutation
>
export const createLobby = /* GraphQL */ `mutation CreateLobby(
  $input: CreateLobbyInput!
  $condition: ModelLobbyConditionInput
) {
  createLobby(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateLobbyMutationVariables,
	APITypes.CreateLobbyMutation
>
export const updateLobby = /* GraphQL */ `mutation UpdateLobby(
  $input: UpdateLobbyInput!
  $condition: ModelLobbyConditionInput
) {
  updateLobby(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateLobbyMutationVariables,
	APITypes.UpdateLobbyMutation
>
export const deleteLobby = /* GraphQL */ `mutation DeleteLobby(
  $input: DeleteLobbyInput!
  $condition: ModelLobbyConditionInput
) {
  deleteLobby(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteLobbyMutationVariables,
	APITypes.DeleteLobbyMutation
>
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateUserMutationVariables,
	APITypes.UpdateUserMutation
>
export const createLobbiesJoined = /* GraphQL */ `mutation CreateLobbiesJoined(
  $input: CreateLobbiesJoinedInput!
  $condition: ModelLobbiesJoinedConditionInput
) {
  createLobbiesJoined(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateLobbiesJoinedMutationVariables,
	APITypes.CreateLobbiesJoinedMutation
>
export const updateLobbiesJoined = /* GraphQL */ `mutation UpdateLobbiesJoined(
  $input: UpdateLobbiesJoinedInput!
  $condition: ModelLobbiesJoinedConditionInput
) {
  updateLobbiesJoined(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateLobbiesJoinedMutationVariables,
	APITypes.UpdateLobbiesJoinedMutation
>
export const deleteLobbiesJoined = /* GraphQL */ `mutation DeleteLobbiesJoined(
  $input: DeleteLobbiesJoinedInput!
  $condition: ModelLobbiesJoinedConditionInput
) {
  deleteLobbiesJoined(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteLobbiesJoinedMutationVariables,
	APITypes.DeleteLobbiesJoinedMutation
>
