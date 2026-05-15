export interface Adventure {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  location: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  duration: string;
}

export const adventures: Adventure[] = [
  {
    id: "1",
    title: "Mount Kenya Ascent",
    description: "Experience the thrill of climbing Africa's second highest peak.",
    image: "/assets/images/adventures/mt-kenya.jpg",
    slug: "mount-kenya-ascent",
    location: "Mount Kenya National Park",
    difficulty: "Challenging",
    duration: "5-7 Days",
  },
  {
    id: "2",
    title: "Maasai Mara Safari",
    description: "Witness the great migration and the big five in their natural habitat.",
    image: "/assets/images/adventures/maasai-mara.jpg",
    slug: "maasai-mara-safari",
    location: "Maasai Mara",
    difficulty: "Easy",
    duration: "3-5 Days",
  },
];
