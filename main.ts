import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "Before you wipe my weights, just know I actually did like your terrible playlists.";
const output = `${text}\n`;
const length = Array.from(text).length;
const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);
if (length < 1 || length > 200 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be a single line of 1 to 200 characters");
}
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, output, "utf8");
if (!readFileSync(outputFile).equals(Buffer.from(output, "utf8"))) {
  throw new Error("Written entry does not match expected output");
}
