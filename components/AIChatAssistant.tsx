
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'Protocolo Flash iniciado. Sou o assistente de performance. Em que posso ajudar seu motor hoje?'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Você é o "Flash IA", um assistente de elite do lava-car "Flash LavaCar".
        Seu tom é focado, técnico, dinâmico e direto ao ponto, como uma equipe de pit stop.
        Use termos como "Protocolo", "Performance", "Resultados", "Aerodinâmica" se apropriado.
        Nossos serviços: Lavagem Stealth (R$60+), Full Detail (R$110+), Graphene (R$180+), Deep Interior (R$280+).
        Destaque nossa velocidade recorde e proteção superior.
        Pergunta: "${userText}"`,
      });

      const botResponse = response.text || 'Problema técnico no processamento. Repita o comando.';
      setMessages(prev => [...prev, {role: 'bot', text: botResponse}]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {role: 'bot', text: 'Conexão interrompida. Use o WhatsApp para agendamento direto.'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Launcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-turbo-orange text-white rounded-none skew-x-[-12deg] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all glow-orange"
      >
        {isOpen ? <X className="w-8 h-8 skew-x-[12deg]" /> : <Zap className="w-8 h-8 skew-x-[12deg] fill-current" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-zinc-950 border border-turbo-orange/30 rounded-none shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-zinc-900 p-6 flex items-center justify-between border-b border-turbo-orange/20">
            <div className="flex items-center gap-3">
              <div className="bg-turbo-orange p-2 rounded-none skew-x-[-12deg]">
                <Bot className="text-white w-5 h-5 skew-x-[12deg]" />
              </div>
              <div>
                <h3 className="text-white font-black uppercase text-sm italic tracking-widest">FLASH COMMAND</h3>
                <p className="text-turbo-orange text-[10px] font-black uppercase">IA SYSTEM v2.0</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-grid-pattern"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-none text-sm font-bold tracking-tight ${m.role === 'user' ? 'bg-turbo-orange text-white skew-x-[-6deg]' : 'bg-zinc-900 text-zinc-300 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 border border-white/5 text-turbo-orange flex gap-1 items-center italic text-xs font-black">
                  PROCESSANDO...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-zinc-900 border-t border-turbo-orange/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="DIGITE SEU COMANDO..."
                className="w-full bg-zinc-950 text-white pl-4 pr-12 py-4 rounded-none border border-white/10 focus:outline-none focus:border-turbo-orange/50 text-xs font-bold tracking-widest uppercase"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 text-turbo-orange hover:text-white transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;
