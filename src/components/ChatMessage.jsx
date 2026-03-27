import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === 'model';

  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`flex items-end gap-3 max-w-[85%] ${isBot ? '' : 'flex-row-reverse'}`}
      >
        {/* if the will be bot then show icon*/}
        <div className="bot-message">{isBot && <ChatbotIcon />}</div>

        <p
          className={`message-text text-[15px] py-3 px-4 whitespace-pre-line 
          ${
            isBot
              ? 'bg-[#f6f2ff] text-black rounded-tl-[13px] rounded-tr-[13px] rounded-br-[13px] rounded-bl-[3px]'
              : 'bg-[#6d4fc2] text-white rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[13px] rounded-br-[3px]'
          }`}
        >
          {chat.text}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
