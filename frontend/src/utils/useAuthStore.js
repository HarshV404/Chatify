import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = "http://localhost:5001"

export const useAuthStore = create((set, get) =>({
    authUser: null,
    isSignUp: false,
    isLogin: false,
    isUpdatingImg: false,
    onlineUsers: [],
    isCheckingAuth: true,
    socket: null,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("auth/check");

            set({ authUser: res.data });
            get().connectSocket()
        } catch (error) {
            console.log("Error in checkAuth: ", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set ({ isSignUp: true });
        try {
            const res = await axiosInstance.post("auth/signup", data);
            toast.success("Account created successfully");
            set({ authUser: res.data });

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSignUp: false });
        }
    },

    login: async(data) => {
        set({ isLogin: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in Successfully");
            get().connectSocket()

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLogin: false });
        }
    },

    logout: async() => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("logged out successfully");
            get().disconnectSocket()

        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async(data) => {
        set({ isUpdatingImg: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Profile Image Updated successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingImg: false });
        }
    },

    connectSocket: () => {
        const { authUser } = get()
        if(!authUser || get().socket?.connected) return;
         
        const socket = io(BASE_URL, {
            query: {
                userId: authUser._id,
            },
        });
        socket.connect();

        set({ socket: socket}); 

        socket.on("getOnlineUsers", (users) => {
            set({ onlineUsers: users });
        });
    },
    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect();
    },
}));