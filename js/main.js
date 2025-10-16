if (
  window.location.pathname !== "/index.html" &&
  window.location.pathname !== "/"
) {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("main-content");

  const loadTemplate = async (url) => {
    try {
      const res = await fetch(url);
      const html = await res.text();
      content.innerHTML = html;
      if (url.includes("cadastro")) initForm();
    } catch (err) {
      content.innerHTML = "<p>Erro ao carregar a página.</p>";
      console.error(err);
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("href");
      history.pushState(null, "", url);
      loadTemplate(`templates/${url}`);
    });
  });

  loadTemplate("templates/index.html");

  window.addEventListener("popstate", () => {
    const page = location.pathname.split("/").pop() || "index.html";
    loadTemplate(`templates/${page}`);
  });
});
