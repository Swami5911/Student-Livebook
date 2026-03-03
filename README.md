# Student-Livebook

Student-Livebook is a modern, responsive web application built to streamline classroom management, student directories, and attendance tracking. It provides specialized dashboards for Teachers and Administrators to efficiently handle day-to-day academic tasks without the overhead of heavy, complex ERP systems.

## 🚀 Key Features

*   **Role-Based Access Control**: Secure login routes for Teachers and Admins with tailored dashboard views.
*   **Admin Panel**: 
    *   Comprehensive Teacher and Student directories with search and filtering capabilities.
    *   Inline editing of user credentials (including password visibility for easy administration).
    *   Ability to block or restrict user access.
*   **Advanced Attendance Tracking**:
    *   **Bulk Upload Roster**: Easily add students to a class roster bypassing the need for individual account creation by simply pasting data (Roll No & Name) from Excel or Google Sheets.
    *   **Interactive Marking**: Swiftly mark students as Present (P), Absent (A), or Late (L) using intuitive toggle components.
    *   **Rich Metadata**: Save attendance sessions with specific contextual data including **Course/Program**, **Subject Name**, **Teacher Name**, **Date**, and precise **Period Timings**.
    *   **History & Modification**: View past attendance records. Teachers can safely modify past submitted records (e.g., correcting an absence to a late arrival) while being required to provide a modification reason for auditing.
    *   **CSV Export**: One-click download of attendance history into beautifully formatted CSV files for offline record keeping or reporting.
*   **Personalized AI Tutor**:
    *   Context-aware AI assistant utilizing Gemini/OpenRouter models.
    *   Provides instant, Socratic-method tutoring dynamically based on the specific lecture the student is currently viewing.
*   **Premium Lecture Content**:
    *   Robust Markdown rendering engine supporting complex tables, inline code formatting, and custom blockquotes.
    *   "Neo-Academic" typography with beautiful glassmorphism-inspired learning objective cards and section headers.
*   **Modern UI/UX**: Built with a sleek, responsive design featuring glassmorphism elements, custom scrollbars, and fluid animations for a premium feel on both desktop and mobile devices.

## 🛠️ Technology Stack

*   **Frontend Framework**: React 18 with TypeScript
*   **Build Tool**: Vite (for rapid development and optimized production builds)
*   **Styling**: Pure CSS3 with modern features (Flexbox, CSS Grid, CSS Variables) for highly customized, framework-independent designs.
*   **Markdown Parsing**: `react-markdown` paired with `remark-gfm` for robust GitHub-flavored markdown (like tables and lists).
*   **Backend & Database**: Firebase Realtime Database
*   **Authentication**: Firebase Auth (integrated with Realtime Database for role definitions)
*   **AI Models**: OpenRouter API / Google Gemini
*   **Hosting**: Firebase Hosting

## 📦 Project Structure Overview

*   `/src/components/Admin` - Handles all administrative tables and user management views.
*   `/src/components/Attendance` - Contains the logic for the Attendance Dashboard (Roster upload, Marking, History, CSV).
*   `/src/components/Auth` - Secure login modals and authentication routing.
*   `/src/styles` - Contains the modular CSS files driving the application's unique aesthetic.
*   `/src/firebase.ts` - Firebase initialization and configuration.

## 🏗️ Local Setup & Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Swami5911/Student-Livebook.git
    cd Student-Livebook/app
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Firebase Configuration**:
    Ensure your Firebase configuration object in `src/firebase.ts` is correctly pointing to your project instance.

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The application will typically start on `http://localhost:5173`.

5.  **Build for Production**:
    ```bash
    npm run build
    ```

6.  **Deploy to Firebase**:
    ```bash
    firebase deploy
    ```

## 📝 License

This project is proprietary. All rights reserved.
