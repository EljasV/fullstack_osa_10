import {FlatList, StyleSheet, View} from 'react-native';
import {RepositoryItem} from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    separator: {
        height: 10,
        backgroundColor: "#DDE"
    },
});

const ItemSeparator = () => <View style={styles.separator}/>;

const RepositoryListContainer = props => <FlatList
    style={styles.container}
    data={props.repositories}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={RepositoryItem}/>;

const RepositoryList = () => {

    const {repositories} = useRepositories();

    return (
        <RepositoryListContainer repositories={repositories}/>
    );
};

export {RepositoryList, RepositoryListContainer};
