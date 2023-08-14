import {Image, Pressable, StyleSheet, View} from "react-native";
import Text from "./Text"
import {LanguageTag} from "./LanguageTag";
import {FormattedNumber} from "./FormattedNumber";
import theme from "../theme";
import * as Linking from "expo-linking"

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
    },
    githubButton: {
        backgroundColor: theme.colors.languageBackground,
        borderRadius: 5,
        padding: 3,
    },
    githubText: {
        color: theme.colors.languageText,
        alignSelf: "center",
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        padding: 10
    }
})

export const RepositoryItem = ({item, openInGitHub = false}) => {
    return <View style={styles.container} testID="repositoryItem">
        <View style={styles.identification}>
            <Image source={{uri: item.ownerAvatarUrl}} style={styles.avatarImage}/>
            <View style={styles.textualIdentification}>
                <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                <Text color="textSecondary">{item.description}</Text>
                <LanguageTag language={item.language}/>
            </View>
        </View>
        <View style={styles.additionalInfos}>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={item.stargazersCount}/>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={item.forksCount}/>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={item.reviewCount}/>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.additionalInfo}>
                <FormattedNumber value={item.ratingAverage}/>
                <Text color="textSecondary">Rating</Text>
            </View>
        </View>
        {openInGitHub ?
            <Pressable style={styles.githubButton} onPress={() => Linking.openURL(item.url)}><View><Text
                style={styles.githubText}>Open in
                github</Text></View></Pressable> : null}
    </View>;
};