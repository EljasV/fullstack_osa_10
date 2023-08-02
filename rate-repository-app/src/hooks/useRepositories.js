import {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();


    const {data, error, loading, client} = useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"});

    if (!loading && data !== repositories) {
        const repos = data.edges
        setRepositories(repos);
        console.log(repos)
    }
    return {
        data, loading, refetch: () => {
            client.refetchQueries({})
        }
    };
};

export default useRepositories;