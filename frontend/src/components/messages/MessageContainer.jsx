import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="text-gray-900 font-bold">John doe</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-red-200 font-semibold flex flex-col items-center gap-2">
                <p>Welkom 👋 John Doe</p>
                <p>Selecteer een chat om te kletsen.</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
}