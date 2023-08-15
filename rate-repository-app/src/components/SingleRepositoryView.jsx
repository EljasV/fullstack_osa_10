import {RepositoryItem} from "./RepositoryItem";
import {useParams} from "react-router-native";
import useRepository from "../hooks/useRepository";
import {View, StyleSheet, FlatList} from "react-native";
import Text from "./Text"
import theme from "../theme";
import {format} from "date-fns";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    reviewContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "flex-start"

    },
    reviewScoreContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: theme.colors.languageBackground,
        borderWidth: 2,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    reviewScoreText: {
        color: theme.colors.languageBackground
    },
    reviewInfoContainer: {
        flexDirection: "column",
        alignSelf: "stretch",
        margin: 5,
        width: 300
    },
    reviewInfoText: {
        alignSelf: "stretch",
    },
    separator: {
        height: 4,
        backgroundColor: "#c5c5de"
    }
})


const RepositoryInfo = props => {
    return <View style={styles.container}><RepositoryItem item={props.item} openInGitHub/></View>;
};

const ReviewItem = ({item}) => {
    const date = Date.parse(item.createdAt)

    return <View style={styles.reviewContainer}>
        <View style={styles.reviewScoreContainer}><Text style={styles.reviewScoreText}
                                                        fontWeight={"bold"}>{item.rating}</Text></View>
        <View style={styles.reviewInfoContainer}>
            <Text fontWeight={"bold"}>{item.user.username}</Text>
            <Text color={"textSecondary"}>{format(date, "dd.LL.yyyy")}</Text>
            <Text style={styles.reviewInfoText}>{item.text}</Text>
        </View>
    </View>
}

const Separator = () => {

    return <View style={styles.separator}/>
}

const SingleRepositoryView = () => {

    const params = useParams();
    const {loading, repository} = useRepository(params.id);


    const reviewData = !loading ? repository.reviews.edges.map(edge => edge.node) : [];


    return !loading ?
        <FlatList data={reviewData}
                  renderItem={({item}) => <ReviewItem item={item}/>}
                  ItemSeparatorComponent={Separator}
                  ListHeaderComponent={() => <RepositoryInfo item={repository}/>}
        />
        : <></>
}

export {SingleRepositoryView}