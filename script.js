$(document).ready(function() {
    var characters = [
        {name:"Albus Dumbledore", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},    
        {name:"Nymphadora Tonks", role:"", house:"Hufflepuff", gender:"f", alignment:"good"},    
        // Add more characters here...
    ];

    var uniqueHouses = [];
    var $characterTableBody = $('#characterTableBody');
    var $buttonsDiv = $('#buttons');
    var $resetButton = $('#resetButton');

    // Generate table rows and house buttons
    characters.forEach(function(character) {
        // Generate table row and append to tbody
        var row = '<tr>' +
            '<td>' + character.name + '</td>' +
            '<td>' + character.role + '</td>' +
            '<td>' + character.house + '</td>' +
            '<td>' + character.gender + '</td>' +
            '<td>' + character.alignment + '</td>' +
            '</tr>';
        $characterTableBody.append(row);

        // Collect unique houses
        if (uniqueHouses.indexOf(character.house) === -1) {
            uniqueHouses.push(character.house);
        }
    });

    // Generate house buttons
    uniqueHouses.forEach(function(house) {
        var button = '<button class="house-button" data-house="' + house + '">' + house + '</button>';
        $buttonsDiv.append(button);
    });

    // Click event handler for house buttons
    $('.house-button').on('click', function() {
        var selectedHouse = $(this).data('house');

        // Hide all rows
        $characterTableBody.find('tr').hide();

        // Show rows that match the selected house
        $characterTableBody.find('tr[data-house="' + selectedHouse + '"]').show();

        // Update row colors
        $characterTableBody.find('tr:visible:odd').addClass('over');
        $characterTableBody.find('tr:visible:even').removeClass('over');
    });

    // Click event handler for reset button
    $resetButton.on('click', function() {
        // Show all rows
        $characterTableBody.find('tr').show();

        // Reset row colors
        $characterTableBody.find('tr:odd').removeClass('over');
        $characterTableBody.find('tr:even').removeClass('over');
    });
});
