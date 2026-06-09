// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-personal-website-officially-launched",
          title: 'Personal website officially launched! 🎉',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-to-iclr-2026-lmask-learn-to-solve-constrained-routing-problems-with-lazy-masking",
          title: 'New paper accepted to ICLR 2026 - “LMask: Learn to Solve Constrained Routing...',
          description: "",
          section: "News",},{id: "news-new-preprint-a-learning-method-with-gap-aware-generation-for-heterogeneous-dag-scheduling",
          title: 'New preprint - “A Learning Method with Gap-Aware Generation for Heterogeneous DAG Scheduling”...',
          description: "",
          section: "News",},{id: "news-new-preprint-learning-to-solve-the-quadratic-assignment-problem-with-warm-started-mcmc-finetuning",
          title: 'New preprint - “Learning to Solve the Quadratic Assignment Problem with Warm-Started MCMC...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%6F%75%68%61%69%6A%75%6E%32%34@%6D%61%69%6C%73.%75%63%61%73.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/HaijunZou-sms", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-1927-0333", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bdG-xWsAAAAJ", "_blank");
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
