import express from "express";
import cors from "cors";
import routes from "@/routes";

export const app = express();

// CORS Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

app.get('/api', (_, res) => {
  res.send('API is running...');
});

app.use("/api/v1", routes);