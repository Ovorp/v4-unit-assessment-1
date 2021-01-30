/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You"ll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called "gitDefinition".
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "git is a local version control system.  It keeps track of changes in your projects.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called "gitHubDefinition".  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "Github is a cloud service where you can store your project repos. It can be used with git to keep a record of your projects, changes, and to have multiple people work on the same project."

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain "description" and "code" properties.  The "description" property 
    will be a string with a description of what that git command does.  The "code" property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called "init" with "description" and "code" properties 
    following the guidelines above to describe the init command.
*/


//CODE HERE

let init = {
    description: "creates a hidden git folder that will start tracking all of your changes for that folder",
    code: "git init"
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called "clone" with "description" and "code" properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: "creates a copy of a repo from github",
    code: "git clone <url>"
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called "status" with "description" and "code" properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
     description: "tells you what has been saved, pushed, commited and its relation to github",
    code: "git status"
     }
//////////////////PROBLEM 6////////////////////
/*
    Create an object called "add" with "description" and "code" properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = { 
    description: "adds any changes to be staged before you commit",
    code:  "git add"

}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called "commit" with "description" and "code" properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = { 
    description: "commits the staged changes with a message",
    code: "git commit -m <message in quotes after the -m>"
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called "addRemote" with "description" and "code" properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = { 
    description: "lets your start tracking changes of a remote branch and allows you to push changes to that branch",
    code: "git remote add origin"

}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called "push" with "description" and "code" properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = { 
    description: "submits the code to github to be stored and tracked there",
code: "git push"

}