import React, {useEffect, useRef, useState} from "react";


export default function Main(){
    const [userChat, setUserChat] = useState('');
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    async function aiFetch(text){
        const res = await fetch("https://openai-worker-new.p-ai-translation.workers.dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text })
        });
        const { reply } = await res.json();
        return reply;
    }
    // async function aiFetch(text) {
    //     const client = new OpenAI({
    //         apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    //         dangerouslyAllowBrowser:true
    //     });
    // //
    //     const response = await client.chat.completions.create({
    //         model: "gpt-4",
    //         messages: [
    //             {
    //                 role: "system",
    //                 content: "you are a multi lingual translator"
    //             },
    //             {
    //                 role: "user",
    //                 content: text
    //             }
    //         ]
    //
    //     })
    //     return (response.choices[0].message.content)
    // }
    async function handleSubmit(e){
        e.preventDefault();
        if (!userChat.trim()) return;
        setMessages(msgs => [...msgs, { from: "You", text: userChat }]);
        setUserChat("");
        const aiText = await aiFetch(userChat);
        setMessages(msgs => [...msgs, { from: "AI", text: aiText }]);
    }
    return(
        <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
            <div className="bg-white p-6 rounded-lg border border-gray-200 w-[500px] h-[700px] shadow-lg flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                    <img
                        src="/bird_pic.png"
                        className="w-20 h-20 rounded-full"
                        alt="logo"
                    />
                    <h2 className="font-semibold text-lg">Translation Chatbot</h2>
                    <p className="text-sm text-gray-500">Powered by GPT-4</p>
                </div>

                <div className="flex-1 pr-4 overflow-y-auto space-y-4 text-sm text-gray-700">
                    {messages.map((m, i) => (
                        <div key={i} className="flex gap-3">
      <span className="w-8 h-8 rounded-full bg-gray-100 border p-1 flex items-center justify-center">
        {m.from === "AI" ? "🤖" : "🧑"}
      </span>
                            <p>
                                <strong>{m.from}:</strong> {m.text}
                            </p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4">
                    <input
                        ref={inputRef}
                        value={userChat}
                        onChange={e => setUserChat(e.target.value)}
                        type="text"
                        placeholder="Type the text you would like translated!"
                        className="flex-grow h-10 rounded-md border px-3 text-sm focus:ring-2 focus:ring-gray-400"
                    />
                    <button type="submit" className="bg-black text-white h-10 px-4 rounded-md hover:bg-gray-800">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}