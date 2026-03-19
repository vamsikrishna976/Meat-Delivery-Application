# Meat Delivery Application

A modern, responsive web application for ordering and delivering fresh meat products. This project features a full-stack architecture with a React frontend and Node.js/Express backend.

## 🌐 Live Demo

[View Live Application](https://meat-delivery-application-vamsikrishna976s-projects.vercel.app)

## ✨ Features

- **Responsive Design**: Fully optimized for mobile (480px), tablet (600px-768px), and desktop (1050px+) screens
- **User Authentication**: Login and signup functionality with token-based security
- **Menu Explorer**: Browse and search available meat products with category filtering
- **Shopping Cart**: Add/remove items from cart with real-time updates
- **Order Management**: Place orders with detailed booking information
- **BMI Calculator**: Health-focused feature for users to calculate BMI
- **Booking System**: Schedule meat deliveries with custom dates and times
- **Nutrition Tracking**: Access nutritional information and macro tracking
- **Responsive Dashboard**: View order history, bookings, and notifications

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Redux** - State management
- **CSS3** - Responsive styling with media queries
- **Create React App** - Build tooling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication
- **CORS** - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend hosting
- **GitHub** - Version control

## 📁 Project Structure

```
Meat-Delivery-Application/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── auth/               # Login & signup
│   │   ├── context/            # React context
│   │   ├── store/              # Redux store
│   │   ├── services/           # API services
│   │   └── App.js
│   ├── package.json
│   └── README.md
├── Backend/
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   ├── Controllers/        # Route controllers
│   │   ├── Middleware/         # Express middleware
│   │   ├── models/             # Data models
│   │   ├── routes/             # API routes
│   │   ├── validations/        # Data validation
│   │   ├── index.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vamsikrishna976/Meat-Delivery-Application.git
   cd Meat-Delivery-Application
   ```

2. **Frontend Setup**
   ```bash
   cd Frontend
   npm install
   npm start
   ```
   The frontend will run at: `http://localhost:3000`

3. **Backend Setup**
   ```bash
   cd Backend
   npm install
   npm start
   ```
   The backend will run at: `http://localhost:5000`

## 📜 Available Scripts

### Frontend
```bash
npm start         # Run in development mode
npm run build     # Create production build
npm test          # Run tests
```

### Backend
```bash
npm start         # Start the server
npm run dev       # Run with nodemon (auto-reload)
```

## 🎨 Responsive Breakpoints

- **Mobile**: 0 - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px and above

## 🔐 Environment Variables

Create `.env` files in both Frontend and Backend directories:

### Frontend/.env
```
REACT_APP_API_URL=http://localhost:5000
```

### Backend/.env
```
PORT=5000
JWT_SECRET=your_secret_key
DB_URL=your_database_url
```

## 🚢 Deployment

### Frontend (Vercel)
```bash
vercel --prod
```

The project automatically deploys to Vercel when pushing to the main GitHub branch.

### Backend
Deploy to your preferred Node.js hosting (Heroku, AWS, DigitalOcean, etc.)

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## 🐛 Known Issues & Fixes

- **CSS Media Queries**: All responsive breakpoints have been tested and optimized
- **ESLint Configuration**: Custom rules configured to handle specific warnings
- **Build Optimization**: Production builds are minified and optimized for deployment

## 📞 Support

For issues or questions, please create an GitHub issue or contact the development team.

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

Vamsikrishna976 - [GitHub Profile](https://github.com/vamsikrishna976)

---

**Last Updated**: March 2026
**Version**: 1.0.0