import {StyleSheet, View} from "react-native";
import {RepositoryList} from "./RepositoryList";
import AppBar from "./AppBar";
import {Navigate, Route, Routes} from "react-router-native";
import {SignIn} from "./SignIn";
import {SignOut} from "./SignOut";
import {SingleRepositoryView} from "./SingleRepositoryView";
import {ReviewCreation} from "./ReviewCreation";
import {SignUp} from "./SignUp";
import {MyReviews} from "./MyReviews"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});


export const Main = () => {
    return <View style={styles.container}>
        <AppBar/>
        <Routes>
            <Route path="/" element={<RepositoryList/>} exact/>
            <Route path={"/repository/:id"} element={<SingleRepositoryView/>}/>
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/signout"} element={<SignOut/>}/>
            <Route path={"/reviewCreation"} element={<ReviewCreation/>}/>
            <Route path={"/myReviews"} element={<MyReviews/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </View>;
};
