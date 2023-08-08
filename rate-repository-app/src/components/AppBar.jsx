import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Text from "./Text";
import theme from "../theme";
import {Link} from "react-router-native";
import {useQuery} from "@apollo/client";
import {ME} from "../graphql/queries";

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
    const {data, loading} = useQuery(ME);


    return <View style={styles.container}>
        <ScrollView horizontal>
            <BarTab link="/" text="Repositories"/>

            {!loading && data.me === null ? <BarTab link="/signin" text="Sign in"/> : null}
            {!loading && data.me !== null ? <BarTab link="/signout" text="Sign out"/> : null}
        </ScrollView>
    </View>;
};

export default AppBar;