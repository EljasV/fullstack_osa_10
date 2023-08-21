import Text from "./Text";
import {Formik} from "formik";
import {Pressable, StyleSheet, View} from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import {useNavigate} from "react-router-native"

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    button: {
        alignSelf: "stretch",
        backgroundColor: theme.colors.languageBackground,
        alignItems: "center",
        color: theme.colors.languageText,
        borderRadius: 3,
        padding: 10,
        margin: 5
    },
    buttonText: {
        color: theme.colors.languageText,
        fontWeight: theme.fontWeights.bold
    }

})

const validationSchema = yup.object().shape({
    ownerName: yup.string().required("Repository owner name is required!"),
    repositoryName: yup.string().required("Repository name is required!"),
    rating: yup.number().required("Rating is required").integer("Rating must be an integer").min(0, "Rating must be between 0 and 100").max(100, "Rating must be between 0 and 100"),
    review: yup.string().optional()
});

const ReviewCreation = () => {

    const [createReview] = useCreateReview();
    const navigate = useNavigate();
    const onSubmit = async values => {
        const variables = {
            ownerName: values.ownerName,
            rating: Number(values.rating),
            repositoryName: values.repositoryName,
            text: values.reviewText
        };
        try {
            const {data} = await createReview(variables)
            navigate(`/repository/${data.createReview.repositoryId}`)
        } catch (e) {
            console.log(e)
        }

    };
    return <View style={styles.container}>
        <Formik initialValues={{ownerName: "", repositoryName: "", rating: "", reviewText: ""}}
                onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit}) =>
                <View>
                    <FormikTextInput name="ownerName" placeholder={"Repository owner name"}/>
                    <FormikTextInput name="repositoryName" placeholder={"Repository  name"}/>
                    <FormikTextInput name="rating" placeholder={"Rating between 0 and 100"}/>
                    <FormikTextInput name="reviewText" placeholder={"Review"} multiline/>
                    <Pressable onPress={handleSubmit} style={styles.button}><Text style={styles.buttonText}>Create a
                        review</Text></Pressable>
                </View>
            }
        </Formik>
    </View>

}


export {ReviewCreation}