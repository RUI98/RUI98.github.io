const hellText =
  "A rude hello to you,\n\nAnd an inhospital unwelcome to this unpleasingly angry page! This is for the furious souls looking to break shit. And for the grumpy minds to send their fricking temper away for some other poor person to deal with. \n\nAnd when you feel f***ing calm again, just press the button to the right and we will send you with a first class ticket to Zen with a stopover in Mindful.\n\nEnjoy your crappy stay!\n\nWorst wishes, The Noine Noice Knoives🔪🔪🔪🔪🔪🔪🔪🔪🔪";
const heavenText =
  "Hi there lovely person and welcome to heaven, \n\nThis is your very own Zen palace where you can relax from your everyday anger and frustration. \nWe hope you will find peace and happiness here and whenever you feel the need to, you can switch to angry mode again and access your tools there. \n\nNow, get a cup of tea and gather with your best friends.\n\nEnjoy your stay!\n\nBest wishes, The Noine Noice Knoives";

let popupTextElement = document.querySelector("#popupTextElement");
if (popupTextElement) {
  popupTextElement.textContent = hellText;
}

let queryString = new URLSearchParams(location.search);
let theme = queryString.get("theme");

if (theme) {
  // I will use this
  let content = document.querySelector("#heaven");

  if (theme === "heaven") {
    content.classList.add("heavenStyle");
  }

  if (theme === "hell") {
    content.classList.remove("heavenStyle");
  }

  setTheme();
} else {
  // I have to set it
  location.href = location.href + "?theme=hell";
}

function isHeaven() {
  let queryString = new URLSearchParams(location.search);
  let theme = queryString.get("theme");

  return theme === "heaven";
}

function goToPage(page) {
  location.href = page + location.search;
}

function info() {
  alert(
    "🔪🔪🔪🔪Send your emotions away into cyberspace in a fictional letter. Type whatever poppycock you want. We don't judge! And no evidence will be left behind. 🔪🔪🔪🔪🔪"
  );
}

function send() {
  alert(
    "TADAAA! Your fictional letter has now been sent into cyberspace. Please remember to be polite. SEND LOVE, not hate! 🔪🔪🔪🔪🔪🔪🔪🔪🔪"
  );
}

function toggleBreak() {
  alert(
    "HEY! \n\nAre you sure that you want to break stuff right now, when you are here, in heaven? If you do, you will get sent right back to hell...!"
  );
}

function toggleHeaven() {
  let queryString = new URLSearchParams(location.search);

  if (isHeaven()) {
    queryString.set("theme", "hell");
  } else {
    queryString.set("theme", "heaven");
  }

  location.href =
    location.origin + location.pathname + "?" + queryString.toString();
  setTheme();
}

function setTheme() {
  let content = document.querySelector("#heaven");

  let toggleButton = document.querySelector("#toggleButton");

  let toggleHeader = document.querySelector("#toggleHeader");

  let toggleSend = document.querySelector("#toggleSend");

  let toggleForm = document.querySelector("#toggleForm");

  let input01 = document.querySelector("#input01");

  let input02 = document.querySelector("#input02");

  let sendd = document.querySelector("#sendd");

  let input04 = document.querySelector("#input04");

  let popup = document.querySelector("#popup");

  let popupTextElement = document.querySelector("#popupTextElement");

  let loveLetter = document.querySelector("#loveLetter");

  if (isHeaven()) {
    let dissableLink = document.querySelector("#breakId");
    dissableLink.href = "#";
    dissableLink.addEventListener("click", toggleBreak);

    if (toggleButton) {
      toggleButton.innerText = "I'm ANGRY!";
      toggleButton.style.backgroundColor = "#C9EBF9";
    }

    if (toggleHeader) {
      toggleHeader.style.backgroundColor = "#C9EBF9";
    }

    if (toggleSend) {
      toggleSend.style.backgroundColor = "#C9EBF9";
      toggleSend.innerText = "New Love Letter";
    }

    if (toggleForm) {
      toggleForm.style.backgroundColor = "#8ADCFE";
    }

    if (input01) {
      input01.style.backgroundColor = "#8ADCFE";
    }

    if (input02) {
      input02.style.backgroundColor = "#8ADCFE";
    }

    if (sendd) {
      sendd.style.backgroundColor = "#C9EBF9";
    }

    if (input04) {
      input04.style.backgroundColor = "#8ADCFE";
    }

    if (popup) {
      popup.style.backgroundColor = "#C9EBF9";
    }

    if (popupTextElement) {
      popupTextElement.textContent = heavenText;
    }

    if (loveLetter) {
      loveLetter.textContent = "Love Letter";
    }

    document.getElementById("myframe").src =
      "https://open.spotify.com/embed/playlist/0ORBSqC73EeGjWQdScLYAJ";
  } else {
    console.log("HEELL");

    if (toggleButton) {
      toggleButton.innerText = "I'm calm...";
      toggleButton.style.backgroundColor = "#EBED00";
    }

    if (toggleHeader) {
      toggleHeader.style.backgroundColor = "#EBED00";
    }

    if (toggleSend) {
      toggleSend.style.backgroundColor = "#EBED00";
      toggleSend.innerText = "New Hate Letter";
    }

    if (toggleForm) {
      toggleForm.style.backgroundColor = "#FF7500";
    }

    if (input01) {
      input01.style.backgroundColor = "#FF7500";
    }

    if (input02) {
      input02.style.backgroundColor = "#FF7500";
    }

    if (sendd) {
      sendd.style.backgroundColor = "#EBED00";
    }

    if (input04) {
      input04.style.backgroundColor = "#FF7500";
    }

    if (popup) {
      popup.style.backgroundColor = "#EBED00";
    }

    if (popupTextElement) {
      popupTextElement.textContent = hellText;
    }
    if (loveLetter) {
      loveLetter.textContent = "Hate Letter";
    }
  }
}

function toggle_video(id) {
  var e = document.getElementById(id);
  var myClasses = document.querySelectorAll(".video-container"),
    i = 0,
    l = myClasses.length;

  for (i; i < l; i++) {
    myClasses[i].style.display = "none";
  }
  if (e.style.display == "none") e.style.display = "block";
}
