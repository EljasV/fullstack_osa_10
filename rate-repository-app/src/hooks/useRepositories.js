import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";

const useRepositories = () => {

    const {data, loading, client} = useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"});

    const repositories = !loading ? data.repositories.edges.map(value => value.node) : []

    return {
        repositories, loading, refetch: () => {
            client.refetchQueries({})
        }
    };
};

export default useRepositories;