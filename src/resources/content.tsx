import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ardi",
  lastName: "Ghifari",
  name: "Ardi Dzarghifari",
  role: "Student & Web Developer",
  avatar: "/images/avatar.jpg",
  email: "ardidzarghifari124@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Bahasa Indonesia", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6285697700019",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Portfolio – ${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Siswa SMK Telkom Jakarta & Web Developer</>,
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: (
    <>
      Siswa SMK Telkom Jakarta jurusan Rekayasa Perangkat Lunak. <br /> Memiliki ketertarikan pada bidang Fotografi, Desainer, dan Web Developer.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Tentang Saya",
    description: (
      <>
        Siswa SMK Telkom Jakarta jurusan Rekayasa Perangkat Lunak. Mempelajari bahasa pemrograman dasar seperti Python, Java, Java Script, C++ dan pemrograman web (HTML, CSS, PHP). Familiar dengan software penunjang rekap data seperti MS Word dan Excel.
      </>
    ),
  },
  work: {
    display: true,
    title: "Pengalaman (Kejuruan)",
    experiences: [
      {
        company: "SMK Telkom Jakarta",
        timeframe: "2023 - Present",
        role: "Student",
        achievements: [
          <>Mempelajari Elektronika dan Desain Grafis</>,
          <>Mempelajari Pemrograman Web dan Berorientasi Objek</>,
          <>Mempelajari Basis Data dan Pemrograman Perangkat Bergerak</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Pendidikan",
    institutions: [
      {
        name: "SMKS Telkom Jakarta",
        description: <>Jurusan Rekayasa Perangkat Lunak (2023 - Sekarang)</>,
      },
      {
        name: "SMP YAMIS JAKARTA",
        description: <>(2020 - 2023)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Keahlian",
    skills: [
      {
        title: "Bahasa Pemrograman",
        description: <>Python, Java, JavaScript, C++</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Web Development",
        description: <>HTML, CSS, PHP</>,
        tags: [],
        images: [],
      },
      {
        title: "Desain",
        description: <>Figma, Canva</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Database",
        description: <>Microsoft Office, MySQL</>,
        tags: [
          {
            name: "Database",
            icon: "supabase",
          }
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/acadtidur1.jpg",
      alt: "Foto Liburan di Bali",
      orientation: "horizontal", // atau "vertical"
    },
    {
      src: "/images/gallery/acadtidur2.jpg",
      alt: "Kucing Kesayangan",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
