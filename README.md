# 🚀 Next.js Project — React vs Next.js in Practice

## 📖 Overview

This project is a modern web application developed as part of my advanced learning journey in front-end and full-stack web development.

It represents **my first real project using Next.js**, built with the goal of:
- understanding the difference between **React as a library** and **Next.js as a framework**
- exploring **Client Components** and **Server Components**
- integrating and consuming a **RESTful API**
- managing **loading states** and server response time to improve user experience

This project focuses on **architecture, performance, and real-world development practices** rather than just UI.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **React**
- **Next.js (App Router)**
- **RESTful API**
- **Git & GitHub**

---

## ⚛️ React vs Next.js — Key Differences

### React (Library)
- Focuses mainly on the **UI layer**
- Client-side rendering by default
- Requires additional tools for routing, data fetching, and optimization
- Full control, but more configuration is needed

### Next.js (Framework)
- Built on top of React
- Provides **file-based routing**
- Supports **Server-Side Rendering (SSR)** and **Static Generation**
- Introduces **Server Components** for better performance
- Handles performance, routing, and optimization out of the box

This project demonstrates how Next.js simplifies many tasks that require external libraries in a traditional React setup.

---

## 🧩 Client Components vs Server Components

### Server Components
- Executed on the server
- Ideal for data fetching and heavy logic
- Reduce JavaScript sent to the browser
- Improve performance and SEO

### Client Components
- Executed in the browser
- Used for interactivity (state, events, hooks)
- Required for dynamic UI behavior

This project uses **both approaches**, depending on the needs of each feature.

---

## 🌐 RESTful API Integration

The application consumes data from a RESTful API:
- Data is fetched on the **server side**
- Requests simulate real-world latency
- Loading states are handled using Next.js features (e.g. `loading.js`)
- Improves user experience by clearly indicating waiting time

This approach reflects how modern production applications handle asynchronous data.

---

## ⏳ Loading & User Experience

Special attention is given to:
- loading indicators
- progressive rendering
- page-level and component-level loading states

This ensures a smoother and more professional user experience.

---

## 📂 Project Structure (Simplified)

```text
src/
 ├─ app/
 │   ├─ layout.js
 │   ├─ page.js
 │   ├─ loading.js
 │   └─ articles/
 │       ├─ [title]/
 │       │   ├─ page.js
 │       │   └─ loading.js
 │       └─ layout.js


## 🎯 Project Goals
    - Practice Next.js App Router
    - Understand server-first rendering
    - Compare React and Next.js in a real project   
    - Apply clean project structure
    - Prepare for more advanced full-stack applications
    
    
## 🚧 Project Status
    This project is under active development and serves as a learning and experimentation space.
    New features and improvements will be added progressively.

## 📌 Author
    -   Imane Lmzk
    -   Aspiring Full-Stack Developer
    -   Learning React, Next.js, and modern web technologies

## 📄 License
    - This project is open-source and available for learning and educational purposes.    