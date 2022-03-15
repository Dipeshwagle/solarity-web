import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery, GalleryLand } from "modal/Gallery";
import { Post } from "modal/post";
import { MembersListProps } from "components/MembersList";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps } from "components/Tables/Transfer";
import { ContractProps } from "components/Contracts";

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
      link: "/daos/market",
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
        votes: "100",
        voteColor: "warning",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/five.png",
        points: "+ 652",
        votes: "70",
        voteColor: "info",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/six.png",
        points: "+ 652",
        votes: "50",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/four.png",
        points: "+ 145",
        votes: "45",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/five.png",
        points: "+ 652",
        votes: "40",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/six.png",
        points: "+ 652",
        votes: "30",
        voteColor: "general",
      },
    ],
  },
];

export const WORLD_GALLERY: GalleryLand = {
  rows: [
    {
      title: "Highlighted Lands:",
      items: [
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/one.png",
        },
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/two.png",
        },
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/three.png",
        },
      ],
    },
  ],
};

export const TOKEN_BALANCES: TokenBalancesProps = {
  title: "Token Balances",
  tokens: [
    {
      title: "ETH",
      imageUrl: "/images/icons/tokens/eth.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ANJ",
      imageUrl: "/images/icons/tokens/anj.png",
      volume: "400000.1",
    },
    {
      title: "ANT",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DAI",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/sol.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
    {
      title: "ETH",
      imageUrl: "/images/icons/tokens/eth.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ANJ",
      imageUrl: "/images/icons/tokens/anj.png",
      volume: "400000.1",
    },
    {
      title: "ANT",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DAI",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/sol.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
  ],
};

export const TRANSFER_TABLE_PROPS: TransferTableProps = {
  rows: [
    {
      date: "04/02/20",
      source: "Luise ( Association ...)",
      reference: "Exchange : KYC Deposit for Kyber fees",
      amount: "+10585.73003 KNC",
      type: "plus",
    },
    {
      date: "04/02/20",
      source: "0xffd0456704...10.....",
      reference: "ANT buyback:Keyrock inventory (ETH)",
      amount: "-670 ETH",
      type: "minus",
    },
    {
      date: "04/02/20",
      source: "Luise ( Association ...)",
      reference: "Exchange : KYC Deposit for Kyber fees",
      amount: "+10585.73003 KNC",
      type: "plus",
    },
    {
      date: "04/02/20",
      source: "0xffd0456704...10.....",
      reference: "ANT buyback:Keyrock inventory (ETH)",
      amount: "-670 ETH",
      type: "minus",
    },
  ],
};

export const INFRA_CONTRACTS: ContractProps[] = [
  {
    avatartImage: "/images/placeholder/daos/infra/avatart.png",
    title: "Build a new website",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/daos/infra/avatart.png",
    title: "Build a new website",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
];
