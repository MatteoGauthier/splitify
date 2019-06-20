var logger = document.getElementById('log');

setInterval(() => {
    logger.textContent = val

}, 1000);

function log(x) {
    console.log(x)
}
var button = document.querySelector("#button");
var buttona = document.querySelector("#button2");
var val = document.getElementById("text-input").value;
buttona.addEventListener('click', _ => {
    console.clear()
})
button.addEventListener('click', _ => {
    console.log(val);

})


var si = val.indexOf('?si=')
var https = val.match('https://')
var openPlus = val.match('open.spotify.com')
console.log(openPlus)

console.log('https = ', https)
console.log('si = ', si)

var result = val.replace(https[0], '')

console.log(result)

console.log(val.slice(https))

if (si != -1) {
    rm(val.slice(si))
}

if (https != null) {
    if (openPlus != null) {
        console.log(openPlus)
        val = val.replace(openPlus[0], '')
        val = val.replace(https[0], '')
    }
}

function rm(x) {
    val = val.replace(x, '')
    console.log(val)
}

if (val.includes('playlist')) {
    console.log("Contient Une Playlist")
}

setTimeout(() => {
    console.log(val)
}, 1000);