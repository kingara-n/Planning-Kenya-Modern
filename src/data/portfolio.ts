import { categories } from "@/data/portfolio";

export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  img: string;
  shortDescription: string;
  description: string;
  gallery: string[];
};

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    slug: "arts-and-culture",
    title: "Arts and Culture",
    blurb: "Landmark cultural institutions and spaces.",
    projects: [
      {
        slug: "nairobi-museum-2005-2010",
        title: "Nairobi Museum, 2005 - 2010",
        type: "Arts and Culture",
        location: "Kenya",
        year: "2005-2010",
        img: "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/NAIROBI MUSEUM, 2005 - 2010/IMAGES/NAIROBI MUSEUM EXTERIOR.jpg",
        shortDescription: "A landmark redevelopment of Kenya\u0027s national museum, blending heritage preservation with contemporary exhibition spaces.",
        description: "The redevelopment of the Nairobi National Museum was a significant project that required a sensitive balance between preserving the historic 1929 building and creating state-of-the-art galleries for the 21st century. Planning Systems led the multi-disciplinary team to deliver a project that has revitalized the museum, making it a key cultural destination in East Africa.",
        gallery: [
          "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/NAIROBI MUSEUM, 2005 - 2010/IMAGES/NAIROBI MUSEUM EXTERIOR.jpg",
          "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/NAIROBI MUSEUM, 2005 - 2010/IMAGES/GALLERY VIEW.jpg"
        ]
      }
    ]
  },
  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    blurb: "Headquarters and workspace for leading organizations.",
    projects: [
      {
        slug: "im-bank-tower-2001",
        title: "I\u0026M Bank Tower, 2001",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2001",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I\u0026M BANK TOWER, 2001/IMAGES/I\u0026M BANK TOWER  RETOUCHED.jpg",
        shortDescription: "An iconic skyscraper in Nairobi\u0027s CBD, serving as the headquarters for I\u0026M Bank.",
        description: "The I\u0026M Bank Tower remains one of Nairobi\u0027s most recognizable landmarks. Completed in 2001, it represented a new era of office architecture in Kenya, combining advanced building services with a distinct architectural form that maximizes views and solar efficiency.",
        gallery: [
          "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I\u0026M BANK TOWER, 2001/IMAGES/I\u0026M BANK TOWER  RETOUCHED.jpg"
        ]
      }
    ]
  }
];
