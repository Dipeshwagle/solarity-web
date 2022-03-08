import { Post } from "modal/post";

export const POSTS: Post[] = [
  {
    title: "Financial Proposal: DAOstar One",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    type: "featured",
    vr: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
  {
    title: "Come Visit my place at <span class='text-secondary'> London</span>",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    tags: [
      {
        title: "London",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
  {
    title: "Tech Sub-DAO decisions",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    tags: [
      {
        title: "London",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
];

export const TAGS = [
  "All",
  "Blockchain",
  "Tweets",
  "Your DAOs",
  "Mints",
  "Votes",
  "Proposals",
];

export const MY_DAOS = [
  {
    title: "Club Noriega",
    imageUrl: "/images/placeholder/your-dao/Club Noriega.png",
    link: "/dao/club-noriega",
  },
  {
    title: "Taraval Lounge",
    imageUrl: "/images/placeholder/your-dao/Taraval Lounge.png",
    link: "/dao/taraval-lounge",
  },
  {
    title: "Taraval Lounge",
    imageUrl: "/images/placeholder/your-dao/Pacheco Crew.png",
    link: "/dao/pacheco-crew",
  },
  {
    title: "Club Noriega",
    imageUrl: "/images/placeholder/your-dao/Club Noriegaa.png",
    link: "/dao/club-noriega",
  },
];
