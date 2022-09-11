import formHtml from "./Form.html";
import "./Form.scss";
// components
import { textTypingEffect } from "Components/TextTypingEffect/textTypingEffect";

const FormSection = (container) => {
  container.innerHTML += formHtml;

  window.addEventListener("DOMContentLoaded", () => {
    /* typewriter effect */
    const typewriterText =
      "Sign up to receive updates from Demonic Dinosaur Division NFT.";
    const typewriterDestination = document.querySelector(
      ".formSection__subtitle"
    );

    textTypingEffect(typewriterText, typewriterDestination);

    // Newsletter Form Implementation
    const newsletterForm = document.querySelector(".newsletter-form");
    const nameInput = document.querySelector(
      '.newsletter-form input[name="name"]'
    );
    const emailInput = document.querySelector(
      '.newsletter-form input[name="email"]'
    );

    newsletterForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      // You can write code for validating the input here
      let fullname = nameInput.value;
      let email = emailInput.value;
      console.log(fullname, email);

      // Send Post Request to API
      const res = await fetch("http://localhost:8000/newsletter/subscribe", {
        body: JSON.stringify({
          email,
          fullname
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const body = await res.json();
      if (!res.ok) {
        console.log(body.message);
        return;
      }

      console.log(body);

      // Clear input
      nameInput.value = '';
      emailInput.value = '';
    });
  });
};

export { FormSection };
