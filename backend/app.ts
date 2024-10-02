import express from "express";
import cors from "cors";
import { routes } from "./routes/routes";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}));

app.use(routes);

app.listen(5000, () => {
    console.clear();
    console.log(`Server running at ${process.env.API_URL}`);
});
