import { io } from "socket.io-client";
import { getToken } from "./configGQL/auth";

const SOCKET_URL = "https://fluffy-server-production.up.railway.app";

const token = getToken();

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
});
