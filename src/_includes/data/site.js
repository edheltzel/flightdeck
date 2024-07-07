const isDev = process.env.ENV === "development";

const baseUrl = isDev ? "localhost:8080" : "https://github.com"; // your website url goes here
const site = {
  baseUrl,
  title: "Flightdeck",
  description: "An opinionated starter project for Eleventy.",
  authorName: "Ed Heltzel",
  social: [
    {
      name: "Github",
      profile: "edheltzel",
    },
    {
      name: "LinkedIn",
      profile: "edheltzel",
    },
    {
      name: "Instagram",
      profile: "edheltzel",
    },
  ],
};

module.exports = site;
