//Your Code here
let firstAnswer = window.prompt('Do you head left or right?')
console.log(firstAnswer);
console.log(firstAnswer === 'left');

if(firstAnswer === 'left')
{
    let secondAnswer = window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?");
    if(secondAnswer === 'Follow')
    {
       let thirdAnswer = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven");
        if(thirdAnswer ==='Stay')
        {
           window.prompt("You live happily amongst the cats for the rest of your days.");
        }
        if(thirdAnswer === 'Spread'){
            window.prompt("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.");
        }
    }
    if(secondAnswer === 'Continue')
    {
        let thirdAnswer = window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?");
        if(thirdAnswer ==='Ladder'){
                window.prompt("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.");
        }
        if(thirdAnswer ==='Starycase'){
               window.prompt("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.");
        }
    }
}
if(firstAnswer ==='right')
{
    let secondAnswer = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?");
    console.log(secondAnswer);
    console.log(secondAnswer === 'right');
    if(secondAnswer === 'Past the dragon');

     { 
       let thirdAnswer = window.prompt("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:");
       if(thirdAnswer ==="Stay")
       {
            window.prompt("You and the dragon have an uplifting conversation about local politics and become lifelong friends.");
       }
       if(thirdAnswer === 'Run')
       {
            window.prompt("Quickly, you run back to the cave's entrance. Sheepish, you return home");
       }

        
     }   
    if(secondAnswer ==='Away from the dragon')
    {

    }


}


