import React from "react";
import chapters from "../chapters.js";

// console.log("STEPS", steps);
function setBackground(chapterStage) {
  const stepId = "step" + (chapterStage + 1);

  if (chapterStage < 7) {
    const currentStepDiv = document.querySelector("#" + stepId);
    // console.log(currentStepDiv);
    currentStepDiv.classList.add("currentStep");
  }
}

function removeClasses() {
  const steps = Array.from(document.querySelectorAll(".steps"));

  steps.forEach((step) => {
    step.classList.remove("currentStep");
    console.log(step);
  });
}

export default function Chapter(props) {
  return (
    <div className="chapterWrapper stack-md">
      <h3 className="narration">{chapters[props.chapterStage].narration}</h3>
      <div className="progress-wrapper">
        <div className="lives">{"❤️".repeat(props.life)}</div>
        <div className="step-wrap">
          <div id="step1" className="steps">
            ✔
          </div>
          <div id="step2" className="steps">
            ✔
          </div>
          <div id="step3" className="steps">
            ✔
          </div>
          <div id="step4" className="steps">
            ✔
          </div>
          <div id="step5" className="steps">
            ✔
          </div>
          <div id="step6" className="steps">
            ✔
          </div>
          <div id="step7" className="steps">
            ✔
          </div>
        </div>
      </div>
      {console.log("CHAPTER STAGE", chapters[props.chapterStage])}
      <form className="buttonsForm">
        {chapters[props.chapterStage].options.map((option) => (
          <button
            onClick={(event) => {
              event.preventDefault();
              const answer = boolean(event.target.value);

              if (answer === false && props.life == 1) {
                props.setChapterStage(8);
                props.setLife(props.life - 1);
              } else if (answer === false && props.life < 1) {
                props.setChapterStage(0);
                props.setLife(3);
                removeClasses();
              } else if (answer === false && props.life > 1) {
                props.setLife(props.life - 1);
                props.setChapterStage(props.chapterStage + 1);
              } else if (props.chapterStage === 7) {
                props.setChapterStage(0);
                props.setLife(3);
                removeClasses();
              } else {
                props.setChapterStage(props.chapterStage + 1);
              }

              setBackground(props.chapterStage);
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
