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
        description
      }
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query($id: ID!, $first: Int!, $after: String) {
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
        description
        reviews (first: $first, after: $after){
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
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
}
`;


export const ME = gql`
query ($includeReviews: Boolean = false){
    me {
        id
        username
        reviews @include(if: $includeReviews) {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    repository {
                        fullName
                        id
                    }
                }
            }
        }
    }
}
`;