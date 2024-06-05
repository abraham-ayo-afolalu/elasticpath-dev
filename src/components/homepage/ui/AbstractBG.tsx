import React from "react";

const SVGs = () => (
  <div className="z-0 fixed w-[100vw] h-[100vh] blur-[10rem] opacity-95">
    {/*left orange blob*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="922"
      height="1108"
      fill="none"
      viewBox="0 0 922 1108"
      className="absolute z-10 animate-[pulse_20s_ease_infinite] opacity-60 w-full -left-1/2 scale-85"
    >
      <path
        fill="#E7B1C8"
        d="m701.902 1088.46 216.121-439.568c3.703-7.532 4.469-16.034 2.141-23.754L738.104 21.491C733.722 6.961 719.445-1.736 704.146.804L179.315 87.936c-12.706 2.109-23.387 11.567-27.149 24.04L2.129 609.394a32.735 32.735 0 0 0-1.312 12.083l20.322 251.437c2.184 27.029 35.038 37.246 54.313 16.89l253.822-268.06c15.04-15.884 40.193-13.78 50.44 4.218l265.784 466.858c12.382 21.75 44.8 19.24 56.404-4.36Z"
      />
    </svg>
    {/*Blue blob*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1191"
      height="2709"
      fill="none"
      viewBox="0 0 1191 2709"
      className="absolute z-10 animate-[spin_50s_reverse_linear_infinite] opacity-60 w-full left-1/3"
    >
      <g fill="#0085FF" opacity=".8">
        <path d="M-145.955 205.654C-80.129 1.122 553.258-80.515 650.966 103.278c3.841 7.226 3.433 16.044.067 23.929L331.264 876.324c-10.355 24.259-42.913 28.464-56.409 7.286l-417.438-655.067c-4.266-6.694-5.916-14.984-3.372-22.889ZM1146.26 789.52l44.41 1071.24c.88 21.26-18.87 38.64-39.52 34.78l-424.097-79.28c-14.801-2.77-24.962-15.8-24.26-31.12l42.1-918.194c.698-15.224 11.939-28.495 26.904-31.765l337.583-73.751c18.85-4.119 36.09 9.01 36.88 28.09ZM555.441 1978.13 282.42 2686.76c-11.587 30.08-54.094 29.2-60.861-1.25l-119.461-537.57c-1.971-8.87.007-18.39 5.428-26.14l373.522-533.66c17.742-25.35 56.06-16.17 57.628 13.8l18.959 362.6c.239 4.58-.509 9.21-2.194 13.59Z" />
      </g>
    </svg>
    {/*Purple geometrics*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1561"
      height="1620"
      fill="none"
      viewBox="0 0 1561 1620"
      className="absolute z-10 animate-[spin_60s_linear_infinite] opacity-60 w-full"
    >
      <path
        fill="#9800A7"
        d="M.22 1359.34 42.692 33.953C43.765.467 88.771-11.828 103.321 17.39l379.317 761.704c5.33 10.702 3.924 23.89-3.62 33.972L57.228 1376.75c-19.05 25.46-58 13.56-57.008-17.41ZM1445.32 824.587l235.62-364.146c16.98-26.249 56.19-18.044 58.3 12.203l43.05 615.426c.36 5.04-.49 10.16-2.48 14.94l-205.3 495.19c-6.38 15.39-22.98 24.17-38.55 20.41l-173-41.77c-11.5-2.77-20.09-11.91-22.23-23.63l-131.8-722.664c-4.37-23.972 19.03-45.274 42.15-38.373l157.05 46.873c13.73 4.098 29.03-1.853 37.19-14.459ZM449.764 1065.12l342.077 6.87c16.936.34 31.959-12.75 34.18-29.77l90.434-693.265c4.435-33.998-39.711-47.833-58.333-18.281l-432.51 686.386c-13.32 21.14-.036 47.57 24.152 48.06Z"
      />
    </svg>
    {/*Orange blob*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="572"
      height="605"
      fill="none"
      viewBox="0 0 572 605"
      className="absolute z-10 animate-[bounce_10s_ease_infinite] opacity-60 w-full top-1/4"
    >
      <path
        fill="#E7ADAD"
        d="M381.157 32.332c19.849-6.124 128.173 220.01 187.527 350.513 5.32 11.698 2.684 25.828-6.541 35.722L425.561 565.054c-5.913 6.342-13.933 10.23-22.334 10.823L-.809 604.374c-14.716 1.038-96.98-146.043-143.684-233.454-5.435-10.173-4.595-22.869 2.126-32.992L71.567 15.751C78.93 4.664 91.914-1.264 104.545.689c95.448 14.76 257.237 37.62 276.612 31.643Z"
        opacity=".8"
      />
    </svg>
  </div>
);

export default function () {
  return (
    <div className="z-0 fixed w-[100vw] h-[100vh] top-0 dark:bg-[url('/assets/homepage/abstract-bg.webp')] bg-center bg-no-repeat bg-cover blur-lg opacity-95"></div>
    // SVG based animated solution, removed for now for performance concerns
    // <SVGs />
  );
}
