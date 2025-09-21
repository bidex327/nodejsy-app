export default function handler(req, res) {
  const Cards = [
    {
      id: 1,
      image:
        "https://static1.gensler.com/uploads/image/99794/prodmodo-500yo-ai-thumbnail-1024x576_1756824830.jpg",
      type: "IN THE MEDIA",
      title:
        "  How Gensler Is Leveraging AI To Transform Architectural Renderings Into Narrative-Driven Storytelling Tools ",
      description:
        "Propmodo interviewed Chief Digital Officer Joseph Joseph about how Gensler is leveraging AI to help clients and stakeholders imagine not only what spaces look like, but how it feels to inhabit them.                  ",
    },

    {
      id: 2,
      image:
        "https://static2.gensler.com/uploads/image/99341/WPI-Innovation-Studio_N16_1024x576_1754947422.jpg",
      type: "BLOG",
      title:
        "    Designing Campus Spaces for Tomorrow’s Workers in the Age of AI           ",
      description:
        "  Higher education institutions that embed human-plus-technical skills into an ecosystem of third spaces will help prepare tomorrow’s workforce.                                   ",
    },

    {
      id: 3,
      image:
        "https://static2.gensler.com/uploads/image/98867/Gensler_Bogota_N30_1024_1752086428.jpg",
      type: "BLOG",
      title:
        "     Debunking 3 Myths About Generational Differences in the Workplace          ",
      description:
        "As generational differences narrow, organizations should focus their workplace strategies across the entire talent spectrum.                                   ",
    },

    {
      id: 4,
      image:
        "https://static2.gensler.com/uploads/image/56666/Diane-Hoskins-Gensler-Co-CEO_2021_2000px_1634334757.jpg",
      type: "BLOG",
      title:
        "   Diane Hoskins Joins Real Estate Capital Podcast to Discuss How Design, Research, and Mobility Are Transforming Cities           ",
      description:
        "  Hoskins reflected on 20 years as co-CEO, discussed the importance of R&amp;D, and highlighted opportunities in city-making, healthcare, and mobility, noting Singapore, the Middle East, and Africa as key regions of innovation.                                   ",
    },

    {
      id: 5,
      image:
        "https://static2.gensler.com/uploads/image/99926/1757110205194/nils-huenerfuerst-unsplash_1024.jpg",
      type: "BLOG",
      title:
        "How San Francisco Can Apply Startup Culture to Unlock Housing Solutions           ",
      description:
        "     We explore four strategies to bring iterative, bold approaches to address the city’s housing shortage.                                  ",
    },

    {
      id: 6,
      image:
        "https://static2.gensler.com/uploads/image/99165/Purdue-Mitch-Daniels-School-of-Business_N2_1024_1753913608.jpg",
      type: "BLOG",
      title:
        "  Designing for the Next Generation of Business Leaders          ",
      description:
        "  By investing in an experience-rich building, Purdue University’s Mitch Daniels School of Business aims to grow the next generation of business leaders and entrepreneurs.                                   ",
    },

    {
      id: 7,
      image:
        "https://static2.gensler.com/uploads/image/100103/1757614935691/jordan-kristen-fortune-peice-1024x576.jpg",
      type: "BLOG",
      title:
        "     Fortune’s Brainstorm Tech Explores “Designing a New Way to Think” as Tech Reshapes Design           ",
      description:
        " Gensler co-CEO Jordan Goldstein and Kristen Conry, SVP of Global Design at Marriott International, shared ideas for how “phygital” experiences — blending physical and digital — can empower choice, personalization, and human connection. Watch the session.                                    ",
    },

    {
      id: 8,
      image:
        "https://static2.gensler.com/uploads/image/99944/1757346950914/pr-trevor-chris-ed-thumbnail-1024x576.jpg",
      type: "PRESS RELEASE",
      title:
        "  Gensler Strengthens Global Sports Vision With High-Impact Leadership Additions           ",
      description:
        "   The new leaders are based in San Francisco and Kansas City — bringing in a new generation of expertise to deepen its investment in sports design.                                ",
    },

    {
      id: 9,
      image:
        "https://static2.gensler.com/uploads/image/98511/Al-Ahly-Stadium_N2_1024_1750443369.jpg",
      type: "BLOG",
      title: "    Al-Ahly Stadium Brings Fans Closer to the Action           ",
      description:
        "    Facing height and capacity restrictions, an innovative design solution turned these challenges into an opportunity to design a year-round, landmark sports venue.                                  ",
    },

    {
      id: 10,
      image:
        "https://static1.gensler.com/uploads/image/98435/Kinder-Morgan_Repositioning_N16_1024_1750110503.jpg",
      type: "BLOG",
      title: "  Historic Buildings: A New Solution For Modern Data Centers ",
      description:
        "    Repurposing historic buildings into data centers is a compelling strategy for heritage preservation, sustainability, and digital transformation.                                                   ",
    },

    {
      id: 11,
      image:
        "http://static1.gensler.com/uploads/image/99461/post-ironworkers-63-training-facility-1024x576_1755546153.jpg",
      type: "BLOG",
      title:
        "    Blueprint for Change: How Modern Training Centers Are Redefining the Trades           ",
      description:
        " With thoughtful design, modern training centers for skilled trades are reshaping perceptions of vocational education.                                    ",
    },

    {
      id: 12,
      image:
        "https://static2.gensler.com/uploads/image/99142/GenslerOfficeCostaRica_36_1024_1753828811.jpg",
      type: "BLOG",
      title:
        "  How Strategic Shifts Can Reignite Employee Engagement           ",
      description:
        "  In today’s workplace, employee engagement isn’t just a buzzword — it’s a vital force behind organizational success.                                   ",
    },

    {
      id: 13,
      image:
        "https://static2.gensler.com/uploads/image/99676/Edelman_Tokyo_N5_1024_1756264607.jpg",
      type: "BLOG",
      title:
        "      Why Japan’s Workplace Trends Are Moving Against the Global Current           ",
      description:
        "   How companies in Japan can adapt their workplace solutions to counteract the country’s stagnating office experience.                                   ",
    },

    {
      id: 14,
      image:
        "https://static2.gensler.com/uploads/image/99129/SpecSuites_2025_HERO_1024px_1753811403.jpg",
      type: "BLOG",
      title:
        "    Unlocking Value in Class A High-Rises: The Strategic Advantage of Spec Suites           ",
      description:
        "In Class A commercial towers, spec suites are becoming a go-to strategy for converting vacancy into value.                                   ",
    },

    {
      id: 15,
      image:
        "https://static1.gensler.com/uploads/image/98299/Office-to-Hotel_Watermark_HERO_1024px_1749241199.jpg",
      type: "BLOG",
      title:
        "         Office-to-Hotel Conversions: Resilient Opportunities for Downtown Districts           ",
      description:
        "   Older and smaller Class B or C office buildings have been hit hard by high vacancy rates. Converting them to efficient, business travel hotels could offer an economical solution that supports the overall health of downtown business districts.                                   ",
    },

    {
      id: 16,
      image:
        "https://static2.gensler.com/uploads/image/96918/Horizon-3_1024_1741974435.jpg",
      type: "BLOG",
      title:
        " Right-Sizing the Community Hospital: Optimizing for the Future           ",
      description:
        " As U.S. health systems prepare for an uncertain future, our prototype hospital looks to expand care with fewer beds.",
    },
    {
      id: 17,
      image:
        "https://static2.gensler.com/uploads/image/96823/immersive-industry-report-2025-1024x576_1741378397.jpg",
      type: "RESEARCH",
      title:
        "      Evolving Immersive: The 2025 Immersive Entertainment &amp; Culture Industry Report           ",
      description:
        " Explore the most comprehensive evaluation of the state of Immersive Experience available today, published in partnership by Gensler and the Immersive Experience Institute.                                   ",
    },

    {
      id: 18,
      image:
        "https://static2.gensler.com/uploads/image/98992/Caolu-Garden-City_N6_1024_1752773690.jpg",
      type: "BLOG",
      title:
        "     Reenvisioning Retail Centres: Lessons From China for the Middle East           ",
      description:
        " We explore how key lessons from China’s retail evolution can reshape the future of retail centres in the Middle East.                                   ",
    },

    {
      id: 19,
      image:
        "https://static2.gensler.com/uploads/image/98455/CanopySanAntonio_N10_1024_1750175842.jpg",
      type: "BLOG",
      title: "     The Top 10 Cities People Don’t Want to Leave             ",
      description:
        "  Gensler’s 2025 City Pulse survey reveals the top cities where people not only move to, but also stay long-term.                                  ",
    },
    {
      id: 20,
      image:
        "https://static2.gensler.com/uploads/image/98122/04-IMAGEN-PEATONAL-PARQUE-LINEAL-P-V2_1024_1747947021.jpg",
      type: "BLOG",
      title:
        "           A New Vision for Urban Design in Tropical Climates          Reenvisioning Retail Centres: Lessons From China for the Middle East           ",
      description:
        "   Through thoughtful, climate-responsive design, seemingly adverse conditions can become a distinct advantage for tropical cities.                                      ",
    },
  ];
  res.status(200).json(Cards);
}
