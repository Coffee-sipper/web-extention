# 🔗 Leads Tracker

A simple **Chrome Extension** built with HTML, CSS, and JavaScript that lets you save useful links and browser tabs directly from the Chrome extension popup.

This project was created as a JavaScript practice project while learning about the DOM, event listeners, arrays, localStorage, and Chrome Extension APIs.

## ✨ Features

* 💾 Save custom links
* 🌐 Save the currently active browser tab
* 🔗 Click saved links to open them in a new tab
* 💽 Store leads using `localStorage`
* 🗑️ Delete all saved leads with a double-click
* 📌 Simple and lightweight Chrome extension

## 🛠️ Built With

* **HTML5** — Extension structure
* **CSS3** — Styling
* **JavaScript** — Functionality and logic
* **Chrome Extensions API** — Accessing the current browser tab
* **LocalStorage** — Persisting saved links

## 📂 Project Structure

```text
Leads-Tracker/
│
├── index.html
├── index.js
├── style.css
├── manifest.json
└── generative.png
```

### `index.html`

Contains the extension's interface, including:

* Input field
* Save Input button
* Save Tab button
* Delete All button
* List for displaying saved links

### `index.js`

Handles the extension's functionality:

* Saving user input
* Getting the current Chrome tab
* Rendering saved leads
* Saving data to `localStorage`
* Deleting all saved leads

### `style.css`

Contains the styling for the extension popup.

### `manifest.json`

Defines the Chrome extension configuration and permissions.

## 🚀 Installation

1. Clone or download this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder.
6. Pin the extension and start using it!

## 📖 What I Learned

While building this project, I practiced:

* DOM manipulation
* `addEventListener()`
* Arrays and `.push()`
* Template literals
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* Chrome's `tabs` API
* Basic Chrome Extension development
* Rendering dynamic HTML with JavaScript

## 🔮 Future Improvements

Some things I could add in the future:

* Add a confirmation before deleting all leads
* Add individual delete buttons
* Add an option to edit saved links
* Improve the UI and responsiveness
* Add categories or tags for saved links
* Add Chrome storage instead of `localStorage`

## 📄 License

This project is licensed under the **MIT License**.

---

Made while learning JavaScript 🚀
