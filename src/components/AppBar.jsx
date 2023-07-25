import {View, StyleSheet, ScrollView} from 'react-native';
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

const BarTab = props => {
    return <Link to={props.link}>
        <Text style={styles.titleText}>
            {props.text}
        </Text>
    </Link>;
};

const AppBar = () => {


    return <View style={styles.container}>
        <ScrollView horizontal>
            <BarTab link="/" text="Repositories"/>
            <BarTab link="/signin" text="Sign in"/>
        </ScrollView>
    </View>;
};

export default AppBar;