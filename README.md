# 🚀 Gemini AI Chat App (React)

A modern **AI Chat Application** built with React that integrates Google's **Gemini AI (Generative AI)** to provide real-time responses in a chat interface.

---

## 📌 Features

- 💬 Interactive chat UI (User & AI messages)
- ⚡ Real-time AI responses using Gemini API
- 🧠 Markdown-style text formatting (bold, lists, paragraphs)
- 📱 Responsive layout with sidebar navigation
- 🎛️ Collapsible sidebar with menu toggle
- ⏳ Loading state while AI generates responses

---

## 🏗️ Project Structure

```
src/
│── components/
│   ├── sidebar/
│   │   ├── Sidebar.jsx
│   │   ├── sidebar.css
│   │
│   ├── main/
│       ├── Home.jsx
│       ├── home.css
│
│── App.jsx
│── App.css
│── main.jsx
│── index.css
```

---

## ⚙️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS3
- Google Generative AI (Gemini API)
- React Icons

---

## 🔑 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gemini-chat-app.git
cd gemini-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Gemini API Key

Open:

```
src/components/main/Home.jsx
```

Replace:

```js
const apiKey = "";
```

with your actual API key.

---

### 4. Run the project

```bash
npm run dev
```

---

## 🧩 Core Components

### 🏠 App Component
- Combines Sidebar and Chat UI

```jsx
<Sidebar />
<Home />
```

---

### 💬 Home Component (Chat Engine)

Handles:
- User input
- API calls
- Message state
- Rendering chat bubbles

Features:
- Uses `useState`
- Sends prompts to Gemini API
- Formats responses into HTML

---

### 📂 Sidebar Component

- Toggleable menu
- New chat button
- Recent chats section
- Footer navigation (Settings, Help, etc.)

---

## 🎨 UI Overview

- Dark theme UI
- Chat bubbles:
  - 🟢 User → right side
  - ⚫ AI → left side  
- Scrollable chat container
- Input box with Enter + Button support

---

## ⚠️ Important Notes

- API key is hardcoded → use environment variables in production
- Uses `dangerouslySetInnerHTML` → sanitize if needed
- Recent chats are static (not dynamic yet)

---

## 🔮 Future Improvements

- Store chat history
- Add authentication
- Improve markdown rendering
- Add streaming responses
- Mobile optimization
- Deploy (Vercel / Netlify)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Author

Developed by **Mukand-Mapara**
