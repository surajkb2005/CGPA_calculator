//this is for maxScorePredict.html
function predict(){
    const markOutOf50var = document.getElementById('markOutOf50');
    const displayPredictionVar = document.getElementById('displayPrediction');
    const marks = markOutOf50var.value;
    const realmarks = parseFloat(marks);
    var req;
    
    //base case
    if(realmarks<= 0 || 50<realmarks){
        displayPredictionVar.innerHTML = "Enter marks between 1 to 50";
        return;
    }
    if(realmarks<20){
        displayPredictionVar.innerHTML = "Not Eligible for final";
        return;
    }

    if(40<=realmarks){
        req = 100 - (realmarks-40)*2;
        displayPredictionVar.innerHTML = "1. You can get O grade. Just score above or equal to ";
        displayPredictionVar.innerHTML += req+"/100";
    }else{
        displayPredictionVar.innerHTML = "1. O grade not possible";
    }

    if(30<=realmarks){
        req = 100 - (realmarks-30)*2;
        displayPredictionVar.innerHTML += "<BR>2. You can get A+ grade. Just score above or equal to ";
        displayPredictionVar.innerHTML += req+"/100";
    }else{
        displayPredictionVar.innerHTML += "<BR>2. A+ grade not possible";
    }

    if(20<=realmarks){
        req = 100 - (realmarks-20)*2;
        displayPredictionVar.innerHTML += "<BR>3. You can get A grade. Just score above or equal to ";
        displayPredictionVar.innerHTML += req+"/100";
    }else{
        displayPredictionVar.innerHTML += "<BR>3. A grade not possible";
    }

    if(10<=realmarks){
        req = 100 - (realmarks-10)*2;
        if(req>=40){
            displayPredictionVar.innerHTML += "<BR>4. You can get B+ grade. Just score above or equal to ";
            displayPredictionVar.innerHTML += req+"/100";
        }
    }else{
        displayPredictionVar.innerHTML += "<BR>4. B+ grade not possible";
    }

    if(5<=realmarks){
        req = 100 - (realmarks-5)*2;
        if(req>=40){
            displayPredictionVar.innerHTML += "<BR>5. You can get B grade. Just score above or equal to ";
            displayPredictionVar.innerHTML += req+"/100";
        }
    }else{
        displayPredictionVar.innerHTML += "<BR>5. B grade not possible";
    }

    if(0<=realmarks){
        req = 100 - (realmarks)*2;
        if(req>=40){
            displayPredictionVar.innerHTML += "<BR>6. You can get C grade. Just score above or equal to ";
            displayPredictionVar.innerHTML += req+"/100";
        }
    }else{
        displayPredictionVar.innerHTML += "<BR>6. C grade not possible";
    }

    if(-10<=realmarks){
        req = 100 - (realmarks+10)*2;
        if(req>=40){
            displayPredictionVar.innerHTML += "<BR>7. You can Pass. Just score above or equal to ";
            displayPredictionVar.innerHTML += req+"/100";
        }
    }else{
        displayPredictionVar.innerHTML += "<BR>7. Sorry, Passing not possible";
    }
    displayPredictionVar.innerHTML += "<BR><BR><a href='https://docs.google.com/forms/d/e/1FAIpQLSey_4A2ZWK7PBKjPjkC3Xdc_t84KIYmyoG6Y2I1d7nEcFlxkQ/viewform?usp=sharing&ouid=115287034683301691076'>Give us a Feedback Here</a>"
}






//for calculate sgpa
tdisp = document.getElementById('tabDisp');
var studDetails = [];
var idx=1;
displayDetails();
function displayDetails(){
    setTimeout(()=>{
        var tcon = "<tr>";
        tcon += "<th>Sl No. </th> <th>Subject</th> <th>Marks</th> <th>Credit</th>";
        tcon += "</tr>";
        for(var i=0;i<studDetails.length;i++){
            tcon += "<tr>";
            tcon += "<td>"+(i+1)+"</td>";
            tcon += "<td>"+studDetails[i].course+"</td>";
            tcon += "<td>"+studDetails[i].marks+"</td>";
            tcon += "<td>"+studDetails[i].credit+"</td>";
            tcon += "<td>"+`<button class="remRow" onclick='removeRow(${studDetails[i].index})'>remove</button>`+"</td>";
            tcon += "</tr>";
        }
        tdisp.innerHTML = tcon;
    },200);
}
function additems(){
    var dcourse = document.getElementById("courseid").value;
    var dmarks = document.getElementById("marksid").value;
    var dcredits = document.getElementById("creditsid").value;

    if(dcourse && dmarks && dcredits){
        studDetails.push({index:idx,course:dcourse,marks:dmarks,credit:dcredits});
        idx=idx+1; //increment unique id each time
        displayDetails();
        clearInput();
    }
}
function clearInput(){
    document.getElementById("courseid").value="";
    document.getElementById("marksid").value="";
    document.getElementById("creditsid").value="";
}
function removeRow(id){
    var fil = studDetails.filter((a,i)=>{
        if(id==a.index){
            studDetails.splice(i,1);
        }
    });
    displayDetails();
}
function calculatecgpa(){
    var tot=0;
    var totcredits=0;
    tdisp.innerHTML +="<br>";

    for(var i=0;i<studDetails.length;i++){
        //console.log("stud marks = "+studDetails[i].marks+"stud credit"+studDetails[i].credit+"<br>"); //for testing
        if(studDetails[i].marks<0 || 100<studDetails[i].marks){
            tdisp.innerHTML += "Marks of "+studDetails[i].course+" is greater than 100.";
            tdisp.innerHTML += "<br> Please Enter the marks between 1 to 100";
            return;
        }
        if(studDetails[i].credit<0){
            tdisp.innerHTML += "Credits of "+studDetails[i].course+" is less than 0.<br> Please Enter Positive Value";
            return;
        }

        var gradePoint = Math.floor((studDetails[i].marks)/10)+1;
        if(gradePoint==11) gradePoint=10;
        var creditPoint = parseInt(studDetails[i].credit);

        totcredits += creditPoint;
        tot += (gradePoint * creditPoint);
    }

    console.log("tot = "+tot+" totcredit"+totcredits+"<br>"); //for testing
    tdisp.innerHTML += "Your Expected SGPA is "+(tot/totcredits);
}