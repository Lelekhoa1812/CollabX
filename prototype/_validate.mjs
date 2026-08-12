#!/usr/bin/env node
/**
 * Static validation for generated CollabX prototype pages.
 * Run after: node prototype/_generate.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const required = [
  "00_portal_home.html",
  "01_business_access.html",
  "02_business_home.html",
  "03_business_initiative.html",
  "04_business_contribute.html",
  "05_business_understand.html",
  "06_business_solution.html",
  "07_business_decision.html",
  "08_business_track.html",
  "09_business_admin.html",
  "10_developer_home.html",
  "11_developer_workspace.html",
  "12_developer_review.html",
];

const anchors = [
  ["00_portal_home.html", ["Walkthrough", "Start demo"]],
  ["06_business_solution.html", ["Create preview", "proto-app", "Adjust preview"]],
  ["03_business_initiative.html", ["Progress on this initiative", "memory-candidates"]],
  ["04_business_contribute.html", ["Guided session", "Continue"]],
  ["05_business_understand.html", ["Sources used", "Disagreement"]],
  ["07_business_decision.html", ["Sign selected", "decision-receipt"]],
  ["10_developer_home.html", ["Package ready", "Done checks"]],
  ["12_developer_review.html", ["Merge blocked", "missing test"]],
];

const issues = [];
for (const file of required) {
  const full = path.join(dir, file);
  if (!fs.existsSync(full)) {
    issues.push(`missing ${file}`);
    continue;
  }
  const html = fs.readFileSync(full, "utf8");
  if (!html.includes("Skip to content")) issues.push(`${file}: missing skip link`);
  if (!html.includes("collabx-demo-v2")) issues.push(`${file}: missing demo state key`);
  if (!/<main[\s>]/.test(html) && !/id="main"/.test(html)) issues.push(`${file}: missing main`);
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<template[\s\S]*?<\/template>/g, "");
  const ids = [...withoutScripts.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (dupes.length) issues.push(`${file}: duplicate ids ${dupes.join(", ")}`);
  for (const href of [...html.matchAll(/href="([^"]+\.html[^"]*)"/g)].map((m) => m[1].split("#")[0].split("?")[0])) {
    if (!fs.existsSync(path.join(dir, href))) issues.push(`${file}: broken link ${href}`);
  }
  try {
    const script = html.match(/<script>([\s\S]*?)<\/script>/);
    if (script) new Function(script[1]);
    else issues.push(`${file}: missing script`);
  } catch (e) {
    issues.push(`${file}: JS parse ${e.message}`);
  }
}

for (const [file, needles] of anchors) {
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  for (const n of needles) {
    if (!html.includes(n)) issues.push(`${file}: missing anchor "${n}"`);
  }
}

if (issues.length) {
  console.error("Prototype validation failed:");
  issues.forEach((i) => console.error(" -", i));
  process.exit(1);
}
console.log(`Prototype validation ok (${required.length} pages)`);
