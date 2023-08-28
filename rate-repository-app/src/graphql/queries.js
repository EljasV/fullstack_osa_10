import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
        reviews {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    user {
                        id
                        username
                    }
                }
                cursor
            }
        }
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