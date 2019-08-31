function welcome() {

    var greeting = prompt('whats your name?');

    return ('<h1>' + 'Hi, ' + greeting + '  Im Digger' + '</h1>');

}

function preference() {
    var name = prompt("do you use Mac or Windows?");
    var answer;


    if (name !== 'Mac' && name !== 'Windows') {
        answer = 'Oh, you use that OS. Well, we can continue anyway.';
    }

    return answer
}

function askaboutcomputers() {
    var amount = 'not a number';
    var computer = '<img src="computer.png">'
    var computers = '';

    while (isNaN(amount)) {
        amount = prompt ('how many computers do you have? please enter a number');
    }
    while (amount > 5 || (isNaN(amount))) {
        amount = 'posibly but lets focus aon the number you need help with';
    }
    for (var i = 0; i < amount; i++) {
        computers = computers + computer
    }

    return computers;
}