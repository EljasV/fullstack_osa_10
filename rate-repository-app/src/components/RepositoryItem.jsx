import {Image, StyleSheet, View} from "react-native";
import Text from "./Text"
import {LanguageTag} from "./LanguageTag";
import {FormattedNumber} from "./FormattedNumber";

const styles = StyleSheet.create({
    container: {
        padding: 5
    }, identification: {
        flexDirection: "row"
    },
    textualIdentification: {
        flexDirection: "column",
        paddingLeft: 10
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    additionalInfos: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    additionalInfo: {
        flexDirection: "column",
        alignItems: "center"
    }
})

export const RepositoryItem = (props) => {
    return <View style={styles.container} testID="repositoryItem">
        <View style={styles.identification}>
            <Image source={{uri: props.item.ownerAvatarUrl}} style={styles.avatarImage}/>
            <View style={styles.textualIdentification}>
                <Text fontWeight="bold" fontSize="subheading">{props.item.fullName}</Text>
                <Text color="textSecondary">{props.item.description}</Text>
                <LanguageTag language={props.item.language}/>
            </View>
        </View>
        <View style={styles.additionalInfos}>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={props.item.stargazersCount}/>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={props.item.forksCount}/>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={props.item.reviewCount}/>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={props.item.ratingAverage}/>
                <Text color="textSecondary">Rating</Text>
            </View>
        </View>
    </View>;
};