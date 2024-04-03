// Code your solution in this file!
// Code your solution in this file!

function distanceFromHqInBlocks (blockNo) {
    if (blockNo > 42) {
      return blockNo - 42;
    } else {
      return 42 - blockNo;
    }
  }
  
  function distanceFromHqInFeet (blockNo) {
    return distanceFromHqInBlocks(blockNo) * 264;
  }
  
  function distanceTravelledInFeet (start, Block) {
    if (start < Block) {
      return (Block - start) * 264;
    } else {
      return (start - Block) * 264;
    }
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }