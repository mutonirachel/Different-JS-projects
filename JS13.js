// Horizontal Structure

function horizontalStructure(x) {
    if (x <= 5) return "*";
    return  horizontalStructure(x);
  }
  console.log(horizontalStructure(1), horizontalStructure(2), horizontalStructure(3),horizontalStructure(4),horizontalStructure(5));