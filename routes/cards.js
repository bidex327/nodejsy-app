const express = require ("express");
const router = express.Router();

const imagesUrls = [
  "https://static1.gensler.com/uploads/image/99794/prodmodo-500yo-ai-thumbnail-1024x576_1756824830.jpg",
  "https://static2.gensler.com/uploads/image/99341/WPI-Innovation-Studio_N16_1024x576_1754947422.jpg",
  "https://static2.gensler.com/uploads/image/98867/Gensler_Bogota_N30_1024_1752086428.jpg",
  "https://static2.gensler.com/uploads/image/56666/Diane-Hoskins-Gensler-Co-CEO_2021_2000px_1634334757.jpg",
  "https://static2.gensler.com/uploads/image/99926/1757110205194/nils-huenerfuerst-unsplash_1024.jpg",
  "https://static2.gensler.com/uploads/image/99165/Purdue-Mitch-Daniels-School-of-Business_N2_1024x1753913608.jpg",
  "https://static2.gensler.com/uploads/image/100103/1757614935691/jordan-kristen-fortune-peice-1024x576.jpg"
];

// Example real content for first few cards — replace these titles/descriptions as you want
const cardsData = [
  {
    category: "In the Media",
    title: "AI-Driven Innovation in Architecture",
    description: "How AI is shaping design workflows and urban planning.",
  },
  {
    category: "Blog",
    title: "WPI Innovation Studio",
    description: "A collaborative studio environment for cross-disciplinary projects.",
  },
  {
    category: "In the Media",
    title: "Gensler Bogotá Expansion",
    description: "Design and strategy considerations for expanding regional offices.",
  },
  {
    category: "Blog",
    title: "Leadership in Design",
    description: "Profiles and insights from global design leaders.",
  }
];

// create 21 cards by repeating cardData (keeps things deterministic)
const cards = Array.from({ length: 21 }, (_, i) => {
  const base = cardsData[i % cardsData.length];
  return {
    id: i + 1,
    title: base.title,
    description: base.description,
    category: base.category,
    image: imagesUrls[i % imagesUrls.length]
  };
});

function paginate(array, page = 1, limit = 6) {
  const total = array.length;
  const pageCount = Math.max(1, Math.ceil(total / limit));
  const normalizedPage = Math.min(Math.max(1, page), pageCount);
  const start = (normalizedPage - 1) * limit;
  const end = start + limit;
  const results = array.slice(start, end);
  return { page: normalizedPage, limit, total, pageCount, cards: results };
}

router.get("/cards", (req, res) => {
  try {
    const page = parseInt(req.query.page || "1", 10);
    const limit = Math.max(1, parseInt(req.query.limit || "6", 10));
    const search = (req.query.search || "").trim().toLowerCase();
    const category = (req.query.category || "").trim().toLowerCase();

    let filtered = cards;

    if (category) {
      filtered = filtered.filter(c => c.category.toLowerCase() === category);
    }
    if (search) {
      filtered = filtered.filter(
        c =>
          c.title.toLowerCase().includes(search) ||
          c.description.toLowerCase().includes(search)
      );
    }

    const result = paginate(filtered, page, limit);
    return res.json(result);
  } catch (err) {
    console.error("Error in /api/cards route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
