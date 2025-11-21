interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Minor" };
}

const math: MajorCredits = { credits: 5, brand: "Major" };
const physics: MajorCredits = { credits: 3, brand: "Major" };

const art: MinorCredits = { credits: 2, brand: "Minor" };
const music: MinorCredits = { credits: 4, brand: "Minor" };

console.log(sumMajorCredits(math, physics));
console.log(sumMinorCredits(art, music));
