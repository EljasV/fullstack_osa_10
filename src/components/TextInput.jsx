import {TextInput as NativeTextInput, StyleSheet} from 'react-native';
import theme from "../theme";

const styles = StyleSheet.create({
    content: {
        padding: 5,
        borderRadius: 3,
        borderWidth: 1,
        margin: 2,
        color: theme.colors.textSecondary
    }
});

const TextInput = ({style, error, ...props}) => {
    const textInputStyle = [style, styles.content];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;