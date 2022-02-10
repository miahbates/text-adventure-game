const chapters = [
  {
    id: 0,
    narration: "You leave home and a dog approaches you, what do you do?",
    options: [
      {
        answerID: "a",
        answer: "The dog looks really friendly so I stop and pet it!",
        correct: true,
      },
      {
        answerID: "b",
        answer: "The dogs stinks, I ignore it because I am cool like that",
        correct: false,
      },
      {
        answerID: "c",
        answer: "I shout at the dog 'go away'!",
        correct: false,
      },
      {
        answerID: "d",
        answer: "I pet the cat sitting next to the dog instead",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    narration:
      "You get to the tube station and you realise that you forgot your wallet, what do you do?",
    options: [
      {
        answerID: "e",
        answer: "Steal someone else's wallet 😜",
        correct: false,
      },
      {
        answerID: "f",
        answer: "Decide to walk to FAC instead!",
        correct: true,
      },
      {
        answerID: "g",
        answer:
          "Money's not everything in life, you jump the turn-style at the tube station!",
        correct: false,
      },
      {
        answerID: "h",
        answer: "You call your Mum to give you a lift (how embarressing..)",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    narration:
      "You meet Adam, and he offers you a ride on his motorbike, what do you do?",
    options: [
      {
        answerID: "i",
        answer: "Get on the bike",
        correct: false,
      },
      {
        answerID: "j",
        answer: "Walk, you would never trust Adam riding a bike!",
        correct: true,
      },
      {
        answerID: "k",
        answer: "Steal Adam's bike.",
        correct: false,
      },
      {
        answerID: "l",
        answer: "Throw away the keys to adam's bike",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    narration:
      "You meet Orian on the way, who wants to gets some breakfast, where do you go?",
    options: [
      {
        answerID: "m",
        answer: "Leon",
        correct: true,
      },
      {
        answerID: "n",
        answer: "McDonalds",
        correct: false,
      },
      {
        answerID: "o",
        answer: "Gails bakery",
        correct: false,
      },
      {
        answerID: "p",
        answer: "A meal deal from tesco",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    narration:
      "Breakfast over-ran... You forgot you were mean't to meet Milly and Juliette at finsbury park station, what do you do?",
    options: [
      {
        answerID: "q",
        answer: "Do nothing",
        correct: false,
      },
      {
        answerID: "r",
        answer: "Go home as you feel like this day as been a disaster",
        correct: false,
      },
      {
        answerID: "s",
        answer:
          "Text them telling them space4 is closed so you won't be the only one not going in today.",
        correct: false,
      },
      {
        answerID: "t",
        answer:
          "Text them letting them know you'll be late and get them a couple of snacks from tesco to bring to space4!",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    narration:
      "You meet Oli outside space4, he won't let you in unless you give him the secret password, what is it?",
    options: [
      {
        answerID: "u",
        answer: "frogsruletheworld123",
        correct: true,
      },
      {
        answerID: "v",
        answer: "ilovemushrooms",
        correct: false,
      },
      {
        answerID: "w",
        answer: "bcrypt.hash(kdkgldkhghgdlkhglskdhglkdsh)",
        correct: true,
      },
      {
        answerID: "x",
        answer: "dumbledore",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    narration:
      "You arrive outside the space4 door and the 'tech guru' approaches you and asks you what is the best keyboard shortcut?",
    options: [
      {
        answerID: "y",
        answer: "rm -rf/ (this always works)",
        correct: false,
      },
      {
        answerID: "z",
        answer: "control tilder (open terminal)",
        correct: false,
      },
      {
        answerID: "aa",
        answer: "code . (open vscode from terminal)",
        correct: true,
      },
      {
        answerID: "bb",
        answer: "select word 'command + D'(select instances)",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    narration: "You made it! Congrats!",
    options: [
      {
        answerID: "q",
        answer: "Play again!",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    narration: "You LOST",
    options: [
      {
        answerID: "z",
        answer: "Play again!",
        correct: false,
      },
    ],
  },
];

export default chapters;
