const chapters = [
  {
    id: 0,
    narration: "You leave home and a dog approaches you, what do you do?",
    options: [
      {
        answerID: "a",
        answer: "The dog looks really friendly so you stop and pet it!",
        correct: true,
      },
      {
        answerID: "b",
        answer: "The dog stinks, you ignore it because you are cool like that",
        correct: false,
      },
      {
        answerID: "c",
        answer: "You shout at the dog 'go away'!",
        correct: false,
      },
      {
        answerID: "d",
        answer: "You pet the cat sitting next to the dog instead",
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
        answer: "You call your Mum to give you a lift (how embarrassing..)",
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
        answer: "Throw away the keys to Adam's bike",
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
        answer: "McDonald's",
        correct: false,
      },
      {
        answerID: "o",
        answer: "Gail's bakery",
        correct: false,
      },
      {
        answerID: "p",
        answer: "A meal deal from Tesco",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    narration:
      "Breakfast over-ran... You forgot you were meant to meet Milly and Juliette at Finsbury Park station, what do you do?",
    options: [
      {
        answerID: "q",
        answer: "Do nothing",
        correct: false,
      },
      {
        answerID: "r",
        answer: "Go home as you feel like this day has been a disaster",
        correct: false,
      },
      {
        answerID: "s",
        answer:
          "Text them telling them space 4 is closed so you won't be the only one not going in today.",
        correct: false,
      },
      {
        answerID: "t",
        answer:
          "Text them letting them know you'll be late and get them a couple of snacks from Tesco to bring to space 4!",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    narration:
      "You meet Oli outside space 4, he won't let you in unless you give him the secret password, what is it?",
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
      "You arrive outside the space 4 door and the 'tech guru' approaches you and asks you what is the best keyboard shortcut?",
    options: [
      {
        answerID: "y",
        answer: "rm -rf/ (this always works)",
        correct: false,
      },
      {
        answerID: "z",
        answer: "control tilde (open terminal)",
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
    narration: `You made it! Congrats! Now go and code your life away!`,
    options: [
      {
        answerID: "cc",
        answer: "Play again!",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    narration: "You LOST, try again!",
    options: [
      {
        answerID: "dd",
        answer: "Play again!",
        correct: false,
      },
    ],
  },
];

export default chapters;
