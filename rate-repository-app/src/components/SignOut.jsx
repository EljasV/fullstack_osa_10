import {useNavigate} from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage";
import {useApolloClient} from "@apollo/client";
import {useEffect} from "react";

export const SignOut = () => {
    const navigate = useNavigate();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    useEffect(()=>{
        authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate("/");
    });
    return null;
};