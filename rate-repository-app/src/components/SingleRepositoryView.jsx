import {RepositoryItem} from "./RepositoryItem";
import {useParams} from "react-router-native";
import useRepository from "../hooks/useRepository";
import {FlatList, StyleSheet, View} from "react-native";
import theme from "../theme";
import {ReviewItem} from "./ReviewItem";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    separator: {
        height: 4,
        backgroundColor: theme.colors.separatorColor
    }
})


const RepositoryInfo = props => {
    return <View style={styles.container}><RepositoryItem item={props.item} openInGitHub/></View>;
};

const Separator = () => {

    return <View style={styles.separator}/>
}

const SingleRepositoryView = () => {

    const params = useParams();
    const {loading, repository} = useRepository(params.id);


    const reviewData = !loading ? repository.reviews.edges.map(edge => edge.node) : [];


    return !loading ?
        <FlatList data={reviewData}
                  renderItem={({item}) => <ReviewItem item={{title: item.user.username, ...item}}/>}
                  ItemSeparatorComponent={Separator}
                  ListHeaderComponent={() => <RepositoryInfo item={repository}/>}
        />
        : <></>
}

export {SingleRepositoryView}