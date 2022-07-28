function generateVoteCount() {
  return Math.floor(Math.random() * 50 + 15);
}
const products = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: "../../src/asset/avatars/daniel.jpg",
    productImageUrl: "../../src/asset/products/image-aqua.png",
  },
  {
    id: 2,
    title: "Supermajority: The Fantasy Congress League",
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: "../../src/asset/avatars/kristy.png",
    productImageUrl: "../../src/asset/products/image-rose.png",
  },
  {
    id: 3,
    title: "Tinfoild: Tailored tinfoil hats",
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: "../../src/asset/avatars/veronika.jpg",
    productImageUrl: "../../src/asset/products/image-steel.png",
  },
  {
    id: 4,
    title: "Haught or Naught",
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: "../../src/asset/avatars/molly.png",
    productImageUrl: "../../src/asset/products/image-yellow.png",
  },
];
export default products;
