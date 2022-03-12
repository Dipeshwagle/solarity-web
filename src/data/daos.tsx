import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery } from "modal/Gallery";
import { Post } from "modal/post";

export const HERO_DATA: HeroProps = {
  imageUrl: "/images/placeholder/post/post_one.png",
  content: {
    title: "Money Boy Verse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget quisque pharetra, nisl. Nisl a proin a commodo libero purus duis. Leo, condimentum viverra mattis feugiat egestas est at nec. Praesent vitae fames feugiat diam mauris. Fringilla posuere quam enim id urna. Arcu, ut magna cursus pharetra semper a.",
    buttonText: "Join Now",
    buttonLink: "/join-now",
  },
};

export const TAGS: TagsLinkCollectionProps = {
  tags: [
    {
      label: "Home",
      link: "/daos",
    },
    {
      label: "Voting",
      link: "/daos/voting",
    },
    {
      label: "Members",
      link: "/daos/members",
    },
    {
      label: "World",
      link: "/daos/world",
    },
    {
      label: "Vault",
      link: "/daos/vault",
    },
    {
      label: "Infra",
      link: "/daos/infra",
    },
  ],
};

export const GALLERY: Gallery = {
  rows: [
    {
      title: "Mansions",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/three.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Avatars",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_three.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Apps",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/seven.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/eight.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/nine.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
  ],
};

export const POSTS: Post[] = [
  {
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
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
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
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
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "🦅 Announcements: The Eagle Voice",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
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
];
