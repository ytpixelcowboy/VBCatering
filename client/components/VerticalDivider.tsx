import { View } from "react-native";

type Props = {
    variant : "default" | "light" | "dark"
}

const VerticalDivider = (props : Props) => {
  return (
    <View style={{
        width : 3,
        height : "80%",
        borderRadius : 90,
        backgroundColor : props.variant === "default" ? "#B5BE99" : props.variant === "dark" ? "#A4A4A4" : "#D9D9D9",
    }} />
  )
}


export default VerticalDivider;