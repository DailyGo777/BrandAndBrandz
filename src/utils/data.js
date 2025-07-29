import { Linkedin } from "lucide-react";
import Link from "next/link";

export const services = [
  {
    title: "BTL & Outdoor Advertising",
    details: [
      "Outdoor Flex Printing & Installation",
      "Hoardings, Banners, Standees",
      "Bus Wrap Branding",
      "Cab Wrap Branding",
    ],
    image: "/btlandAD_img.svg",
  },
  {
    title: "Digital & Social Media Marketing",
    details: [
      "Social Media Management & Growth",
      "Paid Ad Campaigns (Meta, Google)",
      "Influencer Marketing & Tie-ups",
      "WhatsApp & Email Promotions",
    ],
    image: "/socialMedia_img.svg",
  },
  {
    title: "Website & SEO",
    details: [
      "Website Design & Development",
      "SEO for Google Ranking",
      "Landing Pages for Leads",
      "E-commerce Website Solutions",
    ],
    image: "/website_img.svg",
  },
  {
    title: "Branding & Creative Design",
    details: [
      "Logo & Identity Design",
      "Brochures, Flyers, Posters",
      "Creative Videos, Reels & Motion Graphics",
      "Copywriting & Ad Content",
    ],
    image: "/brandAndLogo_img.svg",
  },
  {
    title: "Event Manpower & Promotions",
    details: [
      "Event Crew, Promoters & Volunteers",
      "Product Sampling & Roadshows",
      "Mall & Society Activations Stall",
      "Setup & On-Ground Execution",
    ],
    image: "/manPower_img.svg",
  },
  {
    title: "Strategy, Research & Reporting",
    details: [
      "Market Research & Audience Targeting",
      "Campaign Planning & Budgeting",
      "Daily/Weekly Reports & ROI Tracking",
    ],
    image: "/research_img.svg",
  },
];

export const clients = [
  // {
  //   image: "/tata.svg",
  // },
  // {
  //   image: "/bisleri.svg",
  // },
  {
    image: "/delhivery.svg",
  },
  {
    image: "/unacademy.svg",
  },
  {
    image: "/rapido.svg",
  },
  {
    image: "/Pincode.svg",
  },
  {
    image: "/Snabit.svg",
  },
  {
    image: "/swish.svg",
  },
  {
    image: "/bistro.svg",
  },
  {
    image: "/adukale.svg",
  },
  {
    image: "/tumbledry.svg",
  },
  {
    image: "/intune.svg",
  },
  {
    image: "/sip_abacus.svg",
  },
  {
    image: "/malpe_meat.svg",
  },
];

export const teams = [
  {
    title: "Karthik L",
    sub_title: "Co-Founder and CEO",
    description:
      "Leads the team with vision and determination, driving overall leadership, innovation, and strategic growth for the company.",
    image: "/karthik.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/karthik-l-6b8610325/"} target="_blank" rel="noopener noreferrer" >
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Sheetal Chougule",
    sub_title: "Co-Founder & Managing Director",
    description:
      "A strategic marketer  combining creativity with discipline to drive impactful campaigns and business stability",
    image: "/sheetal.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/sheetal-chougule-677a5b20a/"} target="_blank" rel="noopener noreferrer">
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Shivaraj",
    sub_title: "Co-Founder & CCO",
    description:
      "A creative leader blending strategy with design driving brand identity, clear messaging, and fresh marketing ideas for growth.",
    image: "/shivaraj.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/shivarajpattar/"} target="_blank" rel="noopener noreferrer">
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Harshavardhan Pattar",
    sub_title: "Business Development Head",
    description:
      "Focuses on expanding opportunities and building strategic partnerships that fuel the company’s long-term growth.",
    image: "/harsha.svg",
    logo: (
      <Link
        href={"https://www.linkedin.com/in/harshavardhan-pattar-012742240/"} target="_blank" rel="noopener noreferrer"
      >
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Farzan Khan",
    sub_title: "Strategy Director & CFO",
    description:
      "Crafts smart, data-driven strategies that align creative ideas with business goals, ensuring every move delivers measurable results.",
    image: "/farzan.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/farzan-khan-12ba02274/"} target="_blank" rel="noopener noreferrer">
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Uday Gowda",
    sub_title: "Ground Operations Manager",
    description:
      "Ensures flawless execution on the ground, managing logistics, event setups, and campaign activations with precision and reliability.",
    image: "/uday.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/udaya-gowda-950725287/"} target="_blank" rel="noopener noreferrer">
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
  {
    title: "Channabasava Halemani",
    sub_title: "Technical Executive",
    description:
      "Handles tech operations, ensuring smooth support, development and system management.",
    image: "/channa.svg",
    logo: (
      <Link href={"https://www.linkedin.com/in/channabasava-halemani"} target="_blank" rel="noopener noreferrer" >
        <Linkedin size={30} color="black" />
      </Link>
    ),
  },
];
