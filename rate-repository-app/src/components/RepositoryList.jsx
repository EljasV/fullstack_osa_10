import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {RepositoryItem} from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import {useNavigate} from "react-router-native";

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

const PressableRepositoryItem = ({item}) => {

    const navigate = useNavigate();

    const onPress = () => {
        navigate(`/repository/${item.id}`);
    };

    return <Pressable onPress={onPress}><RepositoryItem item={item}/></Pressable>;
};

const RepositoryListContainer = props => <FlatList
    style={styles.container}
    data={props.repositories}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => <PressableRepositoryItem item={item}/>}/>;

const RepositoryList = () => {

    const {repositories} = useRepositories();

    return (
        <RepositoryListContainer repositories={repositories}/>
    );
};

export {RepositoryList, RepositoryListContainer};
