// Randomly generate a bodyweight workout by calling generateWorkout()

const exercises = ['burpees', 'push-ups', 'Air squats', 'lunges', 'sit-ups', 'pull-ups'];
const reps = [10, 15, 20, 25, 30];
const rounds = [2, 3, 4, 5, 6];

// Fisher-Yates shuffle algorithm to shuffle array in place
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateWorkout = () => {
  const numRounds = rounds[Math.floor(Math.random() * rounds.length)];
  console.log(`Complete ${numRounds} rounds: of`);

  const shuffledExercises = shuffleArray([...exercises]);
  for (let i = 1; i <= numRounds; i++) {
    const exercise = shuffledExercises[i - 1];
    const rep = reps[Math.floor(Math.random() * reps.length)];
    console.log(`- ${rep} ${exercise}`);
  }
};

generateWorkout(); // Call the function to generate your random workout