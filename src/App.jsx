import { useEffect, useRef, useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();

  const generateBotResponse = async history => {
    // format the chat history to match the Gemini API request format
    const contents = history.map(({ role, text }) => ({
      role: role === 'model' ? 'model' : 'user',
      parts: [{ text }],
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents }),
    };

    try {
      // get the bot response from Gemini API
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions,
      );
      const data = await response.json();

      if (!response.ok) {
        console.log('API Error:', data);
        throw new Error(data.error.message || 'API Error');
      } 

      // get the bot response text from the API response and clean it up
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();

      // update the chat history by replacing 'Thinking...' with the actual bot response
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== 'Thinking...'),
        { role: 'model', text: apiResponseText },
      ]);
    } catch (error) {
      console.error('Error generating bot response:', error);
      // If there's an error, remove 'Thinking...' and show an error message
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== 'Thinking...'),
        {
          role: 'model',
          text: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    }
  };
  
  // auto scroll to the bottom of the chat body whenever chatHistory changes (i.e., a new message is added)
  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: 'smooth'});
  },[chatHistory])


  return (
    <div className="container mx-auto">
      {/* toggle button */}
      <button id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup relative bg-white w-[420px] rounded-2xl shadow-xl overflow-hidden">
        {/* chatbot header */}
        <header className="chat-header flex bg-[#6d4fc2] py-4 px-6 items-center justify-between">
          <div className="header-info flex gap-2.5 items-center">
            <ChatbotIcon />
            <h2 className="logo-text text-white font-semibold text-[22px]">
              Chatbot
            </h2>
          </div>
          <button className="material-symbols-rounded h-10 w-10 border-0 outline-0 text-3xl text-white bg-transparent pt-0.5 -mr-2.5 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#593bab] transition-all duration-[0.2s] ease-in-out">
            keyboard_arrow_down
          </button>
        </header>

        {/* chatbot body */}
        <main
          ref={chatBodyRef}
          className="chat-body mb-24 pt-[25px] px-[22px] h-[460px] overflow-y-auto flex flex-col gap-5"
        >
          <div className="message bot-message flex items-center gap-3">
            <ChatbotIcon />
            <p className="message-text wrap-break-word bg-[#f6f2ff] text-[15px] py-3 px-4 rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[3px] rounded-br-[13px]  max-w-[75%] whitespace-pre-line">
              Hello there 👋 <br /> How can I help you today?
            </p>
          </div>
          {/* render the chat history dynamically */}
          {chatHistory?.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </main>

        {/* chatbot footer */}
        <footer className="chat-footer absolute bottom-1 w-full py-4 px-6 bg-white">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </footer>
      </div>
    </div>
  );
};

export default App;