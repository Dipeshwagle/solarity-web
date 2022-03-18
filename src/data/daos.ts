import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery, GalleryLand } from "modal/Gallery";
import { Post } from "modal/post";
import { MembersListProps } from "components/MembersList";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps } from "components/Tables/Transfer";
import { ContractProps } from "components/Contracts";
import { DaoCardProps } from "components/Cards/Dao";

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

export const INFRA_POSTS: Post[] = [
  {
    title: "Financial Proposal: DAOstar One",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    type: "featured",
    user: {
      avatar: "/images/placeholder/avatars/two.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/two.png",
      name: "MOney 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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

export const HOME_POSTS: Post[] = [
  {
    title: "Financial Proposal: DAOstar One",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    user: {
      avatar: "/images/placeholder/avatars/two.png",
      name: "Amari 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "Leonora 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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

export const TAGS: TagsLinkCollectionProps = {
  tags: [
    {
      label: "Home",
      link: "/daos/moneyboys",
    },
    {
      label: "Voting",
      link: "/daos/moneyboys/voting",
    },
    {
      label: "Members",
      link: "/daos/moneyboys/members",
    },
    {
      label: "World",
      link: "/daos/moneyboys/world",
    },
    {
      label: "Vault",
      link: "/daos/moneyboys/vault",
    },
    {
      label: "Infra",
      link: "/daos/moneyboys/infra",
    },
    {
      label: "Marketplace",
      link: "/daos/moneyboys/market",
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
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
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
          collection: "Mansions",
          imageUrl: "/images/placeholder/daos/gallery/avatar_one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/daos/gallery/avatar_two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
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
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/seven.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
          imageUrl: "/images/placeholder/marketplace/gallery/eight.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          collection: "Mansions",
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "Maci 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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
    user: {
      avatar: "/images/placeholder/avatars/one.png",
      name: "GRP 🔆",
    },
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

export const YOUR_DAO: DaoCardProps[] = [
  {
    title: "Synthetify",
    imageURL: "/images/placeholder/daos/yours/one.png",
  },
  {
    title: "Ukraine SOL",
    imageURL: "/images/placeholder/daos/yours/two.png",
  },
  {
    title: "Mango DAO",
    imageURL:'/images/placeholder/daos/yours/three.png'
  },
  {
    title: "SOCEAN",
    imageURL:'/images/placeholder/daos/yours/four.png'
  },
  {
    title: "Governance",
    imageURL:'/images/placeholder/daos/yours/five.png'
  }
];


export const DISCOVER: DaoCardProps[] = [
  {
    title: "Yield Farming",
    imageURL: "/images/placeholder/daos/yours/discover/1.png",
  },
  {
    title: "SCTF1",
    imageURL: "/images/placeholder/daos/yours/discover/2.png",
  },
  {
    title: "SERUM",
    imageURL:'/images/placeholder/daos/yours/discover/3.png'
  },
  {
    title: "Off My Head",
    imageURL:'/images/placeholder/daos/yours/discover/4.png'
  },
  {
    title: "Soltato",
    imageURL:'/images/placeholder/daos/yours/discover/5.png'
  },
  {
    title: "Metaplex Foundation",
    imageURL: "/images/placeholder/daos/yours/discover/6.png",
  },
  {
    title: "21DAO",
    imageURL: "/images/placeholder/daos/yours/discover/7.png",
  },
  {
    title: "Cardinal",
    imageURL:'/images/placeholder/daos/yours/discover/8.png'
  },
  {
    title: "21DAO",
    imageURL:'/images/placeholder/daos/yours/discover/9.png'
  },
  {
    title: "OVERNANCE DAO",
    imageURL:'/images/placeholder/daos/yours/discover/10.png'
  },
  {
    title: "Friends and Family DAO",
    imageURL: "/images/placeholder/daos/yours/discover/11.png",
  },
  {
    title: "The Sanctuary",
    imageURL: "/images/placeholder/daos/yours/discover/12.png",
  },
  {
    title: "Phantasia",
    imageURL:'/images/placeholder/daos/yours/discover/13.png'
  },
  {
    title: "Strangemood Foundation",
    imageURL:'/images/placeholder/daos/yours/discover/14.png'
  },
  {
    title: "GRAPE",
    imageURL:'/images/placeholder/daos/yours/discover/15.png'
  },
  {
    title: "MonkeDAO",
    imageURL: "/images/placeholder/daos/yours/discover/16.png",
  },
  {
    title: "MonkOG DAO",
    imageURL: "/images/placeholder/daos/yours/discover/17.png",
  },
  {
    title: "NoGoalDAO",
    imageURL:'/images/placeholder/daos/yours/discover/18.png'
  },
  {
    title: "Marinade.Finance",
    imageURL:'/images/placeholder/daos/yours/discover/19.png'
  },
  {
    title: "Chicken Tribe",
    imageURL:'/images/placeholder/daos/yours/discover/20.png'
  }
];
