import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
query ExampleQuery {
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
