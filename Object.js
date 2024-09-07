const React = {
    support : "Javascript",
    lib:"True",
    end:"Frontend",
    founder:"Facebook",
    use:"virtualDom"
}

// accessing
console.log(React["support"])

//update
React.founder = "Meta"


console.log("Newely updated",React)


// Delete
delete React.lib
console.log("After Deletion : \n",React)
