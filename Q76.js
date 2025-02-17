var interpret = function(command) {
    command =command.replaceAll("()" ,"o")
command =command.replaceAll("(al)" ,"al")
return command
}
    console.log(interpret("G()(al)")) //Goal
    
    console.log(interpret("G()()()()(al)")) //Goal
