import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {RepositoryItem} from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import {useNavigate} from "react-router-native";
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";
import theme from "../theme";


const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    separator: {
        height: 10,
        backgroundColor: "#DDE"
    },
    sortingContainer:{
        backgroundColor:theme.colors.textSecondary
    }
});


const ListHeader = ({sorting}) => {


    return <View style={styles.sortingContainer}>
        <Picker selectedValue={sorting.selectedSorting}
                onValueChange={(itemValue) => sorting.setSelectedSorting(itemValue)}>
            <Picker.Item label={"Latest repositories"} value={"latest"}/>
            <Picker.Item label={"Highest rated repositories"} value={"highest"}/>
            <Picker.Item label={"Lowest rated repositories"} value={"lowest"}/>
        </Picker>
    </View>
}

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
    ListHeaderComponent={() => <ListHeader sorting={props.sorting}/>}
    data={props.repositories}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => <PressableRepositoryItem item={item}/>}/>;

const RepositoryList = () => {

    const [selectedSorting, setSelectedSorting] = useState()
    const {repositories} = useRepositories(selectedSorting);

    return (
        <RepositoryListContainer repositories={repositories} sorting={{selectedSorting, setSelectedSorting}}/>
    );
};

export {RepositoryList, RepositoryListContainer};
