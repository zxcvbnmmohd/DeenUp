/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api"

type GeneratedSubscription<InputType, OutputType> = string & {
	__generatedSubscriptionInput: InputType
	__generatedSubscriptionOutput: OutputType
}

export const onCreateGameRound =
	/* GraphQL */ `subscription OnCreateGameRound($filter: ModelSubscriptionGameRoundFilterInput) {
  onCreateGameRound(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateGameRoundSubscriptionVariables,
		APITypes.OnCreateGameRoundSubscription
	>
export const onUpdateGameRound =
	/* GraphQL */ `subscription OnUpdateGameRound($filter: ModelSubscriptionGameRoundFilterInput) {
  onUpdateGameRound(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateGameRoundSubscriptionVariables,
		APITypes.OnUpdateGameRoundSubscription
	>
export const onDeleteGameRound =
	/* GraphQL */ `subscription OnDeleteGameRound($filter: ModelSubscriptionGameRoundFilterInput) {
  onDeleteGameRound(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteGameRoundSubscriptionVariables,
		APITypes.OnDeleteGameRoundSubscription
	>
export const onCreateSubmittedAnswer =
	/* GraphQL */ `subscription OnCreateSubmittedAnswer(
  $filter: ModelSubscriptionSubmittedAnswerFilterInput
) {
  onCreateSubmittedAnswer(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateSubmittedAnswerSubscriptionVariables,
		APITypes.OnCreateSubmittedAnswerSubscription
	>
export const onUpdateSubmittedAnswer =
	/* GraphQL */ `subscription OnUpdateSubmittedAnswer(
  $filter: ModelSubscriptionSubmittedAnswerFilterInput
) {
  onUpdateSubmittedAnswer(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateSubmittedAnswerSubscriptionVariables,
		APITypes.OnUpdateSubmittedAnswerSubscription
	>
export const onDeleteSubmittedAnswer =
	/* GraphQL */ `subscription OnDeleteSubmittedAnswer(
  $filter: ModelSubscriptionSubmittedAnswerFilterInput
) {
  onDeleteSubmittedAnswer(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteSubmittedAnswerSubscriptionVariables,
		APITypes.OnDeleteSubmittedAnswerSubscription
	>
export const onCreateGameSession =
	/* GraphQL */ `subscription OnCreateGameSession(
  $filter: ModelSubscriptionGameSessionFilterInput
) {
  onCreateGameSession(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateGameSessionSubscriptionVariables,
		APITypes.OnCreateGameSessionSubscription
	>
export const onUpdateGameSession =
	/* GraphQL */ `subscription OnUpdateGameSession(
  $filter: ModelSubscriptionGameSessionFilterInput
) {
  onUpdateGameSession(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateGameSessionSubscriptionVariables,
		APITypes.OnUpdateGameSessionSubscription
	>
export const onDeleteGameSession =
	/* GraphQL */ `subscription OnDeleteGameSession(
  $filter: ModelSubscriptionGameSessionFilterInput
) {
  onDeleteGameSession(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteGameSessionSubscriptionVariables,
		APITypes.OnDeleteGameSessionSubscription
	>
export const onCreateLobby =
	/* GraphQL */ `subscription OnCreateLobby($filter: ModelSubscriptionLobbyFilterInput) {
  onCreateLobby(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateLobbySubscriptionVariables,
		APITypes.OnCreateLobbySubscription
	>
export const onUpdateLobby =
	/* GraphQL */ `subscription OnUpdateLobby($filter: ModelSubscriptionLobbyFilterInput) {
  onUpdateLobby(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateLobbySubscriptionVariables,
		APITypes.OnUpdateLobbySubscription
	>
export const onDeleteLobby =
	/* GraphQL */ `subscription OnDeleteLobby($filter: ModelSubscriptionLobbyFilterInput) {
  onDeleteLobby(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteLobbySubscriptionVariables,
		APITypes.OnDeleteLobbySubscription
	>
export const onUpdateUser =
	/* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateUserSubscriptionVariables,
		APITypes.OnUpdateUserSubscription
	>
export const onCreateLobbiesJoined =
	/* GraphQL */ `subscription OnCreateLobbiesJoined(
  $filter: ModelSubscriptionLobbiesJoinedFilterInput
) {
  onCreateLobbiesJoined(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateLobbiesJoinedSubscriptionVariables,
		APITypes.OnCreateLobbiesJoinedSubscription
	>
export const onUpdateLobbiesJoined =
	/* GraphQL */ `subscription OnUpdateLobbiesJoined(
  $filter: ModelSubscriptionLobbiesJoinedFilterInput
) {
  onUpdateLobbiesJoined(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateLobbiesJoinedSubscriptionVariables,
		APITypes.OnUpdateLobbiesJoinedSubscription
	>
export const onDeleteLobbiesJoined =
	/* GraphQL */ `subscription OnDeleteLobbiesJoined(
  $filter: ModelSubscriptionLobbiesJoinedFilterInput
) {
  onDeleteLobbiesJoined(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteLobbiesJoinedSubscriptionVariables,
		APITypes.OnDeleteLobbiesJoinedSubscription
	>
