const postModules = import.meta.glob("../content/writing/*.md", { eager: true });

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

export function slugFromTitle(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getWritingPosts() {
  return Object.entries(postModules)
    .map(([path, module]) => ({
      ...module.frontmatter,
      href: `/writing/${slugFromTitle(module.frontmatter.title) || slugFromPath(path)}`,
      year: new Date(module.frontmatter.date).getFullYear()
    }))
    .filter((post) => post.published !== false);
}
