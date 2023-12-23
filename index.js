$(document).ready(function(){
    fetch("testData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var teams = data.teams;
        let tableHolder = document.querySelector("#standings_table");
        let output = "";

        for (let team of teams) {
            output += `<tr>
                            <td>${team.name}</td>
                            <td>${team.gp}</td>
                            <td>${team.wins}</td>
                            <td>${team.losses}</td>
                            <td>${team.otl}</td>
                            <td>${team.gf}</td>
                            <td>${team.ga}</td>
                            <td>${team.gd}</td>
                            <td>${team.playoff_odds}</td>
                        </tr>
            `
        }

        tableHolder.innerHTML = output;
    })

    // jQuery methods go here...

  
  });