import {
    Text,
    View,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { sensors } from '../../sensors';

//
import Ionicons from '@expo/vector-icons/Ionicons';
//

type Props = {
    deviceName: String;
    status: string; // or 'active' | 'inactive' | 'unknown'
    id: string;
    onPress: (args: { sensorID: string }) => void;
};
const SensorItem = ({ deviceName, status, id, onPress }: Props) => {
    const styles = {
        button: {
            borderTopColor: '#f5f5f5',
            borderBottomWidth: 1,
            padding: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        statusActive: {
            backgroundColor: 'white',
            borderRadius: 15, // For circular shape
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#30dde3',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 5, // For Android shadow
        },
        statusInactive: {
            backgroundColor: 'white',
            borderRadius: 15, // For circular shape
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#092829',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3, // Reduced shadow for not active state
            shadowRadius: 2,
            elevation: 2, // Less elevation for not active state
        },
    };
    return (
        <TouchableOpacity
            onPress={() => onPress({ sensorID: id })}
            key={id}
            style={styles.button}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>{deviceName}</Text>
                <Text>{status === 'active' ? 'Active' : 'Not Active'}</Text>
            </View>
            <View
                style={
                    status === 'active'
                        ? styles.statusActive
                        : styles.statusInactive
                }
            >
                {/* <Icon
                    source="power"
                    color={
                        status === 'active'
                            ? MD3Colors.error40
                            : MD3Colors.error80
                    }
                    size={25}
                /> */}
            </View>
        </TouchableOpacity>
    );
};

export default function DeviceScreen() {
    const onPress = (item) => {
        console.log('go to item: ', item);
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderWidth: 0,
                    borderRadius: 18,
                    backgroundColor: '#f5f5f5',
                    width: 350,
                }}
            >
                <FlatList
                    data={sensors}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SensorItem
                            onPress={onPress}
                            deviceName={item.deviceName}
                            status={item.status}
                            id={item.id}
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
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});
