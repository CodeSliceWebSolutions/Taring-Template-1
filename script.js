const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, i) => {
  setTimeout(() => {
    tile.style.transition = "0.5s cubic-bezier(.25,.8,.25,1)";
    tile.style.opacity = "1";
    tile.style.transform = "scale(1)";
  }, i * 80); // paving pieces connecting
});

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "27848012143"; // +27 84 801 2143 (no spaces)

  const text =
`NEW QUOTE REQUEST

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Project Details:
${message}`;

  const encodedText = encodeURIComponent(text);

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappURL, "_blank");
});
