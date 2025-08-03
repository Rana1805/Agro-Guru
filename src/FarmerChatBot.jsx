import { useState, useRef, useEffect } from 'react';
import { Send, Sprout, Sun, CloudRain, Tractor, MessageCircle } from 'lucide-react';

const FarmerChatbot = () => {
 const [messages, setMessages] = useState([
 {
 id: 1,
 text: "Hello! I'm FarmBot, your AI farming assistant. I can help you with crop advice, weather planning, livestock care, pest management, and general farming questions. What would you like to know today?",
 sender: 'bot',
 timestamp: new Date()
 }
 ]);
 const [inputMessage, setInputMessage] = useState('');
 const [isTyping, setIsTyping] = useState(false);
 const messagesEndRef = useRef(null);

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
 scrollToBottom();
 }, [messages]);

 // Sample farming knowledge base
 const farmingResponses = {
 'weather': "For weather planning, I recommend checking local forecasts 7-10 days ahead. Consider soil temperature, rainfall patterns, and frost dates for your planting schedule. Would you like specific advice for a particular crop?",
 'crop': "I can help with crop selection, planting schedules, and growth management. What specific crop are you working with? Common considerations include soil pH, water requirements, and growing season length.",
 'pest': "Integrated Pest Management (IPM) is key! This includes crop rotation, beneficial insects, proper spacing, and targeted treatments only when needed. What pest issues are you facing?",
 'soil': "Healthy soil is the foundation of good farming. Regular soil testing, organic matter addition, proper pH levels (usually 6.0-7.0), and avoiding compaction are crucial. Have you tested your soil recently?",
 'livestock': "Livestock care involves proper nutrition, clean water, adequate shelter, and regular health monitoring. What type of livestock do you raise? I can provide specific guidance.",
 'irrigation': "Efficient irrigation saves water and improves yields. Consider drip irrigation, soil moisture monitoring, and watering during cooler parts of the day. What's your current irrigation setup?",
 'organic': "Organic farming focuses on soil health, biodiversity, and natural pest control. Key practices include composting, cover crops, crop rotation, and avoiding synthetic chemicals. Are you transitioning to organic methods?",
 'harvest': "Proper harvest timing maximizes quality and yield. Look for visual cues, test moisture content, and consider market timing. What crop are you planning to harvest?"
 };

 const quickSuggestions = [
 { icon: <Sun className="w-4 h-4" />, text: "Weather planning", key: 'weather' },
 { icon: <Sprout className="w-4 h-4" />, text: "Crop advice", key: 'crop' },
 { icon: <CloudRain className="w-4 h-4" />, text: "Irrigation help", key: 'irrigation' },
 { icon: <Tractor className="w-4 h-4" />, text: "Equipment tips", key: 'equipment' }
 ];

 const generateBotResponse = (userMessage) => {
 const message = userMessage.toLowerCase();

 // Check for keywords and provide relevant responses
 for (const [key, response] of Object.entries(farmingResponses)) {
 if (message.includes(key)) {
 return response;
 }
 }

 // Farming-specific responses for common questions
 if (message.includes('plant') || message.includes('seed')) {
 return "Planting success depends on soil temperature, moisture, and timing. Generally, plant when soil temperature is consistently above 50°F for cool-season crops, and 60°F+ for warm-season crops. What are you planning to plant?";
 }

 if (message.includes('fertilizer') || message.includes('nutrient')) {
 return "Fertilizer needs vary by crop and soil conditions. A soil test is the best starting point. NPK ratios depend on your crop - leafy greens need more nitrogen, while fruiting plants need phosphorus and potassium. Have you done a recent soil test?";
 }

 if (message.includes('disease') || message.includes('fungus')) {
 return "Plant diseases often thrive in humid conditions with poor air circulation. Prevention includes proper spacing, crop rotation, resistant varieties, and avoiding overhead watering. Can you describe the symptoms you're seeing?";
 }

 if (message.includes('market') || message.includes('sell')) {
 return "Marketing strategies include direct sales (farmers markets, CSA), wholesale to restaurants/stores, and online platforms. Quality, consistency, and building relationships with buyers are key. What products are you looking to market?";
 }

 // Default responses for general farming topics
 const defaultResponses = [
 "That's an interesting farming question! Could you provide more details so I can give you specific advice?",
 "I'd be happy to help with that farming topic. Can you tell me more about your specific situation or location?",
 "Great question! Farming practices can vary by region and crop. What's your growing zone and what crops are you working with?",
 "I can definitely assist with that. Could you share more context about your farm operation so I can provide tailored advice?"
 ];

 return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
 };

 const handleSendMessage = () => {
 if (!inputMessage.trim()) return;

 const userMessage = {
 id: messages.length + 1,
 text: inputMessage,
 sender: 'user',
 timestamp: new Date()
 };

 setMessages(prev => [...prev, userMessage]);
 setInputMessage('');
 setIsTyping(true);

 // Simulate bot thinking time
 setTimeout(() => {
 const botResponse = {
 id: messages.length + 2,
 text: generateBotResponse(inputMessage),
 sender: 'bot',
 timestamp: new Date()
 };

 setMessages(prev => [...prev, botResponse]);
 setIsTyping(false);
 }, 800 + Math.random() * 1200);
 };

 const handleQuickSuggestion = (key) => {
 const response = farmingResponses[key] || "I'd be happy to help with that topic! Can you provide more specific details?";

 const botMessage = {
 id: messages.length + 1,
 text: response,
 sender: 'bot',
 timestamp: new Date()
 };

 setMessages(prev => [...prev, botMessage]);
 };

 const formatTime = (date) => {
 return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 };

 return (
 <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 to-blue-50">
 {/* Header */}
 <div className="bg-green-600 text-white p-4 shadow-lg">
 <div className="flex items-center gap-3">
 <div className="bg-green-500 p-2 rounded-full">
 <Sprout className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-xl font-bold">FarmBot AI Assistant</h1>
 <p className="text-green-100 text-sm">Your intelligent farming companion</p>
 </div>
 </div>
 </div>

 {/* Quick Suggestions */}
 <div className="bg-white border-b p-4">
 <p className="text-sm text-gray-600 mb-2">Quick help with:</p>
 <div className="flex gap-2 flex-wrap">
 {quickSuggestions.map((suggestion, index) => (
 <button
 key={index}
 onClick={() => handleQuickSuggestion(suggestion.key)}
 className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-2 rounded-full text-sm transition-colors"
 >
 {suggestion.icon}
 {suggestion.text}
 </button>
 ))}
 </div>
 </div>

 {/* Messages */}
 <div className="flex-1 overflow-y-auto p-4 space-y-4">
 {messages.map((message) => (
 <div
 key={message.id}
 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
 >
 <div
 className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
 message.sender === 'user'
 ? 'bg-blue-600 text-white'
 : 'bg-white text-gray-800 shadow-md border'
 }`}
 >
 {message.sender === 'bot' && (
 <div className="flex items-center gap-2 mb-1">
 <MessageCircle className="w-4 h-4 text-green-600" />
 <span className="text-xs font-medium text-green-600">FarmBot</span>
 </div>
 )}
 <p className="text-sm leading-relaxed">{message.text}</p>
 <p className={`text-xs mt-2 ${
 message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
 }`}>
 {formatTime(message.timestamp)}
 </p>
 </div>
 </div>
 ))}

 {isTyping && (
 <div className="flex justify-start">
 <div className="bg-white text-gray-800 shadow-md border max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
 <div className="flex items-center gap-2 mb-1">
 <MessageCircle className="w-4 h-4 text-green-600" />
 <span className="text-xs font-medium text-green-600">FarmBot</span>
 </div>
 <div className="flex space-x-1">
 <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
 <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
 <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
 </div>
 </div>
 </div>
 )}
 <div ref={messagesEndRef} />
 </div>

 {/* Input */}
 <div className="bg-white border-t p-4">
 <div className="flex gap-2">
 <input
 type="text"
 value={inputMessage}
 onChange={(e) => setInputMessage(e.target.value)}
 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
 placeholder="Ask about crops, weather, livestock, or any farming question..."
 className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
 />
 <button
 onClick={handleSendMessage}
 disabled={!inputMessage.trim()}
 className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
 >
 <Send className="w-5 h-5" />
 </button>
 </div>
 </div>
 </div>
 );
};

export default FarmerChatbot;