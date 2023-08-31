import {useQuery} from "@apollo/client";
import {GET_REPOSITORY} from "../graphql/queries";

const useRepository = (variables) => {

    const {data, loading, client, fetchMore} = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: variables
    });


    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables
            }
        })
    }

    const repository = !loading ? data.repository : null;


    return {
        repository, loading, refetch: () => {
            client.refetchQueries({})
        },
        fetchMore: handleFetchMore
    };
};

export default useRepository;