var penguin = {
    name : 'sahi',
    origin : 'eluru',
    livingarea : 'ganapavaram',
    display : function(){
        console.log(`Hello, I am penguin and my name is ${penguin.name}`);
    }
}
penguin.display();
penguin.canfly = 'False';
console.log(`Can penguin fly? ${penguin.canfly}`);
penguin.chirp = function(){
    console.log("CHIRP CHIRP!");
}
penguin.chirp();
