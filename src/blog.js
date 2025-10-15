var blogs = [
    {
        title: "Bootcamp",
        date: "10/13/2025",
        description: "Starting to revamp the site with Typescript, pretty cool.",
        image: "/assets/personal_site_env_starter_pack.png",
        imageAlt: "Screenshot of my site's home page once I finished the starter pack.",
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
function createBlogDiv(blogEntry) {
    var newBlogDiv = document.createElement("div");
    newBlogDiv.className = "blog-entry";
    newBlogDiv.setAttribute("onclick", "window.location.href='/blogs/".concat(blogEntry.slug, ".html';"));
    var title = document.createElement("h2");
    title.className = "blog-entry-title";
    title.innerHTML = blogEntry.title;
    newBlogDiv.appendChild(title);
    var date = document.createElement("h3");
    date.className = "blog-entry-date";
    date.innerHTML = blogEntry.date;
    newBlogDiv.appendChild(date);
    var image = document.createElement("img");
    image.className = "blog-entry-image";
    image.src = blogEntry.image;
    image.alt = blogEntry.imageAlt;
    newBlogDiv.appendChild(image);
    var description = document.createElement("p");
    description.className = "blog-entry-description";
    description.innerHTML = blogEntry.description;
    newBlogDiv.appendChild(description);
    return newBlogDiv;
}
var blogContainer = document.getElementById("blog-container");
// add all blog entries to DOM within blogContainer div
for (var _i = 0, blogs_1 = blogs; _i < blogs_1.length; _i++) {
    var blogEntry = blogs_1[_i];
    var newBlogDiv = createBlogDiv(blogEntry);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
}
