/**
 * @property {string} title - blog entry title
 * @property {string} date - date blog entry was made
 * @property {string} description - blog entry body
 * @property {string} image - path to an image asset used in the blog entry
 * @property {string} imageAlt - image description
 * @property {string} slug - URL to another page for this entry
 */
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // a slug is a URL name used to redirect to a specific page
};

const blogs: Blog[] = [
  {
    title: "Bootcamp",
    date: "10/13/2025",
    description: "Starting to revamp the site with Typescript, pretty cool.",
    image: "/assets/personal_site_env_starter_pack.png",
    imageAlt:
      "Screenshot of my site's home page once I finished the starter pack.",
    slug: "bootcamp",
  },
  {
    title: "Hello world",
    date: "10/06/2025",
    description: "Wow it's hard to make a site look nice with html and CSS.",
    image: "/assets/wip_personal_site.jpg",
    imageAlt: "Screenshot of start of webpage.",
    slug: "hello-world",
  },
];

/**
 * Create a new div element instance with the blog entry from a Blog object.
 * @param {Blog} blogEntry - blog instance to create as a html div.
 * @returns {HTMLDivElement} - The generated div element.
 */
function createBlogDiv(blogEntry: Blog): HTMLDivElement {
  const newBlogDiv = document.createElement("div");
  newBlogDiv.className = "blog-entry";
  newBlogDiv.setAttribute(
    "onclick",
    `window.location.href='/blogs/${blogEntry.slug}.html';`
  );

  const title = document.createElement("h2");
  title.className = "blog-entry-title";
  title.innerHTML = blogEntry.title;
  newBlogDiv.appendChild(title);

  const date = document.createElement("h3");
  date.className = "blog-entry-date";
  date.innerHTML = blogEntry.date;
  newBlogDiv.appendChild(date);

  const image = document.createElement("img");
  image.className = "blog-entry-image";
  image.src = blogEntry.image;
  image.alt = blogEntry.imageAlt;
  newBlogDiv.appendChild(image);

  const description = document.createElement("p");
  description.className = "blog-entry-description";
  description.innerHTML = blogEntry.description;
  newBlogDiv.appendChild(description);

  return newBlogDiv;
}

const blogContainer = document.getElementById("blog-container");

// add all blog entries to DOM within blogContainer div
for (const blogEntry of blogs) {
  let newBlogDiv = createBlogDiv(blogEntry);
  blogContainer?.appendChild(newBlogDiv);
}
