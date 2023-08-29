import {View,StyleSheet} from "react-native";
import Text from "./Text";
import {format} from "date-fns";
import theme from "../theme";

const styles = StyleSheet.create({
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
    }
})
export const ReviewItem = ({item}) => {
    const date = Date.parse(item.createdAt)

    return <View style={styles.reviewContainer}>
        <View style={styles.reviewScoreContainer}><Text style={styles.reviewScoreText}
                                                        fontWeight={"bold"}>{item.rating}</Text></View>
        <View style={styles.reviewInfoContainer}>
            <Text fontWeight={"bold"}>{item.title}</Text>
            <Text color={"textSecondary"}>{format(date, "dd.LL.yyyy")}</Text>
            <Text style={styles.reviewInfoText}>{item.text}</Text>
        </View>
    </View>
}