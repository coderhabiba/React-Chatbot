import { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const handleFormSubmit = e => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    // update chat history with the user message
    const updatedHistory = [
      ...chatHistory,
      { role: 'user', text: userMessage },
    ];
    setChatHistory(updatedHistory);

    // to show the "Thinking..." message from bot after user sends a message
    setTimeout(() => {
      setChatHistory(history => [
        ...history,
        { role: 'model', text: 'Thinking...' },
      ]);

      // generate response from bot based on the updated chat history
      generateBotResponse(updatedHistory);
    }, 600);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      className="chat-form focus-within:outline-[#6d4fc2] flex items-center bg-white outline outline-gray-300 rounded-4xl w-full pr-2 shadow-sm"
    >
      <input
        ref={inputRef}
        type="text"
        name="message"
        placeholder="Message..."
        className="message-input border-0 outline-0 flex-1 text-[15px] h-12 px-4 rounded-full w-full bg-white focus:bg-white autofill:shadow-[0_0_0_30px_white_inset]"
        required
      />
      <button className="material-symbols-rounded h-9 w-9 bg-[#6d4fc2] text-white rounded-[50%] flex-shink-0 border-0 outline-0 text-2xl cursor-pointerhover:bg-[#593bab] transition-all duration-[0.2s] ease-in-out">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
