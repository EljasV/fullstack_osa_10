import {useMutation} from "@apollo/client";
import {SIGN_IN} from "../graphql/mutations";

export const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({username, password}) => {
        return mutate({variables: {credentials: {username, password}}})
    };

    return [signIn, result];
};