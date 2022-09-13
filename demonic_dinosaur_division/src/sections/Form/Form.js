import formHtml from "./Form.html";
import "./Form.scss";
// components
import { textTypingEffect } from "Components/TextTypingEffect/textTypingEffect";
import { Alert } from "../../components/AlertPopUp/AlertPopUp";

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

    // Newsletter Form Handling
    const newsletterForm = document.querySelector(".newsletter-form");
    newsletterForm.addEventListener("submit", handleFormSubmit);

  });
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const nameInput = document.querySelector(
    '.newsletter-form input[name="name"]'
  );
  const emailInput = document.querySelector(
    '.newsletter-form input[name="email"]'
  );
  // You can write code for validating the input here
  let fullname = nameInput.value;
  let email = emailInput.value;
  console.log(fullname, email);

  // Send Post Request to API
  try {
    const res = await fetch("http://localhost:8000/newsletter/subscribe", {
      body: JSON.stringify({
        email,
        fullname,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const body = await res.json();
    if (!res.ok) {
      // console.log(body.message);
      Alert("success", body.message);
      return;
    }
    console.log(body);
    Alert("success", "body.message");

    // Clear input
    nameInput.value = "";
    emailInput.value = "";
  } catch (error) {
    Alert("danger", "Something went wrong");
  }
};

export { FormSection };
