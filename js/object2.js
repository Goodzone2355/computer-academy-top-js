let dataAuto = function(obj){
    for(key in obj){
        document.writeln(`${key}: ${obj[key]}<br>`)
    }
}

let averageTime = function(obj){
    let length = +prompt("На какое расстояние вы хотите поехать")
    let time = length/obj.averageSpeed;
    let stops = Math.floor(time/4)
    let averageTime = time+stops;
    document.writeln(`С учетом отдыха (каждые 4 часа отдых 1 час) вам понадобится ${averageTime.toFixed(1)} часа`)
}

const Mercedes = {
    manufacturer: "Mercedes-benz",
    model: "S600 Long W221",
    yearOfIssue: 2006,
    averageSpeed: 78
}
dataAuto(Mercedes)
averageTime(Mercedes)
