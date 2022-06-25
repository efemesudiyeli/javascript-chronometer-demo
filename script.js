var btnIncrease = document.getElementById("btnIncrease");
var btnDecrease = document.getElementById("btnDecrease");
var btnStartCountdown = document.getElementById("btnStartCountdown");
var btnDecreaseMinute = document.getElementById("btnDecreaseMinute");
var btnIncreaseMinute = document.getElementById("btnIncreaseMinute");
var h1Count = document.getElementById("h1Count");
var h3Timer = document.getElementById("h3Timer");
var h2Timer = document.getElementById("h2Timer");
var Count = 0;

function IncreaseCount(IncreaseNum=1) {
    Count = Count + IncreaseNum;
    console.log(IncreaseNum, "Count:", Count)
    h1Count.innerHTML = Count;
    console.log("Eklendi");
}

function DecreaseCount(DecreaseNum=1) {
    Count = Count - DecreaseNum;
    h1Count.innerHTML = Count;
    console.log("Azaltıldı");
}

function StartCountDown(){
    // Get count.
    Count--
    h3Timer.innerHTML = Count;
    const countDownTimeout = setTimeout(StartCountDown, 1000);

    if(Count === 0){
            clearTimeout(countDownTimeout);
            setInterval(function(){
                Count--
                h3Timer.innerHTML = `END <span class="passedTime"> (passed time: ${Count} <span>)`;
            }, 1000)
            h3Timer.innerHTML = "End";  
    }
    
    else if (Count < 0){
        btnStartCountdown.addEventListener("click", Error);
        
    }
}


function CountDown(){
    Count++ // + for start from same num
    StartCountDown();
    if(Count < 0){

    }

}
btnIncrease.addEventListener("click", function() {IncreaseCount(    )});
btnDecrease.addEventListener("click", function() {DecreaseCount()});
btnStartCountdown.addEventListener("click", CountDown);
btnIncreaseMinute.addEventListener("click", function() { IncreaseCount(60)}, false );
btnDecreaseMinute.addEventListener("click", function() { DecreaseCount(60)}, false ); 

// Count değerini al ve geri say




