import { 
    SOCKET_DISCONNECT,
    SOCKET_CONNECT_REQUEST,
    SOCKET_CONNECT_SUCCESS,
    SOCKET_CONNECT_FAILED,
    UPLOAD_THUMBNAIL_REQUEST,
    UPLOAD_THUMBNAIL_SUCCESS,
    UPLOAD_THUMBNAIL_FAIL
} from "../constants/SocketConstant";

// Socket Reducer
export const socket_reducer = (state = { socket: null, connecting: false, error: null }, action) => {
    switch (action.type) {
        case SOCKET_CONNECT_REQUEST:
            return { ...state, connecting: true };

        case SOCKET_CONNECT_SUCCESS:
            return { ...state, socket: action.payload, connecting: false, error: null };

        case SOCKET_CONNECT_FAILED:
            return { ...state, connecting: false, error: action.payload };

        case SOCKET_DISCONNECT:
            state.socket && state.socket.close();
            return { ...state, socket: null };

        default:
            return state;
    }
};
// THUMBNAIL Reducer
export const thumbnail_reducer = (state = { file: null, connecting: false, error: null }, action) => {
    switch (action.type) {
        case UPLOAD_THUMBNAIL_REQUEST:
            return { ...state, connecting: true };

        case UPLOAD_THUMBNAIL_SUCCESS:
            return { ...state, file: action.payload, connecting: false, error: null };

        case UPLOAD_THUMBNAIL_FAIL:
            return { ...state, connecting: false, error: action.payload };

        default:
            return state;
    }
};
