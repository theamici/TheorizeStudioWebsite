var shouldAutoScroll = false;

var scrollData = 
{
    distance: 0,
    startTime: 0,
    endTime: 0,
    duration: 2000,
    startScroll: 0
};

function scrollToArticle (){
    scrollData.distance = document.getElementById('article').getBoundingClientRect().top;
    scrollData.startTime = Date.now();
    scrollData.endTime = Date.now() + scrollData.duration;
    shouldAutoScroll = true;
    scrollData.startScroll = window.scrollY;
}

window.setInterval(function() {
    if(shouldAutoScroll){

        //alert(scrollData.duration - (scrollData.endTime - Date.now()));

        let remainingTime = scrollData.duration - (scrollData.endTime - Date.now());
    
        let percentageDone = remainingTime / scrollData.duration;
        let adjustedPercentage = easeOutCubic(percentageDone);
        let newDistance = (scrollData.distance * adjustedPercentage) + scrollData.startScroll;
    
        window.scrollTo(0, newDistance);
    
        if(adjustedPercentage > 0.973)  {
            shouldAutoScroll = false;
        }
    }
}, 20);

function easeOutCubic (p) { 
    return (--p)*p*p+1;
}