import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import React from "react";
import {Formik} from "formik"
import {View, Pressable, StyleSheet} from "react-native"
import theme from "../theme";
import * as yup from "yup";
import useCreateUser from "../hooks/useCreateUser";
import {useSignIn} from "../hooks/useSignIn";
import {useNavigate} from "react-router-native";


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
    username: yup.string().required("Username is required!").min(5,"Username's length must be at least 5 characters.").max(30,"Username's length must be at most 30 characters."),
    password1: yup.string().required("Password is required!").min(5,"Password's length must be at least 5 characters.").max(30,"Password's length must be at most 30 characters."),
    password2: yup.string().required("Password confirmation required!").oneOf([yup.ref("password1")], "Passwords must match!")
});

const SignUp = () => {

    const createUser = useCreateUser();
    const [signIn] = useSignIn();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        try {
            const credentials = {username: values.username, password: values.password1};
            await createUser(credentials)
            await signIn(credentials)
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }

    return <View style={styles.container}>
        <Formik initialValues={{username: "", password1: "", password2: ""}} onSubmit={onSubmit}
                style={styles.container}
                validationSchema={validationSchema}>
            {({handleSubmit}) =>
                <View>
                    <FormikTextInput name="username" placeholder="Username"/>
                    <FormikTextInput name="password1" placeholder="Password" secureTextEntry/>
                    <FormikTextInput name="password2" placeholder="Password confirmation" secureTextEntry/>
                    <Pressable onPress={handleSubmit} style={styles.button} testID="SubmitButton"><Text
                        style={styles.buttonText}>Sign up</Text></Pressable>
                </View>
            }
        </Formik>
    </View>
};


export {SignUp}