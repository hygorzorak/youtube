// ES6
// O que é?
const countDown = num => {
  console.log(num)
  if (num === 0) return;
  console.log(num);
  countDown(num - 1);
};
countDown(10);

const heroes = [
  {
    id: "heroes",
    parent: null
  },
  {
    id: "dc",
    parent: "heroes"
  },
  {
    id: "marvel",
    parent: "heroes"
  },
  {
    id: "batman",
    parent: "dc"
  },
  {
    id: "asa-noturna",
    parent: "dc"
  },
  {
    id: "thor",
    parent: "marvel"
  },
  {
    id: "homem-aranha",
    parent: "marvel"
  }
];

const makeTree = (heroes, parent) => {
  let node = {};
  heroes
    .filter(h => h.parent === parent)
    .forEach(h => {
      node[h.id] = makeTree(heroes, h.id);
    });
  if (node) return node;
};

const tree = makeTree(heroes, null);

tree //?
