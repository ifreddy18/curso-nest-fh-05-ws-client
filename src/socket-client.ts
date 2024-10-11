import { Manager } from "socket.io-client";

const url = "http://localhost:3000/socket.io/socket.io.js";

export const connectToServer = () => {
	const manager = new Manager(url);
	const socket = manager.socket("/");
};
