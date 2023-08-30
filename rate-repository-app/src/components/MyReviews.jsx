import {FlatList, View, StyleSheet, Pressable, Alert} from "react-native";
import {useMutation, useQuery} from "@apollo/client";
import {ME} from "../graphql/queries";
import theme from "../theme";
import {ReviewItem} from "./ReviewItem";
import Text from "./Text";
import {useNavigate} from "react-router-native";
import {DELETE_REVIEW} from "../graphql/mutations";


const styles = StyleSheet.create({
    separator: {
        backgroundColor: theme.colors.separatorColor,
        height: 10
    },
    container: {
        alignSelf: "stretch"
    },
    actionButtons: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    viewActionButton: {
        backgroundColor: theme.colors.languageBackground,
        margin: 5,
        padding: 15,
        borderRadius: 5,
        flexGrow: 1
    },
    deleteActionButton: {
        backgroundColor: theme.colors.errorColor,
        margin: 5,
        padding: 15,
        borderRadius: 5,
        flexGrow: 1
    },
    actionText: {
        color: theme.colors.barText,
        alignSelf: "center"
    }
})

const RenderItem = ({item, refetch}) => {

    const navigate = useNavigate()

    const [mutate] = useMutation(DELETE_REVIEW);

    const viewClick = () => {
        console.log(item)
        navigate(`/repository/${item.repository.id}`);
    }

    const deleteClick = () => {
        Alert.alert("Delete review", "Are you sure you want to delete this review?", [
            {
                text: "Cancel"
            },
            {
                text: "Delete",
                onPress: () => {
                    mutate({variables: {deleteReviewId: item.id}})
                    refetch({includeReviews: true})
                }
            }
        ], {cancelable: true})
    }

    return <View>
        <ReviewItem item={{title: item.repository.fullName, ...item}}>
            <View style={styles.actionButtons}>
                <Pressable style={styles.viewActionButton} onPress={viewClick}>
                    <Text style={styles.actionText} fontWeight={"bold"}>View repository</Text>
                </Pressable>
                <Pressable style={styles.deleteActionButton} onPress={deleteClick}>
                    <Text style={styles.actionText} fontWeight={"bold"}>Delete review</Text>
                </Pressable>
            </View>
        </ReviewItem>
    </View>
}

const separator = () => {
    return <View style={styles.separator}/>
}
export const MyReviews = () => {

    const {data, loading, refetch} = useQuery(ME, {
        variables: {includeReviews: true},
        fetchPolicy: "cache-and-network"
    });

    let displayData;
    if (loading) {
        displayData = []
    } else {
        displayData = data.me.reviews.edges.map(value => value.node)
    }
    return <View style={styles.container}>
        <FlatList data={displayData} renderItem={({item}) => <RenderItem item={item} refetch={refetch}/>}
                  ItemSeparatorComponent={separator}></FlatList>
    </View>
};
