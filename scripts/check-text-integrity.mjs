import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([".git", ".next", "node_modules", "out", "dist"]);
const extensions = new Set([".css", ".md", ".tsx", ".ts", ".jsx", ".js"]);

const forbiddenPatterns = [
  { pattern: /\uFFFD/g, label: "replacement character U+FFFD" },
  { pattern: /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]?\?[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, label: "suspicious question mark inside a word" },
  { pattern: /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]\?\s/g, label: "suspicious question mark after a letter" },
];

const failures = [];

function extensionOf(filePath) {
  const match = filePath.match(/\.[^.]+$/);
  return match ? match[0] : "";
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;

    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!extensions.has(extensionOf(fullPath))) continue;

    const text = readFileSync(fullPath, "utf8");
    for (const { pattern, label } of forbiddenPatterns) {
      const matches = text.match(pattern);
      if (!matches) continue;

      failures.push({
        file: fullPath.replace(`${root}\\`, "").replace(`${root}/`, ""),
        label,
        count: matches.length,
      });
    }
  }
}

walk(root);

if (failures.length > 0) {
  console.error("Text integrity check failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: ${failure.label} (${failure.count})`);
  }
  process.exit(1);
}

console.log("Text integrity check passed.");
