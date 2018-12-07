const PATH = "https://wellwell.wang/static/img/game";


const G = [{
    id: "dog",
    group: "g",
    rule: "do_",
    url: "/g/dog.jpg",
    map3: "/g/dog.mp3",
    question: ["a", "g", "h", "c"],
    answer: "g"
  },
  {
    id: "egg",
    group: "g",
    rule: "eg_",
    url: "/g/egg.jpg",
    map3: "/g/egg.mp3",
    question: ["a", "g", "h", "b"],
    answer: "g"
  },
  {
    id: "gem",
    group: "g",
    rule: "_em",
    url: "/g/gem.jpg",
    map3: "/g/gem.mp3",
    question: ["g", "c", "d", "b"],
    answer: "g"
  },
  {
    id: "giant",
    group: "g",
    rule: "_iant",
    url: "/g/giant.jpg",
    map3: "/g/giant.mp3",
    question: ["g", "a", "h", "i"],
    answer: "g"
  },
  {
    id: "giraffe",
    group: "g",
    rule: "_iraffe",
    url: "/g/giraffe.jpg",
    map3: "/g/giraffe.mp3",
    question: ["g", "v", "r", "n"],
    answer: "g"
  },
  {
    id: "girl",
    group: "g",
    rule: "_irl",
    url: "/g/girl.jpg",
    map3: "/g/girl.mp3",
    question: ["g", "y", "b", "j"],
    answer: "g"
  },
  {
    id: "gum",
    group: "g",
    rule: "_um",
    url: "/g/gum.jpg",
    map3: "/g/gum.mp3",
    question: ["m", "g", "v", "l"],
    answer: "g"
  },
  {
    id: "gym",
    group: "g",
    rule: "_ym",
    url: "/g/gym.jpg",
    map3: "/g/gym.mp3",
    question: ["g", "c", "n", "k"],
    answer: "g"
  },
  {
    id: "leg",
    group: "g",
    rule: "le_",
    url: "/g/leg.jpg",
    map3: "/g/leg.mp3",
    question: ["l", "g", "o", "p"],
    answer: "g"
  }
];

