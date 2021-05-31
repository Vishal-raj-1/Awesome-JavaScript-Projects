function newMaze(x, y) {

    // Initializing
    var totalCells = x * y;
    var cells = new Array();
    var unvis = new Array();
    for (var i = 0; i < y; i++) {
        cells[i] = new Array();
        unvis[i] = new Array();
        for (var j = 0; j < x; j++) {
            cells[i][j] = [0, 0, 0, 0];
            unvis[i][j] = true;
        }
    }

    var currentCell = [Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
    var path = [currentCell];
    unvis[currentCell[0]][currentCell[1]] = false;
    var visited = 1;

    while (visited < totalCells) {

        var pot = [[currentCell[0] - 1, currentCell[1], 0, 2],
        [currentCell[0], currentCell[1] + 1, 1, 3],
        [currentCell[0] + 1, currentCell[1], 2, 0],
        [currentCell[0], currentCell[1] - 1, 3, 1]];
        var neighbors = new Array();


        for (var l = 0; l < 4; l++) {
            if (pot[l][0] > -1 && pot[l][0] < y && pot[l][1] > -1 && pot[l][1] < x && unvis[pot[l][0]][pot[l][1]]) { neighbors.push(pot[l]); }
        }


        if (neighbors.length) {

            next = neighbors[Math.floor(Math.random() * neighbors.length)];


            cells[currentCell[0]][currentCell[1]][next[2]] = 1;
            cells[next[0]][next[1]][next[3]] = 1;


            unvis[next[0]][next[1]] = false;
            visited++;
            currentCell = [next[0], next[1]];
            path.push(currentCell);
        }

        else {
            currentCell = path.pop();
        }
    }
    var answer = "";
    for (var i = 0; i < cells.length; i++) {
        $('#maze > tbody').append("<tr>");
        //   answer += "<tr></tr>";
        for (var j = 0; j < cells[i].length; j++) {
            var selector = i + "-" + j;
            // answer += "<td id='"+selector+"'>&nbsp;</td>";
            console.log(selector);
            $('#maze > tbody').append("<td id='" + selector + "'>&nbsp;</td>");
            if (cells[i][j][0] == 0) { $('#' + selector).css('border-top', '2px solid purple'); }
            if (cells[i][j][1] == 0) { $('#' + selector).css('border-right', '2px solid purple'); }
            if (cells[i][j][2] == 0) { $('#' + selector).css('border-bottom', '2px solid purple'); }
            if (cells[i][j][3] == 0) { $('#' + selector).css('border-left', '2px solid purple'); }

        }
        answer += "</tr>";
        $('#maze > tbody').append("</tr>");


    }
}