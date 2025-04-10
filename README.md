# Chatify

Chatify is a real-time chat application that allows users to communicate instantly through a modern, responsive interface.

## Features

- Real-time messaging
- User authentication
- Message history
- Responsive design for desktop and mobile devices
- User status indicators (online/offline)
- Message timestamps

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Real-time Communication: Socket.io
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS/SCSS

## Installation

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn
- MongoDB

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshV404/Chatify.git
   cd Chatify
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. The application should now be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Project Structure

```
Chatify/
├── client/             # Frontend React application
│   ├── public/         # Static files
│   └── src/            # React components and logic
├── server/             # Backend Node.js application
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── config/         # Configuration files
├── .env                # Environment variables
└── package.json        # Project dependencies and scripts
```

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user
- `GET /api/users` - Get all users
- `GET /api/messages/:chatId` - Get messages for a specific chat
- `POST /api/messages` - Send a new message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Harsh V - [GitHub](https://github.com/HarshV404)

Project Link: [https://github.com/HarshV404/Chatify.git](https://github.com/HarshV404/Chatify.git)
