import { View, StyleSheet, SafeAreaView } from "react-native";

import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/dial.jpg");

export default function SensorScreen() {
    const [image, setImage] = useState<string | undefined>(undefined);

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
        }
    };
    const resetImage = () => {
        setImage(PlaceholderImage);
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
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    footerContainer: {
        flex: 1 / 2,
        alignItems: "center",
    },
});
