import {useMutation} from "@apollo/client";
import {CREATE_REVIEW} from "../graphql/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW)


    const createReview = async (values) => {
        return await mutate({variables: {review: values}})

    }
    return [createReview, result]
}

export default useCreateReview;