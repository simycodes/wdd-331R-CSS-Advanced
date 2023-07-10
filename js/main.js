
const links = [
    {
      label: "Week-2: CSS Selectors",
      url: "week-2/index.html"
    },
     {
      label: "Week-3: SCSS Sass",
      url: "week-3/index.html"
    },
    {
      label: "Week-4: Atomic Design Approach To Web Development",
      url: "week-4/index.html"
    },
    {
      label: "Week-5: Flexbox",
      url: "week-5/index.html"
    },
     {
      label: "Week-6: Transitions and Animations",
      url: "week-6/index.html"
    },
    {
      label: "Week-7: CSS Grid",
      url: "week-7/index.html"
    },
    {
      label: "Week-8: notes",
      url: "week-8/index.html"
    },
    {
      label: "Week-9: notes",
      url: "week-9/index.html"
    },
     {
      label: "Week-8: Shapes(Border Radius) and Gradients",
      url: "week-8/index.html"
    },
    {
      label: "Week-9: CSS Typography",
      url: "week-9/index.html"
    },
    {
      label: "Week-10: Custom Properties and Functions",
      url: "week-10/index.html"
    },
    {
      label: "Week-11: Debugging and Optimization",
      url: "week-11/index.html"
    },
    {
      label: "Week-12: Tech Module: CSS Architecture and Component Based Design ",
      url: "week-12/index.html"
    },
    // {
    //   label: "Week-13 notes",
    //   url: "week-13/index.html"
    // },
]


function loadIndex() {
  const ol = document.querySelector('#links-list');

  links.forEach(link => {
    const li = document.createElement('li');
    const notesLinkElement = document.createElement('a');
    notesLinkElement.setAttribute('href', link.url);
    notesLinkElement.innerText = link.label;

    li.appendChild(notesLinkElement);
    ol.appendChild(li);
  })
}
