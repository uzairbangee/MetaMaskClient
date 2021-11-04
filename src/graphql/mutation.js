// import gql from "graphql-tag";

export const getUserAuthData = /* GraphQL */ `
  query getUserAuthData($input: getUserAuthDataInput!) {
    getUserAuthData(input: $input) {
      creationDate
      nonce
      publicAddress
    }
  }
`;

export const authorizeUser = /* GraphQL */ `
  query authorizeUser($input: authorizeUserInput!) {
    authorizeUser(input: $input) {
    payload{
       username
      firstName
      lastName
      publicAddress
    }
    iat
    exp
    }
  }
`;

export const signup = /* GraphQL */ `
  mutation signup($input: signupInput!) {
    signup(input: $input) {
      creationDate
      nonce
      publicAddress
    }
  }
`;

export const login = /* GraphQL */ `
  query login($input: loginInput!) {
    login(input: $input)
  }
`;