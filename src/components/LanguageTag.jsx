import {StyleSheet} from "react-native";
import Text from "./Text";
import theme from "../theme";


const styles = StyleSheet.create({
    languageIcon: {
        backgroundColor: theme.colors.languageBackground,
        color: theme.colors.languageText,
        borderRadius: 5,
        alignSelf: "flex-start",
        padding: 3
    }
})
export const LanguageTag = (props) => {
    return <Text style={styles.languageIcon}>{props.language}</Text>;
};