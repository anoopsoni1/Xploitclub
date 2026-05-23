import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: ["dist/**", "node_modules/**", ".next/**", "src/**"],
  },
];

export default config;
