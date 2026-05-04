import { useState } from 'react';

export default function OnlineChat() {
  const [showOptions, setShowOptions] = useState(false);

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: '💬',
      link: 'https://wa.me/8615018789534',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Email',
      icon: '✉️',
      link: 'mailto:fuyujewels@outlook.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Contact Options */}
      {showOptions && (
        <div className="mb-4 space-y-2 animate-fadeIn">
          {contactOptions.map((option) => (
            <a
              key={option.name}
              href={option.link}
              target={option.name === 'WhatsApp' ? '_blank' : undefined}
              rel={option.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className={`${option.color} text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 relative z-10`}
            >
              <span className="text-xl">{option.icon}</span>
              <span className="font-semibold">{option.name}</span>
            </a>
          ))}
        </div>
      )}

      {/* Button Container with Pulse */}
      <div className="relative">
        {/* Pulse Animation - Behind Button */}
        {!showOptions && (
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-[#143c69] animate-ping opacity-75 pointer-events-none"></div>
        )}

        {/* Main Chat Button - On Top */}
        <button
          onClick={() => {
            console.log('Button clicked!');
            setShowOptions(!showOptions);
          }}
          className="relative z-10 bg-[#143c69] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-[#0f2f52] transition-all hover:scale-110 cursor-pointer"
          aria-label="Contact Us"
          type="button"
        >
          {showOptions ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">💬</span>
          )}
        </button>
      </div>
    </div>
  );
}
