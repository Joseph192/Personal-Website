export const site = {
  name: "Joseph Zhou",
  title: "Student Developer",
  description: "Personal writing and project portfolio.",
  location: "California",
  email: "jhzhou@caltech.edu",
  instagram: "https://instagram.com/yourusername",
  github: "",
  linkedin: "https://www.linkedin.com/in/joseph-zhou-165428303/",
  resume: ""
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Writing", href: "/writing" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" }
];

export const intro = {
  eyebrow: site.title,
  heading: site.name,
  body: "I am building this site as a home for short essays, learning notes, and project writeups. It is intentionally simple while the content and structure take shape.",
  primaryAction: { label: "View projects", href: "/projects" },
  secondaryAction: { label: "Read writing", href: "/writing" }
};

export const writingPage = {
  title: "Writing",
  description: "Short notes about what I am learning, building, and thinking through."
};

export const projectsPage = {
  title: "Projects",
  description: "A small portfolio of projects, experiments, and work in progress."
};
