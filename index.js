// Set up the document dimensions
const width = 200;
const height = 200;
setDocDimensions(width, height);

// Store final lines here
const finalLines = [];

// Create a petal shape using a turtle
const createPetal = () => {
  const petal = new bt.Turtle()
    .forward(40)
    .arc(-180, 20)
    .forward(40);
  return petal.lines()[0];
};

// Create the flower petals
const numPetals = 8;
for (let i = 0; i < numPetals; i++) {
  let petal = createPetal();
  bt.rotate([petal], (360 / numPetals) * i, [0, 0]);
  finalLines.push(petal);
}

// Create the flower center
const center = bt.catmullRom([
  [0, -10],
  [10, 0],
  [0, 10],
  [-10, 0],
  [0, -10]
], 50);
finalLines.push(center);

// Create a stem
const stem = new bt.Turtle()
  .jump([0, 0])
  .setAngle(-90)  // Changed to -90 to go downward
  .forward(80)
  .lines()[0];
finalLines.push(stem);

// Add some leaves to the stem
const createLeaf = () => {
  return new bt.Turtle()
    .forward(20)
    .arc(-120, 15)  // Changed to -120
    .arc(120, 15)   // Changed to 120
    .forward(20)
    .lines()[0];
};

const leftLeaf = createLeaf();
bt.rotate([leftLeaf], -45, [0, -40]);  // Changed angle and y-coordinate
bt.translate([leftLeaf], [-10, -40]);  // Changed y-coordinate
finalLines.push(leftLeaf);

const rightLeaf = createLeaf();
bt.rotate([rightLeaf], 45, [0, -60]);  // Changed angle and y-coordinate
bt.translate([rightLeaf], [10, -60]);  // Changed y-coordinate
finalLines.push(rightLeaf);

// Center the flower in the document
bt.originate(finalLines);
bt.translate(finalLines, [width / 2, height / 2]);

// Draw the flower
drawLines(finalLines);
