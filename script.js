const questions = [
  "If you're given a chance to talk with your younger self, anong sasabihin mo sa kanya?",
  "Paano mo pinaprioritize ang sarili mo sa araw-araw?",
  "Paano mo hinaharap ang pakiramdam na parang wala kang naa-achieve?",
  "Huminga na ba s'ya ng tawad?",
  "Kung may isang tao kang gustong pasalamatan ngayon, sino s'ya at bakit?",
  "What's something your parents did na hinding hindi mo magagawa sa your future kids?",
  "What's something your younger self needed pero hindi mo na natanggap?",
  "Ano ang pinakamabigat na bagay na tiniis mo mag-isa? Paano mo ito nalampasan?",
  "Saan ka humuhugot ng lakas kapag nahihirapan ka?",
  "Kailan ka huling nakaramdam ng tunay na kasiyahan? Ano ang nangyari?",
  "Kung nakikinig ang taong nanakit sa'yo ngayon, ano ang sasabihin mo sa kanya?",
  "Kailan ka huling nasaktan ng taong akala mo ay hindi ka sasaktan?",
  "Sino ang unang sumira ng tiwala mo, and how did this affect you?",
  "Ano ang huling pagkakamali mo na gusto mong itama?",
  "What scares you about your future?",
  "Ano ang madalas mong ipagkait sa sarili mo na alam mong deserve mo?",
  "Pinatawad mo na ba ang sarili mo? Paano?",
  "Kailan mo huling naramdaman na sobrang nag-iisa ka? Paano mo ito hinarap?",
  "What's something you have finally accepted?",
  "Sino ang taong gusto mong hingan ng tawad at bakit hindi mo pa nagagawa?",
  "Ano ang isang pangarap mo noon bilang bata na gusto mo pa ring matupad hanggang ngayon?",
  "May oras ba na mas pinili mong manahimik kaysa mag-open up? Bakit?",
  "Ano ang pinakamalaking bagay na natutunan mo mula sa mga pagkakamali mo?",
  "What's something you're proud of na nagawa mo this year?",
  "Kailan mo huling inuna ang sarili mo nang walang guilt?",
  "Kung mabibigyan ka ng pagkakataong balikan ang isang taong iniwan mo noon, babalik ka ba? Bakit?",
  "Sino ang isang taong gustong-gusto mong kalimutan pero kahit anong gawin mo, hindi mo magawa?",
  "Ano ang isang lihim na dala-dala mo na hindi mo kailanman kayang ibunyag?",
  "Ano ang isang bagay na gusto mong ipaliwanag pero alam mong hindi ka maiintindihan?",
  "Ano ang pinakamasakit na bagay na natutunan mo tungkol sa pagmamahal?",
  "Ano ang isang pangyayaring pilit mong kinakalimutan pero gabi-gabi mo pa ring naaalala?"
];

const songs = [
  "How To Make Millions.mp3",
  "Melody of Memories.mp3", 
  "You're Gonna Live Forever in Me.mp3"
];



let questionCount = 0;
const questionElement = document.getElementById("question");
const startBtn = document.getElementById("startBtn");
const questionBox = document.querySelector(".question-box");
const button = document.getElementById("newQuestionBtn");
const backgroundMusic = document.getElementById("backgroundMusic");


backgroundMusic.addEventListener('ended', playRandomSong);

function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  backgroundMusic.src = songs[randomIndex];
  backgroundMusic.play();
}


function showRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  questionElement.innerText = questions[randomIndex];
}

document.getElementById("startBtn").addEventListener("click", function () {
  playRandomSong();
  document.querySelector(".start-container").style.display = "none";
  questionBox.classList.remove("hidden");
  showRandomQuestion();
});

button.addEventListener("click", showRandomQuestion);
