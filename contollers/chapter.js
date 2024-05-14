const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create chapter associated with a module
async function createChapter(req, res) {
  const { chapter_name } = req.body; // Extract chapter_name from request body
  const moduleId = parseInt(req.params.moduleId);

  try {
    // Check if the module exists
    const existingModule = await prisma.module.findUnique({
      where: {
        id: moduleId,
      },
    });

    if (!existingModule) {
      return res.status(404).json({ error: "Module not found" });
    }

    const chapter = await prisma.chapter.create({
      data: {
        chapter_name,
        moduleId,
      },
    });

    res.status(201).json({ message: "Chapter created successfully", chapter });
  } catch (error) {
    console.error("Error creating chapter:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// Get all chapters for a specific module
async function getAllChapters(req, res) {
  const moduleId = parseInt(req.params.moduleId);

  try {
    // Check if the module exists
    const existingModule = await prisma.module.findUnique({
      where: {
        id: moduleId,
      },
    });

    if (!existingModule) {
      return res.status(404).json({ error: "Module not found" });
    }

    const chapters = await prisma.chapter.findMany({
      where: {
        moduleId,
      },
      include: {
        // Include chapters details
        topics: true,
        quizzes: true,
      },
    });

    res.status(200).json({ chapters });
  } catch (error) {
    console.error("Error fetching chapters:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// Get Chapter by ID
async function getChapterById(req, res) {
  const chapter_id = parseInt(req.params.id);

  try {
    const chapter = await prisma.chapter.findUnique({
      where: {
        chapter_id,
      },
      include: {
        topics: true,
        quizzes: true, // Include chapters details
      },
    });

    if (!chapter) {
      return res.status(404).json({ error: "Chapter not found" });
    }

    res.status(200).json({ chapter });
    
  } catch (error) {
    console.error("Error fetching chapter:", error);
    res.status(500).json({ error: "Failed to fetch chapter" });
  }
}

// Delete Chapter by ID
async function deleteChapter(req, res) {
  const chapter_id = parseInt(req.params.id);

  try {
    const chapter = await prisma.chapter.findUnique({
      where: {
        chapter_id,
      },
    });

    if (!chapter) {
      return res.status(404).json({ error: "Chapter not found" });
    }

    await prisma.chapter.delete({
      where: {
        chapter_id,
      },
    });

    res.status(200).json({ message: "Chapter deleted successfully" });
  } catch (error) {
    console.error("Error deleting chapter:", error);
    res.status(500).json({ error: "Failed to delete chapter" });
  }
}

module.exports = {
  createChapter,
  getAllChapters,
  getChapterById,
  deleteChapter,
};
