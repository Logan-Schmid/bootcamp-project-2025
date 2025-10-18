/**
 * @property {string} title - blog entry title
 * @property {string} date - date blog entry was made
 * @property {string} description - blog entry body
 * @property {string} image - path to an image asset used in the blog entry
 * @property {string} imageAlt - image description
 * @property {string} slug - URL to another page for this entry
 */
export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // a slug is a URL name used to redirect to a specific page
}

const blogs: Blog[] = [
  {
    title: "Bootcamp Milestone 1",
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
