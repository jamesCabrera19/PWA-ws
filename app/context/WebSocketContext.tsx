import React, {
    createContext,
    useEffect,
    useState,
    useRef,
    ReactNode,
} from 'react';
import { Text, TextInput, Button, View, SafeAreaView } from 'react-native';

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

interface lastReading {
    value: number;
    timeStamp: string;
}
interface ServerMessage {
    id: string;
    deviceType: string;
    deviceName: string;
    ipAddress: string;
    port: number;
    location: string;
    status: string;
    wallpaper: string;
    lastReading: lastReading;
}

export const WebSocketContext = createContext<WebSocketContextValue | null>(
    null
);

export const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
    const [serverState, setServerState] = useState<string>('Loading...');
    const [messageText, setMessageText] = useState<string>('');
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [inputFieldEmpty, setInputFieldEmpty] = useState<boolean>(true);

    // const [serverMessages, setServerMessages] = useState<string[]>([]); // messages from server
    const [serverMessages, setServerMessages] = useState<ServerMessage[]>([]); // messages from server

    const ws = useRef<WebSocket>(
        new WebSocket('ws://192.168.1.111:80')
    ).current; // Replace with your server address

    useEffect(() => {
        const serverMessagesList: string[] = [];

        ws.onopen = () => {
            setServerState('Connected to the server');
            setDisableButton(false);
        };

        ws.onclose = (e: Event) => {
            setServerState('Disconnected. Check internet or server.');
            setDisableButton(true);
        };

        ws.onerror = (e: Event) => {
            const errorEvent = e as WebSocketErrorEvent;
            setServerState(errorEvent.message || 'Something went wrong');
        };

        ////////////////
        ws.onmessage = (e: MessageEvent) => {
            //
            try {
                const data = JSON.parse(e.data);
                setServerMessages(data);
            } catch (error) {
                console.log(`Something went wrong ${error}`);
            }
            //
            //
            //
            // serverMessagesList.push(e.data as string);
            // setServerMessages([...serverMessagesList]);
        };
    }, []);

    const submitMessage = () => {
        ws.send(messageText);
        setMessageText('');
        setInputFieldEmpty(true);
    };
    const requestData = async () => {
        const code = 'sent_data';
        console.log('request sent!');
    };

    return (
        <WebSocketContext.Provider value={{ serverMessages, serverState, ws }}>
            <SafeAreaView>
                <View>
                    <View
                        style={{
                            backgroundColor: '#ffff',
                        }}
                    >
                        <Text>WS STATUS: {serverState}</Text>
                    </View>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            padding: 5,
                        }}
                        placeholder={'Add Message'}
                        onChangeText={(text: string) => {
                            setMessageText(text);
                            setInputFieldEmpty(text.length > 0 ? false : true);
                        }}
                        value={messageText}
                    />
                    <Button
                        onPress={requestData}
                        title={'Request API sensor data'}
                        // disabled={disableButton || inputFieldEmpty}
                    />
                    <Button
                        onPress={submitMessage}
                        title={'Submit'}
                        disabled={disableButton || inputFieldEmpty}
                    />
                </View>
            </SafeAreaView>

            {children}
        </WebSocketContext.Provider>
    );
};
