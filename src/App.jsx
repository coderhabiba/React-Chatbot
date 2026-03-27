import ChatbotIcon from './components/ChatbotIcon';

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="chatbot-popup bg-white w-[420px] rounded-2xl shadow-xl overflow-hidden">
        {/* chatbot header */}
        <header className="chat-header flex bg-[#6d4fc2] py-4 px-6 items-center justify-between">
          <div className="header-info flex gap-2.5 items-center">
            <ChatbotIcon />
            <h2 className="logo-text font-bold text-xl">Chatbot</h2>
          </div>
          <button className="btn btn-primary material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </header>

        {/* chatbot body */}
        <main className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hello there 👋 <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">I need help with my order.</p>
          </div>
        </main>

        {/* chatbot footer */}
        <footer className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="message-input input"
              required
            />
            <button className="btn btn-primary material-symbols-rounded">
              keyboard_arrow_up
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default App;