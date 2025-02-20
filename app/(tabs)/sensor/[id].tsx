import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";
import { useWebSocket, WebSocketPayload } from "@/app/hooks/useWebSocket";

const PlaceholderImage = require("@/assets/images/dial.jpg");

export default function HomeScreen() {
    // 🔹 State Management
    const [image, setImage] = useState<string | undefined>(undefined);

    // 🔹 WebSocket Context
    const { ws, serverMessages, serverState, sendMessage } = useWebSocket();

    // 📌 Select Image from Device
    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            alert("No image selected");
            console.log("No image selected");
        }
    };

    // 📌 Reset Image to Placeholder
    const resetImage = () => {
        setImage(PlaceholderImage);
    };

    // 📌 Send Image Data via WebSocket
    const onDone = () => {
        // checking web socket status before sending the payload
        if (!ws || ws?.readyState !== 1) {
            console.log("WebSocket is not connected. Cannot send data.");
            return;
        }
        if (!image) {
            console.log("Image is not selected");
            ("Select image before sending");
            return;
        }

        // console.log("Server Messages:", serverMessages);
        // console.log("Server State:", ws);

        const payload: WebSocketPayload = {
            command: "image_payload",
            data: "ByteArrayData",
            device_id: "ESP32-001",
            other: { timestamp: new Date().toISOString() }, // 🔹 Renamed `other` to `otherData` for clarity
        };

        sendMessage(payload);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* 🔹 Image Display */}
            <View style={styles.imageContainer}>
                <ImageViewer
                    imgSource={PlaceholderImage}
                    selectedImage={image}
                />
            </View>

            {/* 🔹 Choose Image Button */}
            <View style={styles.footerContainer}>
                <Button
                    label="Choose a Photo"
                    theme="primary"
                    onPress={pickImageAsync}
                    disable={false}
                />
            </View>

            {/* 🔹 Action Buttons */}
            <View style={styles.buttonRowContainer}>
                <Button label="Send" onPress={onDone} disable={false} />
                <Button label="Reset" onPress={resetImage} disable={false} />
            </View>
        </SafeAreaView>
    );
}

// 🔹 Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        paddingVertical: 20,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    footerContainer: {
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        width: "80%", // Ensures buttons are well spaced
    },
});
