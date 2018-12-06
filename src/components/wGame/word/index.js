const PATH = "https://wellwell.wang/static/img/game";
const B = [{
    id: "ball",
    group: "b",
    rule: "_all",
    url: "/b/ball.jpg",
    map3: "/b/ball.mp3",
    question: ["b", "p", "c", "l"],
    answer: "b"
  },
  {
    id: "bell",
    group: "b",
    rule: "_ell",
    url: "/b/bell.jpg",
    map3: "/b/bell.mp3",
    question: ["b", "p", "z", "w"],
    answer: "b"
  },
  {
    id: "bag",
    group: "b",
    rule: "_ag",
    url: "/b/bag.jpg",
    map3: "/b/bag.mp3",
    question: ["b", "p", "e", "s"],
    answer: "b"
  },
  {
    id: "cab",
    group: "b",
    rule: "ca_",
    url: "/b/cab.jpg",
    map3: "/b/cab.mp3",
    question: ["b", "p", "k", "n"],
    answer: "b"
  },
  {
    id: "cub",
    group: "b",
    rule: "cu_",
    url: "/b/cub.jpg",
    map3: "/b/cub.mp3",
    question: ["b", "p", "c", "l"],
    answer: "b"
  }
];

const WORDS = [
  ...B


];

function getRandomWord() {
  var num = Math.floor(Math.random() * WORDS.length);
  return WORDS[num];
}

function getWordTotal() {
  return WORDS.length;
}

export default {
  PATH,
  getWordTotal,
  getRandomWord,
}
