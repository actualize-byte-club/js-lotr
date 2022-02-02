// function travelAbroad() {
//   var shire = [
//     "Frodo Baggins",
//     "Samwise Gamgee",
//     "Merry Brandybuck",
//     "Pippin Took"
//   ];
//   var rivendell = [];
//   var index = shire.length - 1;
//   while (index >= 0) {
//     rivendell.unshift(shire.pop());
//     index--;
//   }
//   console.log(shire);
//   console.log(rivendell);
// }

// travelAbroad();

function blowTheHornOfGondor() {
  var boromir = {
    name: "Boromir",
    titles: [
      "Captain of the White Tower",
      "Captain-General",
      "High Warden of the White Tower"
    ],
    realm: "Gondor",
    blownHorn: function () {
      return `${this.name} has blown the Horn of ${this.realm}!`;
    }
  };
  // WRITE YOUR CODE HERE
  console.log(boromir.blownHorn());
}

blowTheHornOfGondor();
