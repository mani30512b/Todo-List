**Todo App (React + useReducer + useContext)**
Live-Link: https://mani30512b.github.io/Todo-List/

## Overview

The **Todo App** is a simple task management application built using **React.js**. It leverages the `useReducer` hook for efficient state management and the **Context API (****`useContext`****)** for global state sharing. The app allows users to add, mark as completed, and delete todos.

---

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Uses `useReducer` for state management
- Implements **Context API (****`useContext`****)** to avoid prop drilling
- Fully responsive UI using **CSS**

---

## Technologies Used

- **React.js** – UI development
- **useReducer Hook** – State management
- **useContext Hook** – Access global state
- **Context API** – Global state management
- **CSS (Flexbox & Grid)** – Styling and layout
- **JSX** – UI structure

---

## Key Concepts

### 1. React Functional Components

- The entire application is built using **functional components** to keep the code modular and reusable.

### 2. useReducer Hook

- Implements the **Reducer Pattern**, making the app scalable and efficient for handling complex state changes.
- The reducer function manages different actions:
  - `Add-To-Do`
  - `Toggle-To-Do`
  - `Delete-To-Do`

### 3. Context API & useContext Hook

- **Context API** is used to create a global store for todos.
- **useContext Hook** allows components to access the `todos` and `dispatch` functions without prop drilling.

### 4. Event Handling

- `onSubmit` to handle form submission
- `onChange` to update the state of input fields

---

## Project Structure

```
📂 todo-app
│── 📂 src
│   │── 📂 components
│   │   │── 📄 Todo.js          # Single Todo Item
│   │   │── 📄 TodoForm.js      # Form to add todos
│   │   │── 📄 Todos.js         # Renders Todo list
│   │── 📄 App.js               # Main Component with useReducer & Context API
│   │── 📄 index.js             # ReactDOM render
│   │── 📄 index.css            # Styling
│── 📄 package.json             # Dependencies
│── 📄 README.md                # Project Overview
```

---

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the Application

```
npm start
```

### 4. Build for Production

```
npm run build
```

---

## How It Works

1. Enter a task in the input field and press **"Add"**.
2. Click the **checkbox** to mark the task as completed.
3. Click **"Remove"** to delete the task from the list.

---

## Future Enhancements

- Add **Local Storage** to persist todos
- Implement **Dark Mode** for better UX
- Introduce **Filters** (All, Completed, Pending)
- Improve UI with animations and better styling

---

## License

This project is **MIT licensed**, meaning it is open-source and can be modified freely.

---

## Author

**Manish Ahirwar**

- 📧 Email: [your-email@example.com](mailto\:your-email@example.com)
- 🔗 [LinkedIn Profile](https://linkedin.com/in/your-profile)

---

**Happy Coding! 🚀**

