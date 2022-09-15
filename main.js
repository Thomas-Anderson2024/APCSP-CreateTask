const DOMSelectors = {
  teamName: document.getElementById("teamName"),
  coachName: document.getElementById("coachName"),
  season: document.getElementById("season"),
  selectedTeam: document.getElementById("teamNames"),
  genderSelect: document.getElementById("teamGender"),
  dataSelector: document.getElementById("dataSelector"),
  roomNumber: document.getElementById("roomNumber"),
};

const teams = [
  {
    sport: "fencing",
    sportName: "Fencing",
    boysSeason: "fall",
    boysCoach: "Evangelos Ginos",
    girlsSeason: "Spring",
    girlsCoach: "Ann Boylan",
    roomNumber: "Cafeteria",
  },
  {
    sport: "trackAndField",
    sportName: "Track And Field",
    boysSeason: "Fall, Winter, Spring",
    boysCoach: "Scott Crabbe",
    girlsSeason: "Fall, Winter, Spring",
    girlsCoach: "Patricia Mulligan",
    roomNumber: "153",
  },
  {
    sport: "volleyball",
    sportName: "Volleyball",
    boysSeason: "Spring",
    boysCoach: "Austen Rerick",
    girlsSeason: "Fall",
    girlsCoach: "Austen Rerick",
    roomNumber: "3rd Floor Gym",
  },
  {
    sport: "tableTennis",
    sportName: "Table Tennis",
    boysSeason: "Winter",
    boysCoach: "Matthew Granite",
    girlsSeason: "Winter",
    girlsCoach: "Amanda Nudelman",
    roomNumber: "C23",
  },
  {
    sport: "golf",
    sportName: "Golf",
    boysSeason: "Spring",
    boysCoach: "Glenn Markoe",
    girlsSeason: "Fall",
    girlsCoach: "Glenn Markoe",
    roomNumber: "341",
  },
  {
    sport: "swimming",
    sportName: "Swimming",
    boysSeason: "Winter",
    boysCoach: "Ann Boylan",
    girlsSeason: "Fall",
    girlsCoach: "Ann Boylan",
    roomNumber: "402",
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
    DOMSelectors.roomNumber.innerHTML = "Room: " + team.roomNumber;
  }
});
const stateChange = function () {
  let activeGender = DOMSelectors.genderSelect;
  teams.forEach((team) => {
    if (activeTeam.value == team.sport) {
      DOMSelectors.teamName.innerHTML = "Sport: " + team.sportName;
      DOMSelectors.roomNumber.innerHTML = "Room: " + team.roomNumber;
      if (activeGender.value == "girls") {
        DOMSelectors.coachName.innerHTML = "Coach: " + team.girlsCoach;
        DOMSelectors.season.innerHTML = "Season: " + team.girlsSeason;
      } else {
        DOMSelectors.coachName.innerHTML = "Coach: " + team.boysCoach;
        DOMSelectors.season.innerHTML = "Season: " + team.boysSeason;
      }
    }
  });
};
DOMSelectors.dataSelector.addEventListener("change", stateChange());
