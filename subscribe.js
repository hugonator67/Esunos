/* =============================================================
   ESUNOS — subscribe form (PLACEHOLDER)
   -------------------------------------------------------------
   This does NOT send data anywhere yet. It validates the email
   client-side and shows the success state so the page is fully
   demonstrable. Wire it to your email provider before launch.

   TO WIRE UP (pick one — see README.md):
     • Buttondown / Kit / Resend / beehiiv, etc.
     • Replace the body of `submitToProvider()` below with a
       fetch() to your provider's endpoint, OR point the <form>
       at the provider's hosted action and delete this handler.
   Do not hard-code API keys in this file — it ships to the
   browser. Use the provider's public embed/form action, or a
   Netlify Function / serverless proxy for anything secret.
   ============================================================= */
(function () {
  "use strict";

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * PLACEHOLDER submit. Returns a resolved promise.
   * Swap this out for a real request to your ESP.
   */
  function submitToProvider(email) {
    // Example shape for later:
    //   return fetch("https://api.your-esp.example/subscribe", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email: email })
    //   });
    return Promise.resolve({ ok: true, placeholder: true, email: email });
  }

  function handle(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input) return;

      var email = input.value.trim();
      if (!EMAIL_RE.test(email)) {
        input.setAttribute("aria-invalid", "true");
        input.focus();
        return;
      }
      input.removeAttribute("aria-invalid");

      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;

      submitToProvider(email).then(function () {
        form.classList.add("is-success"); // reveals the aria-live message
      }).catch(function () {
        if (button) button.disabled = false;
        input.setAttribute("aria-invalid", "true");
      });
    });
  }

  document.querySelectorAll(".signup").forEach(handle);
})();
