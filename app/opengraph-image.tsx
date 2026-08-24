import { ImageResponse } from "next/og";

export const alt =
  "JMTechLab — José Manuel Suárez, QA Automation Engineer and SDET";

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
          justifyContent: "space-between",
          padding: "70px",
          background:
            "linear-gradient(135deg, #070a0e 0%, #111820 60%, #15232d 100%)",
          color: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          JMTechLab
          <span style={{ color: "#58d6b5" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#58d6b5",
              fontSize: 22,
              letterSpacing: "4px",
              marginBottom: "22px",
            }}
          >
            QA AUTOMATION · SDET · SOFTWARE ENGINEERING
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-4px",
            }}
          >
            José Manuel Suárez
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "25px",
              color: "#aab5bf",
              fontSize: 28,
            }}
          >
            Building reliable software through automation, engineering and AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#7f8b95",
            fontSize: 20,
          }}
        >
          <span>Playwright · TypeScript · Python · CI/CD</span>
          <span>jmtechlab.do</span>
        </div>
      </div>
    ),
    size
  );
}
