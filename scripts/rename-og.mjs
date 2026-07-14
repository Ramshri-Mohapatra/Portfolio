// The /og route (app/og/route.tsx) renders the social card at build time, but the
// static export writes it without a file extension. GitHub Pages types responses by
// extension, so an extensionless file goes out as application/octet-stream and no
// crawler will render it as an image. Copy the bytes to a .png name, which is what
// the og:image / twitter:image tags in app/layout.tsx point at.
import { copyFile, stat, readdir } from "node:fs/promises";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const dest = join(out, "og.png");

// Next has written the route body as either "og" or "og/index.<ext>" across versions.
const candidates = [join(out, "og"), join(out, "og", "index.png"), join(out, "og", "index.body")];

let src;
for (const c of candidates) {
  try {
    if ((await stat(c)).isFile()) {
      src = c;
      break;
    }
  } catch {
    /* try the next candidate */
  }
}

if (!src) {
  const listing = await readdir(out).catch(() => []);
  console.error(`rename-og: could not find the /og route output. out/ contains: ${listing.join(", ")}`);
  process.exit(1);
}

await copyFile(src, dest);
console.log(`Wrote out/og.png (from ${src.replace(out, "out")})`);
