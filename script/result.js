function result() 
        {
            
            var team1 = document.getElementById("first")
            team1.outerHTML = '<p class="tiblevl" onclick="result()" id="first" > Результаты прошедших игр</p> <p class="tiblevl"  id="firstGame" > <input value="team1" id= "team1"> <input value="0" class="goal" id= "goalTeam1"> - <input value="0" id= "goalTeam2" class="goal"> <input value="team2" id= "team2">  </p>'
        }

"use strict"
function click1 ()
{
            var num =0
            return function ()
            {
                num++
                return num
            }

 }

function click2 ()
{
  
            var num =0
            return function ()
            {
                num++
                return num
            }

}
var c1 = click1()()
console.log(c1)


