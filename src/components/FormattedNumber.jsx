import Text from "./Text";

export const FormattedNumber = props => {
    const text = props.value < 1000 ? props.value.toString() : (props.value / 1000).toFixed(1) + "k"
    return <Text fontWeight="bold">{text}</Text>;
};