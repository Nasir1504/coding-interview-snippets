import React, { useRef, useState, useEffect } from "react";

const OTPInput = ({ length = 4, onComplete }) => {
  const inputRef = useRef([]);
  const [OTP, setOTP] = useState(Array(length).fill(""));

  // Auto-focus first input on mount
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const input = e.target.value;

    // Allow only digits
    if (!/^[0-9]?$/.test(input)) return;

    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    // ✅ Use small delay to let next input enable first, then focus
    if (input && index < length - 1) {
      setTimeout(() => {
        inputRef.current[index + 1]?.focus();
      }, 10);
    }

    // ✅ Trigger onComplete when all inputs filled
    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus back on Backspace if previous exists
    if (e.key === "Backspace" && !OTP[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index) => {
    // Prevent focusing next input if previous inputs are empty
    for (let i = 0; i < index; i++) {
      if (!OTP[i]) {
        inputRef.current[i]?.focus();
        return;
      }
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => handleFocus(index)}
          ref={(ref) => (inputRef.current[index] = ref)}
          disabled={index > 0 && !OTP[index - 1]}
          className={`w-12 h-12 text-center text-xl border rounded outline-none transition-all
            ${
              index > 0 && !OTP[index - 1]
                ? ""
                : "focus:border-blue-600"
            }
          `}
        />
      ))}
    </div>
  );
};

function OTPComp() {
  const handleComplete = (pin) => {
    console.log("OTP entered:", pin);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-semibold mb-5">Enter OTP</h2>
      <OTPInput length={4} onComplete={handleComplete} />
    </div>
  );
}

export default OTPComp;
export { OTPInput };
