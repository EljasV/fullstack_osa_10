import {FlatList, View, StyleSheet} from "react-native";
import {useQuery} from "@apollo/client";
import {ME} from "../graphql/queries";
import theme from "../theme";
import {ReviewItem} from "./ReviewItem";


const styles = StyleSheet.create({
    separator: {
        backgroundColor: theme.colors.separatorColor,
        height: 10
    },
    container: {
        alignSelf: "stretch"
    }
})

const RenderItem = ({item}) => {
    return <View>
        <ReviewItem item={{title: item.repository.fullName, ...item}}></ReviewItem>
    </View>
}

const separator = () => {
    return <View style={styles.separator}/>
}
export const MyReviews = () => {

    const {data, loading} = useQuery(ME, {variables: {includeReviews: true}});

    let displayData;
    if (loading) {
        displayData = []
    } else {
        displayData = data.me.reviews.edges.map(value => value.node)
    }
    return <View style={styles.container}>
        <FlatList data={displayData} renderItem={RenderItem} ItemSeparatorComponent={separator}></FlatList>
    </View>
};
