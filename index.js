$(document).ready(function(){
    fetch("teamsData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
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

    fetch("historyOutput.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var graph = data.graph;

        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var chartData = google.visualization.arrayToDataTable(graph);
            var options = {
                title: "Simulation History",
                focusTarget: 'category',
                legend: {
                position: "bottom"
                },
                colors: ["#F47A38", "#5F259F", "#FFB81C", "#003087", "#D2001C", "#CE1126", "#000000", "#6F263D", "#002654", "#006847", "#CE1126", "#FF4C00", "#B9975B", "#A2AAAD", "#154734", "#AF1E2D", "#FFB81C", "#CE1126", "#F47D30", "#0038A8", "#000000", "#F74902", "#FCB514", "#006D75", "#99D9D9", "#002F87", "#002868", "#00205B", "#00843D", "#B4975A", "#C8102E", "#041E42"],
                'chartArea': {'width': '90%'}
            };
            var chart = new google.visualization.LineChart(
                document.getElementById("history_graph")
            );

            chart.draw(chartData, options);
        }
    })

    // jQuery methods go here...
  });