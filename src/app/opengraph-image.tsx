import { ImageResponse } from "next/og";

export const alt = "Roihan Salsabila — Software Engineer & Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "76px", background: "#09090b", color: "#fafafa", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>PORTFOLIO & DEV NOTES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>Roihan Salsabila</div>
        <div style={{ fontSize: 38, color: "#d4d4d8" }}>Software Engineer & Full-stack Developer</div>
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#a1a1aa" }}>React · Next.js · TypeScript · Indonesia</div>
    </div>, size,
  );
}
