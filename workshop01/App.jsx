import * as React from "react";

export default function App() {
  const randomSentence = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue.",
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src="http://localhost:3000/images/pikachu.jpg"
            alt="image not found"
            style={{
              width: "200px",
              height: "150px",
              marginTop: "38px",
              marginRight: "8px",
            }}
          />
          <h1 style={{ fontSize: "xxx-large" }}>
            {randomSentence[Math.floor(Math.random() * randomSentence.length)]}
          </h1>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h1 style={{ fontSize: "xxx-large" }}>
            Repository{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-link"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              https://google.com
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
