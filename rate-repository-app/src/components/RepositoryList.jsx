import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {RepositoryItem} from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import {useNavigate} from "react-router-native";
import {Picker} from "@react-native-picker/picker";
import {Component, useState} from "react";
import theme from "../theme";
import {Searchbar} from "react-native-paper"
import {useDebounce} from "use-debounce";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    separator: {
        height: 10,
        backgroundColor: theme.colors.separatorColor
    },
    sortingContainer: {
        backgroundColor: theme.colors.textSecondary
    },
    searchContainer: {
        margin: 5
    }
});


const ItemSeparator = () => <View style={styles.separator}/>;

const PressableRepositoryItem = ({item}) => {

    const navigate = useNavigate();

    const onPress = () => {
        navigate(`/repository/${item.id}`);
    };

    return <Pressable onPress={onPress}><RepositoryItem item={item}/></Pressable>;
};

class RepositoryListContainer extends Component {

    renderHeader = () => {
        const props = this.props;

        return <View style={styles.sortingContainer}>
            <View style={styles.searchContainer}>
                <Searchbar placeholder="Search" onChangeText={props.search.setSearchQuery}
                           value={props.search.searchQuery}/>
            </View>
            <Picker selectedValue={props.sorting.selectedSorting}
                    onValueChange={(itemValue) => props.sorting.setSelectedSorting(itemValue)}>
                <Picker.Item label={"Latest repositories"} value={"latest"}/>
                <Picker.Item label={"Highest rated repositories"} value={"highest"}/>
                <Picker.Item label={"Lowest rated repositories"} value={"lowest"}/>
            </Picker>
        </View>
    }

    render() {
        return <FlatList
            style={styles.container}
            ListHeaderComponent={this.renderHeader}
            data={this.props.repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <PressableRepositoryItem item={item}/>}/>;
    }
}

const RepositoryList = () => {

    const [_searchQuery, setSearchQuery] = useState("")
    const [searchQuery] = useDebounce(_searchQuery, 500)
    const [selectedSorting, setSelectedSorting] = useState()
    const {repositories} = useRepositories(selectedSorting,searchQuery);


    return (
        <RepositoryListContainer repositories={repositories} sorting={{selectedSorting, setSelectedSorting}}
                                 search={{searchQuery, setSearchQuery}}/>
    );
};

export {RepositoryList, RepositoryListContainer};
