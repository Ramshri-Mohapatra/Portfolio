import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

// Deliberately NOT app/opengraph-image.tsx. That file convention emits an
// extensionless asset and hard-overrides the og:image meta tag to point at it —
// and GitHub Pages serves extensionless files as application/octet-stream, so
// no crawler renders it. As a plain static route the bytes still get generated
// at build time, scripts/rename-og.mjs gives them a .png name, and the meta tag
// in app/layout.tsx stays ours.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0e14",
          color: "#e6e9ef",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#5ee6a8", fontSize: 30 }}>
          <span>~/</span>
          <span style={{ color: "#8a93a6" }}>ramshri@london:~$ whoami</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 40, color: "#5ee6a8", marginTop: 14 }}>{site.role}</div>
          <div style={{ fontSize: 30, color: "#8a93a6", marginTop: 28, maxWidth: 900, lineHeight: 1.4 }}>
            Pipelines, dashboards and models, all live and inspectable. Open to Data Analyst roles.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, color: "#8a93a6" }}>
          <span style={{ color: "#5ee6a8" }}>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>5 projects / accepted paper / First Class CS</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
