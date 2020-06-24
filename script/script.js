var elem = document.getElementById('tableVL')
        let teams = ["Центр", "Пятница", "ИНК", 'Витязи', "Автомакс", "Русский лес", "СКА-Зеленый", "ТСА", "Ангария", "Комиссар 911"]
        let colu = ['№', 'Команда', 'И', 'В', 'Н', 'П', 'з-п', 'Р', 'О']
        let stat = ['0', '0', '0', '0', '0', '0', '0'], teamsStats = [];

        for (let i = 0; i < teams.length; i++) {
            teamsStats.push([teams[i], stat])

        }

        createTable(elem, colu.length, teams.length);

        function createTable(parent, col, rows) {

            let table = document.createElement('table');
            for (let i = 0; i < teams.length + 1; i++) {
                let tr = document.createElement('tr')
                for (j = 0; j < colu.length; j++) {
                    let td = document.createElement('td')
                    if (i == 0)
                        td.innerHTML = colu[j]
                    else if (j == 1) {
                        td.innerHTML = teamsStats[i - 1][0];
                        td.id = teamsStats[i - 1][0];
                        td.setAttribute('name', teamsStats[i - 1][0])
                    }
                    else if (j == 0) {
                        td.innerHTML = i
                    }
                    else {
                        td.innerHTML = teamsStats[i - 1][1][j - 2];

                    }

                    tr.appendChild(td)
                }

                table.appendChild(tr)
            }
            parent.appendChild(table)
            table.id = "таблица";
        }
        function result() {
            var team1 = prompt("Введите название команды (КАК В ТАБЛИЦЕ!)"), team2 = prompt("Введите название команды (КАК В ТАБЛИЦЕ!)")
            while ((teams.includes(team1) == false) || (teams.includes(team2) == false)) {
                team1 = prompt("Введите название команды (КАК В ТАБЛИЦЕ!)"), team2 = prompt("Введите название команды (КАК В ТАБЛИЦЕ!)")
            }
            var goalTeam1 = prompt(team1 + " " + "забили"), goalTeam2 = prompt(team2 + " " + "забили");

            //ищем позицию team1
            let position;
            for(let i=0;i<teams.length;i++)
            {
                if (teams[i].includes(team1))
                {
                    position = i;
                    console.log(position)
                }
                
            }


           // if (goalTeam1 > goalTeam2) {
             //   var i = 0
               // do
               //     i++
               // while (teamsStats[i].includes(team1) == false)
              //  teamsStats[i][1][6] = parseInt(teamsStats[i][1][6]) + 3
              //  console.log(teamsStats)
           // }


        }


