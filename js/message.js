var messageIcon = document.getElementById("message-icon");
var messageBox = document.getElementById("message-box");

var closeIcon = document.getElementById("close-icon");

/**event listeners */
// close dialogue
closeIcon.addEventListener("click", closeDialogue);
// open dialogue
messageIcon.addEventListener("click", openDialogue);

/**functions */
// open dialogue
function openDialogue() {
  messageBox.classList.add("d-block");

  let busco = document.getElementById("busco");
  busco.addEventListener("click", locationQuestion);

  let question2 = document.getElementById("q2");

  function locationQuestion() {
    let question1 = document.getElementById("q1");
    question1.classList.add("d-none");
    question1.classList.remove("d-block");

    question2.classList.add("d-block");
    question2.classList.remove("d-none");

    let vivo = document.getElementById("vivo");
    vivo.addEventListener("click", finalLink);

    function finalLink() {
      question2.classList.add("d-none");
      question2.classList.remove("d-block");

      let followLink = document.getElementById("follow-link");
      followLink.classList.add("d-block");
      followLink.classList.remove("d-none");
    }

    let novivo = document.getElementById("novivo");
    novivo.addEventListener("click", openShare);
  }

  let nobusco = document.getElementById("nobusco");
  nobusco.addEventListener("click", openShare);

  let shareBlock = document.getElementById("share-block");

  function openShare() {
    let question1 = document.getElementById("q1");
    question1.classList.add("d-none");
    question1.classList.remove("d-block");
    shareBlock.classList.remove("d-none");
    shareBlock.classList.add("d-block");
    question2.classList.remove("d-block");
    question2.classList.add("d-none");
  }
}
// close dialogue
function closeDialogue() {
  messageBox.classList.remove("d-block");
  messageBox.classList.add("d-none");

  let question1 = document.getElementById("q1");
  question1.classList.add("d-block");
  question1.classList.remove("d-none");

  let question2 = document.getElementById("q2");
  question2.classList.add("d-none");
  question2.classList.remove("d-block");

  let shareBlock = document.getElementById("share-block");
  shareBlock.classList.remove("d-block");
  shareBlock.classList.add("d-none");

  let followLink = document.getElementById("follow-link");
  followLink.classList.add("d-none");
  followLink.classList.remove("d-block");
}
