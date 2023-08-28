import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";

const useRepositories = (sorting, searchQuery) => {

    let orderBy;
    let orderDirection;

    if (sorting === "latest" || sorting === undefined) {
        orderBy = "CREATED_AT"
        orderDirection = "DESC"
    } else if (sorting === "highest") {
        orderBy = "RATING_AVERAGE"
        orderDirection = "DESC"
    } else if (sorting === "lowest") {
        orderBy = "RATING_AVERAGE"
        orderDirection = "ASC"
    }


    const {data, loading, client} = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: {orderBy, orderDirection, searchKeyword: searchQuery}
    });

    const repositories = !loading ? data.repositories.edges.map(value => value.node) : []

    return {
        repositories, loading, refetch: () => {
            client.refetchQueries({})
        }
    };
};

export default useRepositories;