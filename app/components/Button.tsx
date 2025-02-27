import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

type Props = {
    label: String;
    theme?: "primary";
    onPress: () => void;
    disable: boolean;
};

export default function Button({ label, theme, onPress, disable }: Props) {
    if (theme === "primary") {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    {
                        borderWidth: 4,
                        borderColor: "#ffd33d",
                        borderRadius: 18,
                    },
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View
            style={{
                height: 50,
                width: 150,
                backgroundColor: "#fff",
                borderRadius: 18,
            }}
        >
            <Pressable
                style={styles.button}
                onPress={onPress}
                disabled={disable}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#25292e",
        fontSize: 16,
    },
});
