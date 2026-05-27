import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import * as dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API to handle brief submission
  app.post("/api/send-brief", async (req, res) => {
    try {
      const data = req.body;
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      // Log it
      console.log("Received brief submission:", data);

      if (!botToken || !chatId) {
        // If not configured, just simulate success after a delay
        setTimeout(() => {
          res.json({ success: true, mock: true, message: "Telegram integration not configured. Form mock-submitted successfully!" });
        }, 1000);
        return;
      }

      // Format message
      const message = `
⚡️ НОВЫЙ ЗАКАЗ НА ПРОЕКТ ⚡️
👤 Имя: ${data.name || '-'}
📧 Email: ${data.email || '-'}
💼 Продукт: ${data.projectType?.join(', ') || '-'}
💰 Бюджет: ${data.budget || '-'}
🔗 Ресурс: ${data.link || '-'}
📝 Задача: ${data.description || '-'}
      `.trim();

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send telegram message");
      }

      res.json({ success: true });

    } catch (e: any) {
      console.error(e);
      res.status(500).json({ success: false, error: e.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
