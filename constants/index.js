const PROJECT_NAME = "Orbit Folio";

const BASE_WEBSITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "") + "/";
const BASE_GITHUB_URL = "https://github.com/hamzabounibanedz";
const BASE_GITHUB_PROJECT_URL = BASE_GITHUB_URL + "/orbit-folio";

export {
  PROJECT_NAME,
  BASE_WEBSITE_URL,
  BASE_GITHUB_URL,
  BASE_GITHUB_PROJECT_URL,
};
