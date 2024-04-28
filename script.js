
l = ["pq", "bq", "wq", "sq"]

function random(){
    for(i=0; i<4; i++){
        document.getElementById(l[i]).value = Math.floor(5*Math.random())
        z = l[i][0] + "c"
        if (document.getElementById(l[i]).value > 0){
            document.getElementById(z).checked = true
        } else {
            document.getElementById(z).checked = false
        }
    }
    submit()
}

function round(num){
    num = String(num)
    if(num.includes('.')){
        x = num.split('.')[1]
        console.log(x)
        if(x.length == 1){
            return num + "0"
        } else if(x.length == 2) {
            return num
        }
    } else {
        return num + ".00"
    }
}
function submit(){
    sum = 0
    error = false

    for(i=0; i<4; i++){
        z = l[i][0] + "c"
        if(document.getElementById(z).checked){
            if(document.getElementById(l[i]).value >= 0 && Number.isInteger(parseInt(document.getElementById(l[i]).value))){
                sum += document.getElementById(l[i]).value * 8
            } else {
                error = true;
            }
        }
    }

    if(!error){
        document.getElementById("price").innerHTML = "Price: $" + round(Math.round(sum*113)/100)
        document.getElementById("price").style.color = "green" 
        document.getElementById("tip").innerHTML = "Tip: $" + round(Math.round(sum*15)/100)
        document.getElementById("tip").style.color = "rgb(255, 216, 0)" 
    } else {
        document.getElementById("price").innerHTML = "Error! Quantity Must be Positive Integer!"
        document.getElementById("price").style.color = "red" 
        document.getElementById("tip").innerHTML = ""
    }
}
