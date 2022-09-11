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
      // const res = await fetch("http://localhost:8000/subscribe", {
      //   // body: JSON.stringify({
      //   //   email,
      //   //   fullname
      //   // }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   // method: "POST",
      // });

      // console.log(await res.json());

      // if (error) {
      //   // 4. If there was an error, update the message in state.
      //   setMessage(error);

      //   return;
      // }

      fetch("http:/localhost:8000/movies/json")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(console.log)
      // console.log(res);
      // inputEl.current.value = "";
      // setMessage("Success! 🎉 You are now subscribed to the newsletter.");
    });
  });
};

export { FormSection };
