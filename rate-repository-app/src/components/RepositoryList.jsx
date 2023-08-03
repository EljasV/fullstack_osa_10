import {FlatList, StyleSheet, View} from 'react-native';
import {RepositoryItem} from "./RepositoryItem";
import {useEffect, useState} from "react";
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

const RepositoryList = () => {

    const {repositories, loading, refetch} = useRepositories();

    return (
        <FlatList
            style={styles.container}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={RepositoryItem}/>
    );
};

export default RepositoryList;