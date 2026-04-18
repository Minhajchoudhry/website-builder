function loadTemplate(type) {
    let html = "";

    if (type === "business") {
      html = `
        <h1>🏢 My Business</h1>
        <p>We provide high-quality services to grow your business.</p>
        <button>Contact Us</button>
      `;
    }

    if (type === "portfolio") {
      html = `
        <h1>👨‍💻 John Doe</h1>
        <p>Frontend Developer</p>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      `;
    }

    if (type === "startup") {
      html = `
        <section style="text-align:center">
          <h1>🚀 StartupX</h1>
          <p>Build faster. Launch smarter.</p>
          <button>Get Started</button>
        </section>
      `;
    }

    if (type === "blog") {
      html = `
        <h1>📝 My Blog</h1>
        <h3>Latest Post</h3>
        <p>This is a sample blog post...</p>
      `;
    }

    if (type === "landing") {
      html = `
        <section style="text-align:center">
          <h1>🔥 Amazing Product</h1>
          <p>Change your life today</p>
        
        <a href="https://chatgpt.com/" target="_blank">
  <button>Buy Now</button>
</a>
        </section>
      `;
    }

    document.getElementById("editor").innerHTML = html;
  }

  function saveSite() {
    const content = document.getElementById("editor").innerHTML;
    localStorage.setItem("site", content);
    alert("✅ Saved!");
  }

  function downloadSite() {
    const content = document.getElementById("editor").innerHTML;

    const fullHTML = `
      <html>
        <head>
          <title>My Website</title>
        </head>
        <body style="font-family:sans-serif;padding:20px;">
          ${content}
        </body>
      </html>
    `;

    const blob = new Blob([fullHTML], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "website.html";
    a.click();
  }

  window.onload = () => {
    const saved = localStorage.getItem("site");
    if (saved) {
      document.getElementById("editor").innerHTML = saved;
    }
  };