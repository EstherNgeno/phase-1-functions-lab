function distanceFromHqInBlocks(block){
   return doMath=function(block-42);
}
function distanceFromHqInFeet(block) {
    return doMath=function((block-42)*264);
}
function calculatesFarePrice(start, dest) {
    let distance = Math.abs(start - dest) * 264;   
    if(distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}