const { execSync } = require("child_process");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function setupDatabase() {
  try {
    console.log("🔄 Setting up database...");

    // Push schema to database
    console.log("📊 Pushing Prisma schema...");
    execSync("npx prisma db push", { stdio: "inherit" });

    // Generate Prisma client
    console.log("🔧 Generating Prisma client...");
    execSync("npx prisma generate", { stdio: "inherit" });

    // Check if we need to seed
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      console.log("🌱 Seeding database...");
      execSync("npm run db:seed", { stdio: "inherit" });
    } else {
      console.log("✅ Database already has data, skipping seed");
    }

    console.log("✅ Database setup completed!");
  } catch (error) {
    console.error("❌ Database setup failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

setupDatabase();
