import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id
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

export const GET_REPOSITORY = gql`
query($id: ID!) {
    repository(id: $id) {
        id
        fullName
        language
        name
        forksCount
        ratingAverage
        reviewCount
        stargazersCount
        ownerAvatarUrl
        url
    }
}
`;


export const ME = gql`
query {
    me {
        id
        username
    }
}
`;