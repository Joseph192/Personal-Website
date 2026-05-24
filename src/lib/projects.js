const projectModules = import.meta.glob("../content/projects/*.md", { eager: true });

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

export function getProjects() {
  return Object.entries(projectModules)
    .map(([path, module]) => ({
      href: `/projects/${slugFromPath(path)}`,
      ...module.frontmatter
    }));
}
