import React from "react";
import chapters from "../chapters.js";

export default function Chapter(props) {
  // React.useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  return (
    <div>
      <h3>{chapters[props.chapterStage].narration}</h3>
      <div>{"⭐".repeat(props.life)}</div>

      <form>
        {chapters[props.chapterStage].options.map((option) => (
          <button
            onClick={(event) => {
              event.preventDefault();
              const answer = boolean(event.target.value);
              console.log("ANSWER", typeof answer);
              console.log("PROPS LIFE", props.life);

              if (answer === false && props.life <= 0) {
                props.setChapterStage(20);
                console.log("life", props.life);
              } else if (answer === false && props.life > 0) {
                props.setLife(props.life - 1);
                props.setChapterStage(props.chapterStage + 1);
              } else {
                props.setChapterStage(props.chapterStage + 1);
              }
            }}
            key={option.answerID}
            type="submit"
            value={option.correct}
          >
            {option.answer}
          </button>
        ))}
      </form>
    </div>
  );
}

function boolean(stringValue) {
  return stringValue === "true";
}

// .find((chapter) => chapter.id === chapterStage)
// form onSubmit=""
// onClick=""

//logic for life
// set props.life -1
// if props.life <= 0
// if it is go to else otherwise
// send to next stage (same as below)

// use effect logic
// console.log("chapter", props.chapterStage);

// handlers
// function handleChapterUpdate(event) {
//   const answer = event.target.value;

//     if (answer === false) {
//       props.setChapterStage(20);
//     } else {
//       props.setChapterStage(props.chapterStage + 1);
//     }
//   }
// React.useEffect(() => {}, [props.chapterStage]);
