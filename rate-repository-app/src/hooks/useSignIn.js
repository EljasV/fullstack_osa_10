import {useApolloClient, useMutation} from "@apollo/client";
import {SIGN_IN} from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

export const useSignIn = () => {
    const authStorage = useAuthStorage();

    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN);
    const signIn = async ({username, password}) => {
        const ret = await mutate({variables: {credentials: {username, password}}});
        await authStorage.setAccessToken(ret.data.authenticate.accessToken);
        await apolloClient.resetStore();
        return ret;
    };

    return [signIn, result];
};