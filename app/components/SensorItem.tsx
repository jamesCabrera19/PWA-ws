import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";

type Props = {
    deviceName: String;
    status: string; // or 'active' | 'inactive' | 'unknown'
    id: string;
    onPress: (id: string) => void; // Define the expected function type
};

const SensorItem = ({ deviceName, status, id, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={() => onPress(id)} style={styles.button}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>{deviceName}</Text>
                <Text>{status === "active" ? "Active" : "Not Active"}</Text>
            </View>
            <View
                style={
                    status === "active"
                        ? styles.statusActive
                        : styles.statusInactive
                }
            ></View>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        borderTopColor: "#f5f5f5",
        borderBottomWidth: 1,
        padding: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    statusActive: {
        backgroundColor: "white",
        borderRadius: 15, // For circular shape
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#30dde3",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
    },
    statusInactive: {
        backgroundColor: "white",
        borderRadius: 15, // For circular shape
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#092829",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3, // Reduced shadow for not active state
        shadowRadius: 2,
        elevation: 2, // Less elevation for not active state
    },
};

export default SensorItem;
