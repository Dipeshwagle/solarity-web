import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery } from "modal/Gallery";
import { Post } from "modal/post";
import { MembersListProps } from "components/MembersList";

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
    {
      label: "Marketplace",
      link: "/daos/marketplace",
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

export const Members: MembersListProps[] = [
  {
    title: "Money Boy of the month",
    members: [
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/one.png",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/two.png",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/three.png",
      },
    ],
  },
  {
    title: "Most active money boys",
    members: [
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/four.png",
        points: "+ 124",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/five.png",
        points: "+ 652",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/six.png",
        points: "+ 145",
      },
    ],
  },
  {
    title: "Vote your favorite Money Boy",
    vote: true,
    members: [
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/four.png",
        points: "+ 145",
        votes:'100',
        voteColor: "warning",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/five.png",
        points: "+ 652",
        votes:'70',
        voteColor:"info"
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/six.png",
        points: "+ 652",
        votes:'50',
        voteColor:"general"
      },
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/four.png",
        points: "+ 145",
        votes:'45',
        voteColor:"general"
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/five.png",
        points: "+ 652",
        votes:'40',
        voteColor:"general"
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/six.png",
        points: "+ 652",
        votes:'30',
        voteColor:"general"
      },
    ],
  },
];