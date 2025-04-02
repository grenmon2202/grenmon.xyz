export const SITE = {
  website: "https://grenmon.xyz", // replace this with your deployed domain
  author: "Grenmon",
  profile: null,
  desc: "Grenmon/Harsh Meena's personal website.",
  title: "Grenmon",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  galleryPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,

  editPost: {
    url: "", // Change to your repo path
    appendFilePath: true,
    text: "Edit",
  },
} as const;
