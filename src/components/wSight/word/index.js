const PATH = "https://wellwell.wang/static/img/sight";


const WORDS = [{
  "id": "a",
  "code": 1,
  "url": "/a.png",
  "map3": "/a.mp3",
}, {
  "id": "all",
  "code": 2,
  "url": "/all.png",
  "map3": "/all.mp3",
}, {
  "id": "up",
  "code": 3,
  "url": "/up.png",
  "map3": "/up.mp3",
}, {
  "id": "new",
  "code": 4,
  "url": "/new.png",
  "map3": "/new.mp3",
}, {
  "id": "it",
  "code": 5,
  "url": "/it.png",
  "map3": "/it.mp3",
}, {
  "id": "in",
  "code": 6,
  "url": "/in.png",
  "map3": "/in.mp3",
}, {
  "id": "have",
  "code": 7,
  "url": "/have.png",
  "map3": "/have.mp3",
}, {
  "id": "that",
  "code": 8,
  "url": "/that.png",
  "map3": "/that.mp3",
}, {
  "id": "come",
  "code": 9,
  "url": "/come.png",
  "map3": "/come.mp3",
}, {
  "id": "find",
  "code": 10,
  "url": "/find.png",
  "map3": "/find.mp3",
}];

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
