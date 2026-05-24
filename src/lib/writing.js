const postModules = import.meta.glob("../content/writing/*.md", { eager: true });

const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

function dateParts(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return { year, month, day };
}

export function formatWritingDate(dateString) {
  const { year, month, day } = dateParts(dateString);

  if (!year || !month || !day) {
    return dateString;
  }

  return `${monthNames[month - 1]} ${day}, ${year}`;
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
      displayDate: formatWritingDate(module.frontmatter.date),
      year: new Date(module.frontmatter.date).getFullYear()
    }))
    .filter((post) => post.published !== false);
}
