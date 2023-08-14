import {useQuery} from "@apollo/client";
import {GET_REPOSITORY} from "../graphql/queries";

const useRepository = (id) => {

    const {data, loading, client} = useQuery(GET_REPOSITORY, {fetchPolicy: "cache-and-network", variables: {id}});


    const repository = !loading ? data.repository : null;

    return {
        repository, loading, refetch: () => {
            client.refetchQueries({})
        }
    };
};

export default useRepository;