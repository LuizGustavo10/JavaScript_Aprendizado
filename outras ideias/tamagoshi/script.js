let hunger = 0;
let happiness = 0;

function feed() {
  hunger -= 10;
  if (hunger < 0) {
    hunger = 0;
  }
  updateTamagotchi();
}

function play() {
  happiness += 10;
  if (happiness > 100) {
    happiness = 100;
  }
  updateTamagotchi();
}

function sleep() {
  hunger += 5;
  if (hunger > 100) {
    hunger = 100;
  }
  happiness -= 5;
  if (happiness < 0) {
    happiness = 0;
  }
  updateTamagotchi();
}

function updateTamagotchi() {
  const tamagotchiElement = document.getElementById('tamagotchi');
  tamagotchiElement.style.backgroundColor = getBackgroundColor(hunger, happiness);
}

function getBackgroundColor(hunger, happiness) {
  if (hunger >= 50 && happiness >= 50) {
    return 'red';
  } else if (hunger < 50 && happiness >= 50) {
    return 'orange';
  } else if (hunger >= 50 && happiness < 50) {
    return 'blue';
  } else {
    return 'green';
  }
}