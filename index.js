var i=0;
var correctAnswer=0;
generate(0);
function generate(index){
    document.getElementById("question").innerHTML = jsonData[index].q;

    document.getElementById("optt1").innerHTML=jsonData[index].opt1;

    document.getElementById("optt2").innerHTML=jsonData[index].opt2;

    document.getElementById("optt3").innerHTML=jsonData[index].opt3;

    document.getElementById("optt4").innerHTML=jsonData[index].opt4;
}
function checkAnswer(){
    if(document.getElementById("opt1").checked && jsonData[i].opt1==jsonData[i].answer){
        correctAnswer ++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2==jsonData[i].answer){
        correctAnswer ++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3==jsonData[i].answer){
        correctAnswer ++;
    }
    if(document.getElementById("opt4").checked && jsonData[i].opt4==jsonData[i].answer){
        correctAnswer ++;
    }
    i++;
    if(jsonData.length-1<i){
        document.write("<body style='background-image:linear-gradient(to bottom,rgb(70, 174, 243),rgb(234, 240, 241));'>")
        document.write("<p style='color: rgb(0, 0, 0); text-align:center; font-size:2em;margin:100px;'>HEY!! YOUR SCORE IS "+correctAnswer*10+"............</p>");
        document.write("</body>");
    }
    
    generate(i);

}