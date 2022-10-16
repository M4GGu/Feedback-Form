document.getElementById("btn-send").addEventListener('click',fun)
function fun(){
    let nick = document.getElementById("input name");
    document.getElementById("client").innerHTML = "Thank you for your feedback " + nick.value;
}

/*There are also a few things that i wanted to do but couldn't find out how to, like
1 - validate if it was a real name or just random letters;
2 - only appear the innerHTML if name and email were filled;
3 - only works if at least one of the options were chosen*/