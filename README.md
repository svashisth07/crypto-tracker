## Project Description

This project is a full-stack web application designed to track cryptocurrency information. It consists of a React-based client application and a Node.js server application, both developed using TypeScript for enhanced type safety and maintainability.

### Client Application

The client side of the application is built with React and styled using Tailwind CSS, providing a modern and responsive user interface. It utilizes React Router for seamless client-side routing, allowing users to navigate through different views of the application. For state management, the application employs Zustand, a lightweight and flexible state management library. HTTP communication and data caching are handled by Axios and React Query, ensuring efficient data fetching and state management.

### Server Application

The server side is developed using Express.js and serves as a backend API that interfaces with the CoinGecko API. It fetches real-time cryptocurrency data and provides it to the client application via RESTful endpoints.

### Key Technologies
- **React**: For building the user interface.
- **Node.js**: As the runtime environment for the server.
- **TypeScript**: For type safety and improved code quality.
- **Tailwind CSS**: For styling the client application.
- **React Router**: For client-side routing.
- **Zustand**: For state management.
- **Axios & React Query**: For HTTP requests and client-side caching.
- **Express.js**: For building the server-side application.
- **CoinGecko API**: For fetching cryptocurrency data.

## Getting Started

### Prerequisites
- Node.js version >= 20

### Installation
1. Clone the repository:
    ```bash
   git clone https://github.com/svashisth07/crypto-tracker.git
   ```
2. Navigate to the project directory:
    ```bash
    cd crypto-tracker
   ```

   ```bash
   cd client && npm install
    ```

   ```bash
   cd server && npm install
    ```

### Running Frontend & backend application
   ```bash
   cd client && npm run dev
   ```

   ```bash
   cd server && npm run dev
   ```
