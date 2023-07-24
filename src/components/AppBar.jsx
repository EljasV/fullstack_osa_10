import {View, StyleSheet, Pressable} from 'react-native';
import Constants from 'expo-constants';
import Text from "./Text";
import theme from "../theme";
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bar,
        alignSelf: "stretch",
        flexDirection: "row",
        paddingBottom: 15,
        paddingLeft: 10,
        justifyContent: "flex-start"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 16,
        color: theme.colors.barText,
        padding: 5
    }
});

const AppBar = () => {


    return <View style={styles.container}>
        <Link to="/">
            <Text style={styles.titleText}>
                Repositories
            </Text>
        </Link>
        <Link to={"signin"}>
            <Text style={styles.titleText}>
                Sign in
            </Text>
        </Link>
    </View>;
};

export default AppBar;