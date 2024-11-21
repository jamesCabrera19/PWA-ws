import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
//
import Button from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";
import SensorScreen from "@/app/components/SensorScreen";

const PlaceholderImage = require("@/assets/images/dial.jpg");

export default function HomeScreen() {
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
            console.log("no image selected");
        }
    };
    const resetImage = () => {
        setImage(PlaceholderImage);
    };
    return (
        <View style={styles.container}>
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
        </View>
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
