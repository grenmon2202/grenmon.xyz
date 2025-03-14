export const SITE = {
  website: "https://grenmon2202.github.io", // replace this with your deployed domain
  base: "grenmon.xyz",
  output: "static",
  author: "Grenmon",
  profile: null,
  desc: "Grenmon/Harsh Meena's personal website.",
  title: "Grenmon",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,

  editPost: {
    url: "https://github.com/grenmon2202/grenmon.xyz/edit/main/src/content/posts/", // Change to your repo path
    appendFilePath: true,
    text: "Edit",
  },
} as const;
