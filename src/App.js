import './App.css';
import React from 'react';

function App() {
    return (
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
                    <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-gray-100 border p-1 flex items-center justify-center">
              <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" height="20" width="20">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </span>
                        <p>
                            <strong>AI:</strong> Hi, how can I help you today?
                        </p>
                    </div>

                    <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-gray-100 border p-1 flex items-center justify-center">
              <svg stroke="none" fill="black" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
            </span>
                        <p>
                            <strong>You:</strong> fewafef
                        </p>
                    </div>
                </div>

                <form className="flex items-center gap-2 pt-4">
                    <input
                        type="text"
                        placeholder="Type your message"
                        defaultValue=""
                        className="flex-grow h-10 rounded-md border px-3 text-sm focus:ring-2 focus:ring-gray-400"
                    />
                    <button type="submit" className="bg-black text-white h-10 px-4 rounded-md hover:bg-gray-800">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
