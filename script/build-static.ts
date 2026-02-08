import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildStatic() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building static site...");
  await viteBuild();
  console.log("✅ Build complete! Output in dist/public");
}

buildStatic().catch((err) => {
  console.error(err);
  process.exit(1);
});
