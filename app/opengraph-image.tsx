import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JMTechLab - José Manuel Suárez";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 70% 20%, rgba(72,229,194,.20), transparent 35%), #05070a",
          color: "#f5f7fa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#48e5c2",
            fontSize: 28,
            letterSpacing: "0.18em",
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          JMTECHLAB.DO
        </div>

        <div
          style={{
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            maxWidth: 1000,
          }}
        >
          José Manuel Suárez
        </div>

        <div
          style={{
            fontSize: 38,
            color: "#a8b3be",
            marginTop: 28,
          }}
        >
          QA Automation Engineer · SDET · Software Engineering
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 52,
            gap: 18,
            fontSize: 24,
            color: "#d7dee5",
          }}
        >
          <span>Playwright</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>AI</span>
        </div>
      </div>
    ),
    size
  );
}
