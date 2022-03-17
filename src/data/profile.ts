import { Post } from "modal/post";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps } from "components/Tables/Transfer";

export const MENU_LINKS = [
  {
    title: "Profile",
    link: "/profile",
    exact: true,
  },
  {
    title: "Art",
    link: "/profile/art",
    exact: true,
  },
  {
    title: "Pay Out",
    link: "/profile/payout",
    exact: true,
  },
  {
    title: "Groups",
    link: "/profile/groups",
    exact: true,
  },
  {
    title: "Assets",
    link: "/profile/assets",
    exact: true,
  },
];

export const PROFILE_POSTS: Post[] = [
  {
    title: "Financial Proposal: DAOstar One",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    type: "featured",
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Lura 🌥'
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
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Lura 🌥'
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
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Lura 🌥'
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
    user:{
      avatar:'/images/placeholder/avatars/one.png',
      name:'Lura 🌥'
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