import React from "react";
import chapters from "../chapters.js";

export default function Chapter(props) {
  // console.log("chapter", props.chapterStage);
  return (
    <div>
      <h3>{chapters[props.chapterStage].narration}</h3>

      {chapters[props.chapterStage].options.map((option) => (
        <button value={option.correct}>{option.answer}</button>
      ))}
    </div>
  );
}

// .find((chapter) => chapter.id === chapterStage)
