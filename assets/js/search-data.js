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
          description: "You can also browse my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-began-my-part-time-internship-at-north-american-electric-reliability-corporation-nerc-in-the-advanced-system-analytics-amp-amp-modeling-asam-department",
          title: 'Began my part-time internship at North American Electric Reliability Corporation (NERC) in the...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-the-23rd-power-systems-computational-conference-pscc-to-appear-in-electric-power-systems-research",
          title: 'Two papers accepted to the 23rd Power Systems Computational Conference (PSCC), to appear...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-the-ieee-transactions-on-power-systems",
          title: 'Paper accepted to the IEEE Transactions on Power Systems.',
          description: "",
          section: "News",},{id: "news-began-my-summer-internship-at-dominion-energy-in-the-electric-transmission-strategic-initiatives-group",
          title: 'Began my summer internship at Dominion Energy in the Electric Transmission Strategic Initiatives...',
          description: "",
          section: "News",},{id: "news-defended-my-ph-d-proposal-and-became-a-phd-candidate",
          title: 'Defended my Ph.D. proposal and became a PhD candidate.',
          description: "",
          section: "News",},{id: "news-received-my-second-msc-degree-in-electrical-and-computer-engineering-from-the-georgia-institute-of-technology",
          title: 'Received my second MSc degree in Electrical and Computer Engineering from the Georgia...',
          description: "",
          section: "News",},{id: "news-awarded-the-dominion-energy-inclusion-equity-and-diversity-scholarship-for-the-second-time",
          title: 'Awarded the Dominion Energy Inclusion, Equity, and Diversity Scholarship for the second time....',
          description: "",
          section: "News",},{id: "news-defended-my-ph-d-dissertation-improving-power-system-approximations-through-machine-learning-inspired-optimization-methods",
          title: 'Defended my Ph.D. dissertation: Improving Power System Approximations Through Machine Learning-Inspired Optimization Methods...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-the-ieee-transactions-on-power-systems",
          title: 'Paper accepted to the IEEE Transactions on Power Systems.',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-the-ieee-transactions-on-smart-grid",
          title: 'Paper accepted to the IEEE Transactions on Smart Grid.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
