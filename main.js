const DOMSelectors = {
  teamName: document.getElementById("teamName"),
  coachName: document.getElementById("coachName"),
  season: document.getElementById("season"),
  selectedTeam: document.getElementById("teamNames"),
  genderSelect: document.getElementById("teamGender"),
  dataSelector: document.getElementById("dataSelector"),
};
const teams = [
  {
    sport: "fencing",
    sportName: "Fencing",
    boysSeason: "fall",
    boysCoach: "Evangelos Ginos",
    girlsSeason: "Spring",
    girlsCoach: "Ann Boylan",
  },
  {
    sport: "trackAndField",
    sportName: "Track And Field",
    boysSeason: "Fall, Winter, Spring",
    boysCoach: "Scott Crabbe",
    girlsSeason: "Fall, Winter, Spring",
    girlsCoach: "Patricia Mulligan",
  },
  {
    sport: "volleyball",
    sportName: "Volleyball",
    boysSeason: "Spring",
    boysCoach: "Austen Rerick",
    girlsSeason: "Fall",
    girlsCoach: "Austen Rerick",
  },
  {
    sport: "tableTennis",
    sportName: "Table Tennis",
    boysSeason: "Winter",
    boysCoach: "Matthew Granite",
    girlsSeason: "Winter",
    girlsCoach: "Amanda Nudelman",
  },
];
teams.forEach((team) => {
  card = document.createElement("option");
  card.value = team.sport;
  card.innerHTML = team.sportName;
  DOMSelectors.selectedTeam.insertAdjacentElement("beforeend", card);
});
let activeTeam = DOMSelectors.selectedTeam;
teams.forEach((team) => {
  if (activeTeam.value == team.sport) {
    DOMSelectors.teamName.innerHTML = "Sport: " + team.sportName;
    DOMSelectors.coachName.innerHTML = "Coach: " + team.boysCoach;
    DOMSelectors.season.innerHTML = "Season: " + team.boysSeason;
  }
});

DOMSelectors.dataSelector.addEventListener("change", function (e) {
  let activeGender = DOMSelectors.genderSelect;
  teams.forEach((team) => {
    if (activeTeam.value == team.sport) {
      DOMSelectors.teamName.innerHTML = "Sport: " + team.sportName;
      if (activeGender.value == "girls") {
        DOMSelectors.coachName.innerHTML = "Coach: " + team.girlsCoach;
        DOMSelectors.season.innerHTML = "Season: " + team.girlsSeason;
      } else {
        DOMSelectors.coachName.innerHTML = "Coach: " + team.boysCoach;
        DOMSelectors.season.innerHTML = "Season: " + team.boysSeason;
      }
    }
    e.preventDefault();
  });
});

// activeGender.addEventListener("change", function () {
//   teams.forEach((team) => {
//     if (activeTeam.value == team.sport) {
//       if ((activeGender.value = "girls")) {
//         DOMSelectors.coachName.innerHTML = "Coach: " + team.girlsCoach;
//         DOMSelectors.season.innerHTML = "Season: " + team.girlsSeason;
//       } else {
//         if ((activeGender.value = "boys")) {
//           DOMSelectors.coachName.innerHTML = "Coach: " + team.boysCoach;
//           DOMSelectors.season.innerHTML = "Season: " + team.boysSeason;
//         }
//       }
//     }
//   });
// });
