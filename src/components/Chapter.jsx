import React from "react";
import chapters from "../chapters.js";

// const steps = document.querySelectorAll(".steps");

function setBackground(chapterStage) {
  // steps.forEach((step) => {
  //   // step.classList.remove("currentStep");
  //   return step;
  // });
  // const stepId = "step" + (chapterStage + 1);
  const stepId = "step" + (chapterStage + 1);

  if (chapterStage < 7) {
    const currentStepDiv = document.querySelector("#" + stepId);
    console.log(currentStepDiv);
    currentStepDiv.classList.add("currentStep");
  }
}

export default function Chapter(props) {
  return (
    <div className="chapterWrapper stack-md">
      <h3 className="narration">{chapters[props.chapterStage].narration}</h3>
      <div className="progress-wrapper">
        <div className="lives">{"❤️".repeat(props.life)}</div>
        <div className="step-wrap">
          <div id="step1" className="steps "></div>
          <div id="step2" className="steps"></div>
          <div id="step3" className="steps"></div>
          <div id="step4" className="steps"></div>
          <div id="step5" className="steps"></div>
          <div id="step6" className="steps"></div>
          <div id="step7" className="steps"></div>
        </div>
      </div>
      {console.log("CHAPTER STAGE", chapters[props.chapterStage])}
      <form className="buttonsForm">
        {chapters[props.chapterStage].options.map((option) => (
          <button
            onClick={(event) => {
              event.preventDefault();
              setBackground(props.chapterStage);
              const answer = boolean(event.target.value);

              if (answer === false && props.life == 1) {
                props.setChapterStage(8);
                props.setLife(props.life - 1);
              } else if (answer === false && props.life < 1) {
                props.setChapterStage(0);
                props.setLife(3);

                // console.log("life", props.life);
              } else if (answer === false && props.life > 1) {
                props.setLife(props.life - 1);
                props.setChapterStage(props.chapterStage + 1);
              } else if (props.chapterStage === 7) {
                props.setChapterStage(0);
                props.setLife(3);
              } else {
                props.setChapterStage(props.chapterStage + 1);
              }
            }}
            key={option.answerID}
            type="submit"
            value={option.correct}
            className="btn"
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

//{console.log("PROPS LIFE", props.life)}
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
