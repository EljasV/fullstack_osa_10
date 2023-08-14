import {RepositoryItem} from "./RepositoryItem";
import {useParams} from "react-router-native";
import useRepository from "../hooks/useRepository";
import {View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    }

})

const SingleRepositoryView = () => {

    const params = useParams();
    const {loading, repository} = useRepository(params.id);


    return !loading ?
        <View style={styles.container}><RepositoryItem item={repository} openInGitHub/></View>
        : <></>
}

export {SingleRepositoryView}