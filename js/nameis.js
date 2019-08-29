function welcome (){

var greeting = prompt ('whats your name?');

document.write ('<h1>' + 'Hi, ' + greeting + '  Im Digger' + '</h1>');
}
function preference () {
    var name = prompt ("do you use Mac or Windows?");
    var answer;

    
    if (name !=='Mac' && name !=='Windows'){
        answer = 'Oh, you use that OS. Thats too bad. We can continue anyway.'
    }
    
 return answer   
}