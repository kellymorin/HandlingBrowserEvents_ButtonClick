document.querySelector("#activate-flight").addEventListener("click",
function flightHandlerFunction(){
  let flightSection = document.querySelector("#flight");
  flightSection.classList.remove("disabled");
  flightSection.classList.add("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click",
  function mindreadingFunction(){
    let mindreadingSection = document.querySelector("#mindreading")
    mindreadingSection.classList.remove("disabled")
    mindreadingSection.classList.add("enabled")
  }
)
document.querySelector("#activate-xray").addEventListener("click",  function xrayFunction(){
  let xraySection = document.querySelector("#xray")
  xraySection.classList.remove("disabled")
  xraySection.classList.add("enabled")
})

// Once that is complete, add two more buttons

document.querySelector("#activate-all").addEventListener("click", function enableAll(){
  let allSections = document.querySelectorAll(".power")
  allSections.forEach((section)=>{
    section.classList.remove("disabled")
    section.classList.add("enabled")
  })
})

document.querySelector("#deactivate-all").addEventListener("click", function disableAll(){
  let allSections = document.querySelectorAll(".power")
  allSections.forEach((section)=>{
    section.classList.remove("enabled")
    section.classList.add("disabled")
  })
})
