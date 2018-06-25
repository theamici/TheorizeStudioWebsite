var scrollData = 
{
    // Do not touch these 5 properties
    distance: 0,
    startScroll: 0,
    startTime: 0,
    endTime: 0,
    shouldAutoScroll: false,

    // You can change value on these 2 properties
    updateRate: 20,
    duration: 2250 // default duration
};

function scrollToSmoothly (targetID, customDuration){
    if(customDuration){
        scrollData.duration = customDuration;
    }

    scrollData.distance = document.getElementById(targetID).getBoundingClientRect().top;
    scrollData.startScroll = window.scrollY;

    scrollData.startTime = Date.now();
    scrollData.endTime = Date.now() + scrollData.duration;
    scrollData.shouldAutoScroll = true;
}

window.setInterval(function() {
    if(scrollData.shouldAutoScroll){
        let remainingTime = scrollData.duration - (scrollData.endTime - Date.now());
    
        let percentageDone = remainingTime / scrollData.duration;
        let adjustedPercentage = easeOutCubic(percentageDone);
        let newDistance = (scrollData.distance * adjustedPercentage) + scrollData.startScroll;
    
        window.scrollTo(0, newDistance);
    
        if(adjustedPercentage > 0.973)  {
            scrollData.shouldAutoScroll = false;
        }
    }
}, scrollData.updateRate);

function easeOutCubic (p) { 
    return (--p)*p*p+1;
}