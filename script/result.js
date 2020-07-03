function result() 
        {
            
            var team1 = document.getElementById("first")
            team1.outerHTML = '<p class="tiblevl" onclick="result()" id="first" > Результаты прошедших игр</p> <p class="tiblevl"  id="firstGame" > <input value="team1"> <input value="goalTeam1"> - <input value="team2"> <input value="goalTeam2"> </p>'
            

            console.log (team1)
            
        
            
            //var goalTeam1 = prompt(team1 + " " + "забили"), goalTeam2 = prompt(team2 + " " + "забили");

                        //ищем позицию team1
                        let positionTeam1, positionTeam2;
                        for(let i=0;i<teamsStats.length;i++)
                        { 
                            if (teamsStats[i].includes(team1))
                            {
                                positionTeam1 = i;
                               
                            }   
                            else if (teamsStats[i].includes(team2))
                            {
                                positionTeam2 = i;
                                
                            }
                        }
                         //добавляем кол-во игр командам
                        teamsStats[positionTeam1][1] = parseInt(teamsStats[positionTeam1][1])+1
                        teamsStats[positionTeam2][1] = parseInt(teamsStats[positionTeam2][1])+1
                        //добавляем забитые и пропущенные мячи первой (победившей) команде
                        teamsStats[positionTeam1][5] = parseInt(teamsStats[positionTeam1][5])+Math.ceil(goalTeam1)
                        teamsStats[positionTeam1][6] = parseInt(teamsStats[positionTeam1][6])+Math.ceil(goalTeam2)
                        //добавляем забитые и пропущенные мячи второй (проигравшей)команде
                        teamsStats[positionTeam2][5] = parseInt(teamsStats[positionTeam2][5])+Math.ceil(goalTeam2)
                        teamsStats[positionTeam2][6] = parseInt(teamsStats[positionTeam2][6])+Math.ceil(goalTeam1)
                        //разница мячей
                        teamsStats[positionTeam1][7] = teamsStats[positionTeam1][5] - teamsStats[positionTeam1][6]
                        teamsStats[positionTeam2][7] = teamsStats[positionTeam2][5] - teamsStats[positionTeam2][6]

                        if (parseInt(goalTeam1)>parseInt(goalTeam2))
                        {//победа первой команды, очки
                            teamsStats[positionTeam1][8] = parseInt(teamsStats[positionTeam1][8])+3
                            //добаваляем победу и поражеине командам
                            teamsStats[positionTeam1][2] = parseInt(teamsStats[positionTeam1][2])+1
                            teamsStats[positionTeam2][4] = parseInt(teamsStats[positionTeam2][4])+1
                        

                            
                           
                        }  
                        else if (goalTeam1<goalTeam2)
                            // победа второй команды, очки
                        {
                            teamsStats[positionTeam2][8] = parseInt(teamsStats[positionTeam2][8])+3
                            //добаваляем победу и поражеине командам
                            teamsStats[positionTeam2][2] = parseInt(teamsStats[positionTeam2][2])+1
                            teamsStats[positionTeam1][4] = parseInt(teamsStats[positionTeam1][4])+1

                        }
                        else
                        {
                            teamsStats[positionTeam2][8] = parseInt(teamsStats[positionTeam2][8])+1
                            teamsStats[positionTeam1][8] = parseInt(teamsStats[positionTeam1][8])+1
                            teamsStats[positionTeam2][3] = parseInt(teamsStats[positionTeam2][3])+1
                            teamsStats[positionTeam1][3] = parseInt(teamsStats[positionTeam1][3])+1


                        }
                        var elem= document.getElementById('tableVL')
                        elem.innerHTML = "Таблица первенства Дерби на Якоби"
                        update()
                        createTable(elem, colu.length, teams.length)}
                    


                           

function update ()
{let timeVar1 = [];
    for(let p=0;p<teamsStats.length;p++)
    {
       for(let t=0;t<teamsStats.length;t++)
            {if(teamsStats[p][8]>teamsStats[t][8])
            {
                timeVar1 = teamsStats[t]
                teamsStats[t] = teamsStats[p]
                teamsStats[p]=timeVar1
            }}
        }  
    }
console.log(teamsStats) 


    



    

