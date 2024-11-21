import React, {
    createContext,
    useEffect,
    useState,
    useRef,
    ReactNode,
} from "react";
import { Text, TextInput, Button, View } from "react-native";

// ws context
//
type WebSocketProviderProps = {
    children: ReactNode;
};
type WebSocketContextValue = {
    serverMessages: string[];
    serverState: string;
    ws: WebSocket;
};

export const WebSocketContext = createContext<WebSocketContextValue | null>(
    null
);

export const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
    const [serverState, setServerState] = useState<string>("Loading...");
    const [messageText, setMessageText] = useState<string>("");
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [inputFieldEmpty, setInputFieldEmpty] = useState<boolean>(true);
    const [serverMessages, setServerMessages] = useState<string[]>([]);
    const ws = useRef<WebSocket>(
        new WebSocket("ws://192.168.1.111:80")
    ).current; // Replace with your server address

    useEffect(() => {
        const serverMessagesList: string[] = [];

        ws.onopen = () => {
            setServerState("Connected to the server");
            setDisableButton(false);
        };

        ws.onclose = (e: Event) => {
            setServerState("Disconnected. Check internet or server.");
            setDisableButton(true);
        };

        ws.onerror = (e: Event) => {
            const errorEvent = e as WebSocketErrorEvent;
            setServerState(errorEvent.message || "Something went wrong");
        };

        ws.onmessage = (e: MessageEvent) => {
            serverMessagesList.push(e.data as string);
            setServerMessages([...serverMessagesList]);
        };
    }, []);

    const submitMessage = () => {
        ws.send(messageText);
        setMessageText("");
        setInputFieldEmpty(true);
    };
    const testDevices = () => {
        console.log("testDevices function");
    };

    return (
        <WebSocketContext.Provider value={{ serverMessages, serverState, ws }}>
            <View>
                <Text>serverState: {serverState}</Text>
            </View>

            <View>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: "black",
                        padding: 5,
                    }}
                    placeholder={"Add Message"}
                    onChangeText={(text: string) => {
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

            {children}
        </WebSocketContext.Provider>
    );
};
