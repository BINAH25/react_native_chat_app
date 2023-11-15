import { 
    SOCKET_DISCONNECT,
    SOCKET_CONNECT_REQUEST,
    SOCKET_CONNECT_SUCCESS,
    SOCKET_CONNECT_FAILED
} from "../constants/SocketConstant";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Socket Connect Action
export const socketConnect = () => async (dispatch) => {
    try {
        dispatch({ type: SOCKET_CONNECT_REQUEST });

        const tokens = await AsyncStorage.getItem('token')
        console.log(tokens)       ;
        const socketUrl = `ws://127.0.0.1:8000/chat/?token=${tokens}`;
        console.log(socketUrl);

        const socket = new WebSocket(socketUrl);

        socket.onopen = () => {
            console.log('socket.onopen');
            dispatch({ type: SOCKET_CONNECT_SUCCESS, payload: socket });
        };

        socket.onmessage = () => {
            console.log('socket.onmessage');
            // You can dispatch additional actions here if needed
        };

        socket.onerror = (e) => {
            console.log('socket.onerror', e.message);
            dispatch({ type: SOCKET_CONNECT_FAILED, payload: e.message });
        };

        socket.onclose = () => {
            console.log('socket.onclose');
            // You can dispatch additional actions here if needed
        };

        // Save the socket to AsyncStorage for later use if needed
        await AsyncStorage.setItem('socket', JSON.stringify(socket));

    } catch (error) {
        dispatch({ type: SOCKET_CONNECT_FAILED, payload: error.message });
    }
};

// Socket Disconnect Action
export const socketDisconnect = () => {
    return { type: SOCKET_DISCONNECT };
};
