import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../graphql/mutations";

const useCreateUser = () => {
    const [mutate] = useMutation(CREATE_USER)

    const createUser = async (values) => {
        return await mutate({variables: {user: values}})
    }
    return createUser
}

export default useCreateUser