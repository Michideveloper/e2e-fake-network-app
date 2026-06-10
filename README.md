# 🎭 Waifu.ai - QA Automation Suite

A professional end-to-end (E2E) automated testing suite designed for **Waifu.ai**, implemented using **Playwright** and the **Page Object Model (POM)** pattern.

This test suite covers key interactive features, state management, asynchronous data loading, and layout navigation to guarantee a bug-free, high-fidelity experience.

---

## 🚀 Key Features Covered

*   **📂 Navigation & Layout**: Validates responsive sidebar navigation (Home, Search, Create, Notifications, Profile) and unread notification badge reset behaviors.
*   **🖼️ Feed & Infinite Scroll**: Asserts asynchronous infinite scroll loading, post rendering, and grid/network metadata statistics (`VisitorCounter`).
*   **❤️ Social Interactions**: Tests like/unlike mechanics, custom comments with instant UI updates, and post performance insights modals.
*   **📝 Post Lifecycle**: automates the complete CRUD-like flow: opening the creator modal, generating dynamic images via integration, filling out details, sharing the post, validating its presence, and deleting it.

---

## 🏗️ Architecture & Patterns

The suite is engineered using clean coding practices and modular design patterns:

### 🧩 Page Object Model (POM)
Selectores and page-specific actions are encapsulated inside reusable classes under `/pages` to separate test logic from UI implementation details:
*   [NavigationPage.js](file:///Users/Paparatz/Downloads/github%20profile/qa-tests/pages/NavigationPage.js) - Handles sidebar routing and notification counts.
*   [FeedPage.js](file:///Users/Paparatz/Downloads/github%20profile/qa-tests/pages/FeedPage.js) - Manages likes, comments, deletion, infinite scroll, and IndexedDB state cleanup.
*   [CreatePostModalPage.js](file:///Users/Paparatz/Downloads/github%20profile/qa-tests/pages/CreatePostModalPage.js) - Controls the modal interface, media generation APIs, and submission flows.

### 🧹 State Isolation
To prevent tests from leaking state, each spec file utilizes `resetLocalStorageAndDatabases()` inside `beforeEach` hooks, programmatically purging `localStorage`, `sessionStorage`, and all local `IndexedDB` databases before reloading the browser.

---

## ⚙️ Tech Stack & Dependencies

*   **Test Runner:** [Playwright Test](https://playwright.dev/)
*   **Language:** JavaScript (ES Modules)
*   **Environment Manager:** Node.js / Bun

---

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd qa-tests
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Bun:
    ```bash
    bun install
    ```

3.  **Install Playwright Browsers:**
    ```bash
    npx playwright install
    ```

---

## 🚦 Execution Commands

Available scripts defined in [package.json](file:///Users/Paparatz/Downloads/github%20profile/qa-tests/package.json):

| Command | Action |
| :--- | :--- |
| `npm run test` | Executes all tests headlessly (recommended for CI/CD) |
| `npm run test:headed` | Runs tests opening the browser window |
| `npm run test:ui` | Starts Playwright's interactive UI dashboard (great for debugging) |
| `npm run test:report` | Serves the HTML report of the last run |

To target a specific environment (e.g., production), pass the `BASE_URL` env variable:
```bash
BASE_URL=https://fake-network.vercel.app/ npm run test
```

---

## 📊 Report and Logs

After test execution completes, Playwright generates a detailed HTML report including step-by-step traces, screenshots, and videos of failed assertions.
*   View report: `npm run test:report`
*   Configurations: [playwright.config.js](file:///Users/Paparatz/Downloads/github%20profile/qa-tests/playwright.config.js)

---
*Developed by QA Automation Engineering.*
