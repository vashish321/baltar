import dotenv from 'dotenv';;
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });
import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Test route
app.get("/", (req, res) => {
  res.send("API is running")
})

// 🔥 CREATE row
app.post("/test", async (req, res) => {
  const result = await prisma.test.create({
    data: {}
  })
  res.json(result)
})

// 🔥 GET all rows
app.get("/test", async (req, res) => {
  const result = await prisma.test.findMany()
  res.json(result)
})

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000")
})