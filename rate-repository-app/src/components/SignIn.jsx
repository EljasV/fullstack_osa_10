import Text from './Text';
import {Pressable, StyleSheet, View} from "react-native";
import FormikTextInput from "./FormikTextInput";
import {Formik} from "formik";
import theme from "../theme";
import {useSignIn} from "../hooks/useSignIn"
import * as yup from "yup";


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
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!")
});


const SignIn = () => {

    const [signIn] = useSignIn();


    const onSubmit = async values => {
        const {username, password} = values

        try {
            const {data} = await signIn({username, password})
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }


    return <View style={styles.container}>
        <Formik initialValues={{username: "", password: ""}} onSubmit={onSubmit} style={styles.container}
                validationSchema={validationSchema}>
            {({handleSubmit}) =>
                <View>
                    <FormikTextInput name="username" placeholder="Username"/>
                    <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
                    <Pressable onPress={handleSubmit} style={styles.button}><Text style={styles.buttonText}>Sign
                        in</Text></Pressable>
                </View>
            }
        </Formik>
    </View>;
};

export default SignIn;