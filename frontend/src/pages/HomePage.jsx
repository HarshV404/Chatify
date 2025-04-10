import ChatContainer from '../components/ChatContainer.jsx';
import NoChatSelected from '../components/NoChatSelected.jsx';
import SideBar from '../components/SideBar.jsx';
import { useChatStore } from  '../utils/useChatStore.js';

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center px-4 pt-20">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <SideBar />

            { !selectedUser ? <NoChatSelected />: <ChatContainer /> }

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage