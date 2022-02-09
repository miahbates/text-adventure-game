const chapters = [
  {
    id: 1,
    narration: "You leave home and a dog approaches you..",
    options: [
      {
        answerID: "a",
        answer: "The dog looks really friendly, I stop and pet it!",
        correct: true,
      },
      {
        answerID: "b",
        answer: "The dogs tinks, I ignore it because I am cool like that",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    narration:
      "You get to the tube station and you realise that you forgot your wallet .. what do you do?",
    options: [
      {
        answerID: "a",
        answer: "Steal someone else's wallet 😜",
        correct: false,
      },
      {
        answerID: "b",
        answer: "Decide to walk to FAC instead!",
        correct: true,
      },
    ],
  },
];

export default chapters;
