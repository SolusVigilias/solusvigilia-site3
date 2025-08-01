import fs from "fs";
import path from "path";

export function getPapers() {
  const dir = path.join(process.cwd(), "public/papers");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf"));
  return files.map((file) => ({
    name: file.replace(/\.pdf$/, ""),
    path: `/papers/${file}`,
  }));
}
