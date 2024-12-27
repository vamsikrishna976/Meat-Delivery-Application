import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import os from "os";
import "dotenv/config";
import cors from "cors";

//dotenv.config();

const app = express();
import corsOptions from "./config/corsOption.js";
//new Imports

import cookieParser from "cookie-parser";

// new middleware

app.use(cookieParser());

// app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
//! DataBase Inititalization imports Model.



// Middleware
app.use(express.json());

//Ip middleware
//app.use(IpMiddleWare());

// Set strictQuery option
mongoose.set("strictQuery", false);

// Routes
app.use("/", routes);






// Route to display all routes as hyperlinks


export const startServer = async () => {
  try {
    app.use("/", routes);
   
    
    const port = process.env.PORT;
    const server = app.listen(port, () => {
      const networkInterfaces = os.networkInterfaces();
      const ipAddress = Object.values(networkInterfaces)
        .flatMap((ifaces) =>
          ifaces.filter((iface) => !iface.internal && iface.family === "IPv4")
        )
        .map((iface) => iface.address)
        .find(Boolean);

      console.log(`Server is running on http://localhost:${port}`);
      if (ipAddress) {
        console.log(`Locally connected to: http://${ipAddress}:${port}`);
      } else {
        console.log("Unable to determine server IP address.");
      }
    });
  } catch (error) {
    console.log(error);
  }
};



//dotenv.config();

export const connectToMongoDB = async () => {
  console.log(process.env.DB_NAME);
  const options = {
    useNewUrlParser: true,
    maxPoolSize: 10,
    useUnifiedTopology: true,
  };
  const baseMongoURI = process.env.MONGO_URI;

  const mongoURI = `${baseMongoURI}/${process.env.DB_NAME}`;

  try {
    await mongoose.connect(mongoURI, options);
    console.log("MongoDB Connected.");
    console.log(mongoURI);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};








