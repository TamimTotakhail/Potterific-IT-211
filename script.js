$(document).ready(function() {
    var characters = [
        {name:"Albus Dumbledore", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},    
        {name:"Nymphadora Tonks", role:"", house:"Hufflepuff", gender:"f", alignment:"good"},
        // ... other characters ...

        // Adding Harry Potter
        {name:"Harry Potter", role:"student", house:"Gryffindor", gender:"m", alignment:"good"},
    ];

    var $characterTableBody = $('#characterTableBody');
    var $buttonsDiv = $('#buttons');
    var $resetButton = $('#resetButton');

    // Generate table rows and house buttons
    characters.forEach(function(character) {
        // Generate table row and append to tbody
        var row = '<tr data-house="' + character.house + '">' +
            '<td>' + character.name + '</td>' +
            '<td>' + character.role + '</td>' +
            '<td>' + character.house + '</td>' +
            '<td>' + character.gender + '</td>' +
            '<td>' + character.alignment + '</td>' +
            '</tr>';
        $characterTableBody.append(row);
    });

    // Collect unique houses
    var uniqueHouses = Array.from(new Set(characters.map(function(character) {
        return character.house;
    })));

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
    });

    // Click event handler for reset button
    $resetButton.on('click', function() {
        // Show all rows
        $characterTableBody.find('tr').show();
    });
});
