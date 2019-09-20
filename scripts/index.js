console.log(`There are ${characters.length} characters in the array.`);
const sortedList = document.getElementById("console")

//Prints list of characters based on user input
const charACounter = () =>{
    letter = prompt("What letter do you want to filter the list by?").toUpperCase()
    index = 0
    characters.forEach(function(characters){
        if (characters['name'][0] === letter){
            console.log(characters['name'])
            index ++
        }
    })
    console.log(`There are ${index} characters whose names begin with the letter ${letter}.`)
}

charACounter()

//Prints number of characters that are dead
const dead = () =>{
    index = 0
    characters.forEach(function(characters){
        if (characters['died'] != ""){
            index++
        }
    })
    console.log(`There are currently ${index} dead characters in GoT.`)
}

dead()

