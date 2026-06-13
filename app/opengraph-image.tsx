import { ImageResponse } from "next/og";

export const alt = "Ronald M. Kasendwa — Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#171916",
          background: "#f4f2ec",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "28px",
            borderBottom: "1px solid rgba(23, 25, 22, 0.18)",
          }}
        >
          <span style={{ fontSize: 24, fontWeight: 700 }}>RMK.</span>
          <span
            style={{
              color: "#1e5c45",
              fontSize: 16,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Product Engineer
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ marginBottom: 24, color: "#62665f", fontSize: 25 }}>
            Ronald M. Kasendwa
          </span>
          <div
            style={{
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.055em",
              lineHeight: 0.95,
            }}
          >
            Turning ideas into{" "}
            <span style={{ color: "#1e5c45" }}>products.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#62665f",
            fontSize: 18,
          }}
        >
          <span>Product thinking · Engineering depth · Thoughtful execution</span>
          <span>rmkasendwa.com</span>
        </div>
      </div>
    ),
    size,
  );
}
