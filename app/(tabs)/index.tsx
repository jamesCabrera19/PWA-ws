import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { sensors } from "../../sensors";
import SensorItem from "../components/SensorItem";
//
import Ionicons from "@expo/vector-icons/Ionicons";
//

export default function Index() {
    const router = useRouter();
    //

    const onPress = (id: string) => {
        const sensorID = id;
        let pushRoute = false;
        for (let i = 0; i < sensors.length; i++) {
            const item = sensors[i];

            if (item.id === sensorID && item.status === "active") {
                pushRoute = true;
                break;
            }
        }
        if (pushRoute) {
            router.push(`/sensor/${sensorID}`); // Navigate to the item screen with the item's id
        }
    };
    //
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderRadius: 18,
                    backgroundColor: "#f5f5f5",
                    width: 350,
                    height: 150,
                }}
            >
                <Text>this is the web socket status</Text>
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={sensors}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SensorItem
                            onPress={onPress}
                            deviceName={item.deviceName}
                            status={item.status}
                            id={item.id}
                            key={item.id}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
    },
    flatlistContainer: {
        borderWidth: 0,
        borderRadius: 18,
        backgroundColor: "#f5f5f5",
        width: 350,
    },
});