const F = [{
    id: "fat",
    group: "f",
    rule: "_at",
    url: "/f/fat.jpg",
    map3: "/f/fat.mp3",
    question: ["a", "o", "h", "f"],
    answer: "f"
  },
  {
    id: "five",
    group: "f",
    rule: "_ive",
    url: "/f/five.jpg",
    map3: "/f/five.mp3",
    question: ["b", "c", "h", "f"],
    answer: "f"
  },
  {
    id: "foot",
    group: "f",
    rule: "_oot",
    url: "/f/fat.jpg",
    map3: "/f/fat.mp3",
    question: ["r", "g", "b", "f"],
    answer: "f"
  },
  {
    id: "hoof",
    group: "f",
    rule: "hoo_",
    url: "/f/hoof.jpg",
    map3: "/f/hoof.mp3",
    question: ["k", "o", "h", "f"],
    answer: "f"
  },
  {
    id: "roof",
    group: "f",
    rule: "roo_",
    url: "/f/roof.jpg",
    map3: "/f/roof.mp3",
    question: ["a", "y", "h", "f"],
    answer: "f"
  }
];
const E = [{
    id: "bed",
    group: "e",
    rule: "b_d",
    url: "/e/bed.jpg",
    map3: "/e/bed.mp3",
    question: ["a", "o", "y", "e"],
    answer: "e"
  },
  {
    id: "egg",
    group: "e",
    rule: "_gg",
    url: "/e/egg.jpg",
    map3: "/e/egg.mp3",
    question: ["g", "x", "y", "e"],
    answer: "e"
  },
  {
    id: "elephant",
    group: "e",
    rule: "_lephant",
    url: "/e/elephant.jpg",
    map3: "/e/elephant.mp3",
    question: ["s", "g", "h", "e"],
    answer: "e"
  },
  {
    id: "tent",
    group: "e",
    rule: "t_nt",
    url: "/e/tent.jpg",
    map3: "/e/tent.mp3",
    question: ["s", "t", "b", "e"],
    answer: "e"
  }
];
const D = [{
    id: "bed",
    group: "d",
    rule: "be_",
    url: "/d/bed.jpg",
    map3: "/d/bed.mp3",
    question: ["z", "t", "y", "d"],
    answer: "d"
  },
  {
    id: "dog",
    group: "d",
    rule: "_og",
    url: "/d/dog.jpg",
    map3: "/d/dog.mp3",
    question: ["g", "v", "y", "d"],
    answer: "d"
  },
  {
    id: "doll",
    group: "d",
    rule: "_oll",
    url: "/d/doll.jpg",
    map3: "/d/doll.mp3",
    question: ["g", "v", "y", "d"],
    answer: "d"
  },
  {
    id: "sad",
    group: "d",
    rule: "sa_",
    url: "/d/sad.jpg",
    map3: "/d/sad.mp3",
    question: ["g", "v", "y", "d"],
    answer: "d"
  },
];
const C = [{
    id: "cat",
    group: "c",
    rule: "_at",
    url: "/c/cat.jpg",
    map3: "/c/cat.mp3",
    question: ["z", "t", "y", "c"],
    answer: "c"
  },
  {
    id: "ceiling",
    group: "c",
    rule: "_eiling",
    url: "/c/ceiling.jpg",
    map3: "/c/ceiling.mp3",
    question: ["b", "t", "y", "c"],
    answer: "c"
  },
  {
    id: "cereal",
    group: "c",
    rule: "_ereal",
    url: "/c/cereal.jpg",
    map3: "/c/cereal.mp3",
    question: ["z", "t", "w", "c"],
    answer: "c"
  },
  {
    id: "circle",
    group: "c",
    rule: "_ircle",
    url: "/c/circle.jpg",
    map3: "/c/circle.mp3",
    question: ["c", "a", "e", "f"],
    answer: "c"
  },
  {
    id: "city",
    group: "c",
    rule: "_ity",
    url: "/c/cereal.jpg",
    map3: "/c/cereal.mp3",
    question: ["z", "t", "w", "c"],
    answer: "c"
  },
  {
    id: "cob",
    group: "c",
    rule: "_ob",
    url: "/c/cob.jpg",
    map3: "/c/cob.mp3",
    question: ["z", "t", "w", "c"],
    answer: "c"
  },
  {
    id: "computer",
    group: "c",
    rule: "_omputer",
    url: "/c/computer.jpg",
    map3: "/c/computer.mp3",
    question: ["z", "t", "w", "c"],
    answer: "c"
  },
  {
    id: "cub",
    group: "c",
    rule: "_ub",
    url: "/c/cub.jpg",
    map3: "/c/cub.mp3",
    question: ["z", "b", "n", "c"],
    answer: "c"
  },
  {
    id: "cup",
    group: "c",
    rule: "_up",
    url: "/c/cup.jpg",
    map3: "/c/cup.mp3",
    question: ["m", "v", "w", "c"],
    answer: "c"
  },



];
const A = [{
    id: "ant",
    group: "a",
    rule: "_nt",
    url: "/a/ant.jpg",
    map3: "/a/ant.mp3",
    question: ["a", "c", "s", "k"],
    answer: "a"
  },
  {
    id: "bag",
    group: "a",
    rule: "b_g",
    url: "/a/bag.jpg",
    map3: "/a/bag.mp3",
    question: ["a", "m", "g", "z"],
    answer: "a"
  },
  {
    id: "cat",
    group: "a",
    rule: "c_t",
    url: "/a/cat.jpg",
    map3: "/a/cat.mp3",
    question: ["a", "t", "r", "e"],
    answer: "a"
  },
  {
    id: "gas",
    group: "a",
    rule: "g_s",
    url: "/a/gas.jpg",
    map3: "/a/gas.mp3",
    question: ["a", "u", "w", "y"],
    answer: "a"
  },
  {
    id: "sad",
    group: "a",
    rule: "s_d",
    url: "/a/sad.jpg",
    map3: "/a/sad.mp3",
    question: ["a", "b", "c", "d"],
    answer: "a"
  }
];
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

const H = [{
    id: "hat",
    group: "h",
    rule: "_at",
    url: "/h/hat.jpg",
    map3: "/h/hat.mp3",
    question: ["h", "a", "c", "j"],
    answer: "h"
  },
  {
    id: "heart",
    group: "h",
    rule: "_eart",
    url: "/h/heart.jpg",
    map3: "/h/heart.mp3",
    question: ["h", "p", "c", "l"],
    answer: "h"
  },
  {
    id: "hill",
    group: "h",
    rule: "_ill",
    url: "/h/hill.jpg",
    map3: "/h/hill.mp3",
    question: ["h", "p", "k", "r"],
    answer: "h"
  },
  {
    id: "hippo",
    group: "h",
    rule: "_ippo",
    url: "/h/hippo.jpg",
    map3: "/h/hippo.mp3",
    question: ["h", "p", "u", "f"],
    answer: "h"
  },
  {
    id: "house",
    group: "h",
    rule: "_ouse",
    url: "/h/house.jpg",
    map3: "/h/house.mp3",
    question: ["h", "p", "k", "b"],
    answer: "h"
  },
]


const WORDS = [
  ...B,
  ...A,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H
];

function getRandomWord(asyncWord) {
  var num = 0;
  if (asyncWord && asyncWord.length > 0) {
    num = Math.floor(Math.random() * asyncWord.length);
    return asyncWord[num];
  } else {
    num = Math.floor(Math.random() * WORDS.length);
    return WORDS[num];
  }
}

function getWordTotal() {
  return WORDS.length;
}

export default {
  PATH,
  getWordTotal,
  getRandomWord,
}
