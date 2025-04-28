// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications and preprints in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here is a short CV. You can access my full academic CV by clicking on the PDF icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-just-returned-from-a-4-month-visit-with-giole-zardini-at-mit-will-miss-the-people-but-not-the-10-c-snowflake-snowman-snowflake",
          title: 'Just returned from a 4-month visit with Giole Zardini at MIT. Will miss...',
          description: "",
          section: "News",},{id: "news-check-out-my-new-preprint-composable-uncertainty-in-symmetric-monoidal-categories-for-design-problems-with-yujun-huang-and-gioele-zardini",
          title: 'Check out my new preprint “Composable Uncertainty in Symmetric Monoidal Categories for Design...',
          description: "",
          section: "News",},{id: "news-new-paper-multivariable-prediction-model-for-suspected-ocular-myasthenia-gravis-development-and-validation-with-armin-handzic-and-konrad-weber-i-coded-the-bayesian-network-model-that-is-available-here",
          title: 'New paper Multivariable Prediction Model for Suspected Ocular Myasthenia Gravis: Development and Validation...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MariusFurter", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6776-0704", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@mariusfurter", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
