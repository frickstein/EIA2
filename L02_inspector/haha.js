/*
daniel frick
bla bla
271108


*/
var eventInspect;
(function (eventInspect) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let button = document.querySelector("button");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        button.addEventListener("click", customEvent);
        button.addEventListener("keyup", customEvent);
    }
    function setInfoBox(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        let span = document.querySelector("#spanner");
        let ziel = _event.target;
        span.innerHTML = "x: " + mouseX + " " + "y: " + mouseY + "<br>" + ziel;
        span.style.top = mouseY + 10 + "px";
        span.style.left = mouseX + 10 + "px";
        span.style.visibility = "visible";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log("________");
    }
    function customEvent(_event) {
        let button = _event.target;
        let newbubble = new CustomEvent("catch", { bubbles: true });
        button.dispatchEvent(newbubble);
        console.log(newbubble);
    }
})(eventInspect || (eventInspect = {}));
//# sourceMappingURL=haha.js.map