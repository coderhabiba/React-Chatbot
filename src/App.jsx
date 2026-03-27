import ChatbotIcon from './components/ChatbotIcon';

const App = () => {
  return (
    <div className="container mx-auto">
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
        <main className="chat-body mb-20 pt-[25px] px-[22px] h-[460px] overflow-y-auto flex flex-col gap-5">
          <div className="message bot-message flex items-center gap-3">
            <ChatbotIcon />
            <p className="message-text wrap-break-word bg-[#f6f2ff] text-[15px] py-3 px-4 rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[3px] rounded-br-[13px]  max-w-[75%] whitespace-pre-line">
              Hello there 👋 <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message flex flex-col items-end">
            <p className="message-text wrap-break-word bg-[#6d4fc2] text-[15px] py-3 px-4 text-white rounded-tl-[13px] rounded-tr-[13px] rounded-br-[3px] rounded-bl-[13px] max-w-[75%] whitespace-pre-line">
              I need help with my order.
            </p>
          </div>
        </main>

        {/* chatbot footer */}
        <footer className="chat-footer absolute bottom-4 w-full py-4 px-6 bg-white">
          <form
            action="#"
            className="chat-form focus-within:outline-2 focus-within:outline-[#6d4fc2] flex items-center bg-white outline outline-gray-300 rounded-4xl w-full pr-2 shadow-sm"
          >
            <input
              type="text"
              placeholder="Message..."
              className="message-input border-0 outline-0 flex-1 text-[15px] h-12 px-4 rounded-full bg-transparent w-full"
              required
            />
            <button className="material-symbols-rounded h-9 w-9 bg-[#6d4fc2] text-white rounded-[50%] flex-shink-0 border-0 outline-0 text-2xl cursor-pointerhover:bg-[#593bab] transition-all duration-[0.2s] ease-in-out">
              arrow_upward
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default App;