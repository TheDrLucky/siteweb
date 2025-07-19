import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { mockData } from '../data/mock';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Bonjour 👋 Je suis Léna, votre assistante Godeloup Domotique. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ]);

  const lenaAgent = mockData.limova.agents.find(agent => agent.id === 'lena');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    // Simulate bot response
    const botResponse = {
      id: messages.length + 2,
      type: 'bot',
      content: 'Merci pour votre question ! Je vous prépare une réponse personnalisée. Pour une réponse plus précise, n\'hésitez pas à me donner plus de détails sur votre projet.',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setMessage('');
  };

  const quickActions = [
    'Demander un devis',
    'Prendre rendez-vous', 
    'Support technique',
    'Nos services'
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        {/* Status indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isMinimized ? 'w-80' : 'w-80 sm:w-96'}`}>
      <Card className={`shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'} overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">L</span>
            </div>
            <div>
              <h4 className="font-medium text-sm">{lenaAgent?.name}</h4>
              <p className="text-xs text-blue-100">{lenaAgent?.status}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-blue-700 w-8 h-8"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-blue-700 w-8 h-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t bg-gray-50">
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    className="text-xs h-6 px-2"
                    onClick={() => setMessage(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button type="submit" size="icon" className="w-10 h-10">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;