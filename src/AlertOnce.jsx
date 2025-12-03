import { useState, useEffect, useRef } from "react";

export function AlertOnce() {
  const [showAlert, setShowAlert] = useState(false);
  const doneBtnRef = useRef(null);

  useEffect(() => {
    const seen = localStorage.getItem("seenGithubAlert");
    if (!seen) setShowAlert(true);
  }, []);

  // Lock scroll and focus button safely
  useEffect(() => {
    if (showAlert) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // focus button safely
      if (doneBtnRef.current) doneBtnRef.current.focus();

      return () => {
        document.body.style.overflow = previousOverflow || "auto";
      };
    }
  }, [showAlert]);

  const closeAlert = () => {
    try {
      localStorage.setItem("seenGithubAlert", "true");
    } catch (e) {
      // ignore storage errors
    }
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="alert-title"
      aria-describedby="alert-desc"
    >
      <div
        className="
          bg-[#0D1117] border border-neutral-700 text-neutral-200
          rounded-xl shadow-lg text-center

          /* sizing & responsive */
          w-full max-w-xs      /* tiny phones */
          sm:max-w-sm          /* small phones */
          md:max-w-md          /* tablets */
          lg:max-w-lg          /* desktop */

          p-4 sm:p-6           /* responsive padding */
        "
      >
        <h2 id="alert-title" className="font-bold mb-2 text-lg sm:text-xl md:text-2xl">
          Heads up!
        </h2>

        <p id="alert-desc" className="mb-4 text-sm sm:text-base">
          This is just a <strong>GitHub clone portfolio</strong>, not the real GitHub website.
        </p>

        <div className="flex justify-center">
          <button
            ref={doneBtnRef}
            onClick={closeAlert}
            className="
              px-4 py-2 rounded-lg
              bg-blue-600 text-white font-medium
              w-full sm:w-auto
            "
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
