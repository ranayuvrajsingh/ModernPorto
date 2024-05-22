export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Loom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Loom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "https://loomcall.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Stellar Styles",
    des: "Stellar Styles is a sleek web app with advanced search, secure payments, and a robust admin dashboard for managing inventory and orders. Full-stack for optimal performance and scalability",
    img: "/Ecoom.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/nextjs.svg",
    ],
    link: "https://stellarstyles.vercel.app/",
  },
  {
    id: 3,
    title: "CityScope",
    des: "Cityscope is a web app offering tours, travel insights, city glimpses of Rajasthan, and daily news and articles by city. It features secure payments and scalability for optimal performance.",
    img: "CityScopeCrop.png",
    iconLists: [
      "/re.svg",
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/c.svg",
    ],
    link: "https://www.cityscope.media/",
  },
  {
    id: 4,
    title: "IShowSpeed Modern Reactjs",
    des: "iShowSpeed is a responsive web app showcasing car models. It offers a sleek, user-friendly design for browsing and purchasing vehicles, with secure payments and scalability.",
    img: "/iShowSpeed.png",
    iconLists: [
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "https://ishowspeed-ten.vercel.app/?limit=20",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Yuvraj was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yuvraj's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yuvraj is the ideal partner.",
    name: "Sarah Williams",
    title: "CEO of TechNova Solutions",
  },
  {
    quote:
      "Yuvraj's ability to understand our needs and deliver outstanding results on time was remarkable. His dedication and expertise were critical in making our project a success. Highly recommended!",
    name: "David Smith",
    title: "CTO of GreenWave Innovations",
  },
  {
    quote:
      "Working with Yuvraj has been a game-changer for our business. His insights and professional approach helped us achieve our goals efficiently. His enthusiasm is infectious and his skills are top-notch.",
    name: "Emma Johnson",
    title: "Marketing Director at Stellar Digital",
  },
  {
    quote:
      "Yuvraj is an exceptional developer with a keen eye for detail. His work on our website was exemplary, showcasing his technical prowess and creativity. A fantastic partner for any project.",
    name: "James Brown",
    title: "Head of Product at InnovateX",
  },
  {
    quote:
      "Yuvraj brought a fresh perspective and unparalleled expertise to our project. His commitment to excellence and ability to deliver high-quality results made a significant impact on our brand's online presence.",
    name: "Olivia Martinez",
    title: "Founder of CreativeWorks Studio",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ranayuvrajsingh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ranayuvrajsingh/",
  },
  {
    id: 4,
    img: "/resume.svg",
    link: "https://drive.google.com/file/d/1pWfdNBRzGAYbSYUj1YatAmRMbwEc_IDS/view?usp=sharing",
  },
];
