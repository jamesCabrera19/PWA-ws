import React, { createContext, useEffect, useState, useRef } from "react";
import { Text, TextInput, Button, View } from "react-native";

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [serverState, setServerState] = useState("Loading...");
    const [messageText, setMessageText] = useState("");
    const [disableButton, setDisableButton] = useState(true);
    const [inputFieldEmpty, setInputFieldEmpty] = useState(true);
    const [serverMessages, setServerMessages] = useState([]);
    const ws = useRef(new WebSocket("ws://192.168.1.111:80")).current; // Replace with your server address

    useEffect(() => {
        const serverMessagesList = [];

        ws.onopen = () => {
            setServerState("Connected to the server");
            setDisableButton(false);
        };

        ws.onclose = (e) => {
            setServerState("Disconnected. Check internet or server.");
            setDisableButton(true);
        };

        ws.onerror = (e) => {
            setServerState(e.message);
        };

        ws.onmessage = (e) => {
            serverMessagesList.push(e.data);
            setServerMessages([...serverMessagesList]);
        };
    }, []);

    const submitMessage = () => {
        ws.send(messageText);
        setMessageText("");
        setInputFieldEmpty(true);
    };
    const testDevices = () => {
        console.log(sensors[0]);
    };

    return (
        <WebSocketContext.Provider value={{ serverMessages, serverState, ws }}>
            {children}
            <View>
                <Text>{serverState}</Text>
            </View>

            <View>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 5,
                    }}
                    placeholder={"Add Message"}
                    onChangeText={(text) => {
                        setMessageText(text);
                        setInputFieldEmpty(text.length > 0 ? false : true);
                    }}
                    value={messageText}
                />
                <Button
                    onPress={testDevices}
                    title={"Test Device"}
                    // disabled={disableButton || inputFieldEmpty}
                />
                <Button
                    onPress={submitMessage}
                    title={"Submit"}
                    disabled={disableButton || inputFieldEmpty}
                />
            </View>
        </WebSocketContext.Provider>
    );
};
