import React from "react";
import chapters from "../chapters.js";

export default function Chapter(props) {
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

  return (
    <div>
      <h3>{chapters[props.chapterStage].narration}</h3>

      <form>
        {chapters[props.chapterStage].options.map((option) => (
          <button
            onClick={(event) => {
              event.preventDefault();
              const answer = event.target.value;
              console.log("ANSWER", answer);
              if (answer === false) {
                props.setChapterStage(20);
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

// .find((chapter) => chapter.id === chapterStage)
// form onSubmit=""
// onClick=""
