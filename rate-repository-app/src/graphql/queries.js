import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        fullName
        language
        name
        forksCount
        ratingAverage
        reviewCount
        stargazersCount
        ownerAvatarUrl
      }
    }
  }
}
`;


export const ME=gql`
query {
    me {
        id
        username
    }
}
`;