import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./home.css";

const apiKey = ""; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

function formatText(text) {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*\s(.*?)(?=\n|$)/g, "<li>$1</li>");
  if (text.includes("<li>")) {
    text = "<ul>" + text + "</ul>";
  }
  text = text.replace(/\n\n/g, "<p></p>");
  text = text.replace(/\n/g, "<br>");
  return text;
}

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();
      const formattedText = formatText(text);
      setMessages((prev) => [...prev, { role: "ai", content: formattedText }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, there was an error." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-main">
      <div className="header">
        <div>Gemini AI</div>
        <div>Create a Gem with Advanced</div>
      </div>
      <div className="main-content">
        <div className="main-content-chat">
          <div className="chat-box">
            <div className="chat-box-message">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.role === "user" ? "user-box" : "ai-box"}
                >
                  <h3>{message.role === "user" ? "You" : "AI"}</h3>
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                </div>
              ))}
              {isLoading && (
                <div className="ai-box">
                  <h3>AI Bot</h3>
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            type="text"
            placeholder="Enter Your Prompt"
          />
          <input type="button" value="Send" onClick={handleSend} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
