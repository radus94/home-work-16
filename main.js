
function getTarget(btn_name) {
    let target = event.target
    console.log(btn_name + " Button;" ,"Tag name: " + target.tagName + ";", "Target id: " + target.id + ";")
}

function btn_first(){
    var text = document.querySelector('.message').innerHTML = "You clicked First button";
    getTarget("First")
}

second.onclick = function() {
    document.querySelector('.message').innerHTML = "You clicked Second button";
    getTarget("Second")
}

function third_func() {
    document.querySelector('.message').innerHTML = "You clicked Third button";
    getTarget("Third")
}

third.addEventListener("click", third_func)