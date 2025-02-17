import { useState, useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";
import { useWebSocket } from "@/app/hooks/useWebSocket";

const PlaceholderImage = require("@/assets/images/dial.jpg");

export default function HomeScreen() {
    const [image, setImage] = useState<string | undefined>(undefined);
    // const [message, SetMessage] = useState<string>("");
    const { ws, serverMessages, serverState, sendMessage } = useWebSocket();

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            alert("No image selected");
            console.log("no image selected");
        }
    };

    const resetImage = () => {
        setImage(PlaceholderImage);
    };

    const onDone = () => {
        // sendMessage("Hello this is a another test");

        // console.log(ws);// server state
        // console.log(serverMessages);
        console.log(serverState);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    imgSource={PlaceholderImage}
                    selectedImage={image}
                />
            </View>

            <View style={styles.footerContainer}>
                <Button
                    label="Choose a photo"
                    theme="primary"
                    onPress={pickImageAsync}
                />
            </View>

            <View style={styles.buttonRowContainer}>
                <Button label="Done" onPress={onDone} />
                <Button label="Reset" onPress={resetImage} />
            </View>
        </SafeAreaView>
    );
}

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
