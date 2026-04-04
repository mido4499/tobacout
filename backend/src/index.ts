import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import statRouter from './routes/statRouter';
import photoGen from './routes/photoGen';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());


app.use(express.json());
// Routes
app.get('/health', (req, res) => {
    res.json({ok: true, message: "Backend is working. "});
    console.log("Backend is working.");
})

app.use('/api/statscalc', statRouter);
app.use('/api/photoGen', photoGen);

app.listen(4000, "0.0.0.0", ()=>{
    console.log(`Server running on  http://localhost:${PORT}`);
})