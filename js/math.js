function renderMath() {
  if (typeof renderMathInElement === "undefined") return;

  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}

document.addEventListener("DOMContentLoaded", renderMath);

// Important for MkDocs Material page navigation
if (typeof document$ !== "undefined") {
  document$.subscribe(renderMath);
}

