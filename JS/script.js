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
    //written soon
}







// req = 100 - ((realmarks-30)*2);
//req = 60 + ((realmarks-30)%10)*2;