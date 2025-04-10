import { useEffect } from "react";
import { useChatStore } from "../utils/useChatStore";
import MessagesInput from "./MessagesInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../utils/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToNewMessages, unsubscribeToNewMessages } = useChatStore()
  const { authUser } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id)

    subscribeToNewMessages();

    return () => unsubscribeToNewMessages();
  }, [selectedUser._id, getMessages, subscribeToNewMessages, unsubscribeToNewMessages]);

  if (isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <MessageSkeleton />
      <MessagesInput />
    </div>
  )

  return (
    <div className="flex-1 flex flex-col overflow-auto">

      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.sender === authUser._id ? 'chat-end' : 'chat-start'}`}>
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img 
                  src={message.sendrId === authUser._id ? authUser.profilePic || "/avatar.png": selectedUser.profilePic || "/avatar.png"} 
                  alt="profile pic" />

                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              <div className="chat-bubble flex flex-col gap-2 bg-base-300 text-base-content">
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                  />
                )}
                {message.text && (
                  <p className="text-sm">{message.text}</p>
                )}
              </div>
            {/* Message content goes here */}
          </div>
        ))}
      </div>

      <MessagesInput />
    </div>

  )
}

export default ChatContainer