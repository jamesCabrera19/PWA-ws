import { useContext } from "react";
import { WebSocketContext } from "@/app/components/WebSocket";

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }
    const { ws, serverMessages, serverState } = context;

    const sendMessage = (message: string) => {
        if (ws && ws.readyState === 1) {
            ws.send(message || "hello from the PC");
        } else {
            console.warn("WebSocket is not connected.");
        }
        console.log("Message sent!");
    };

    return { ws, serverMessages, serverState, sendMessage };
};
