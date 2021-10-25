
var questions = ["I was carried into a dark room, set on fire. I wept, and then my head was cut off. What am I?",
                            "I appear everywhere, except in the dark. What am I?",
                            "I follow right behind you, I creep on the ground, and I dont make a sound. What am I?"
                ];
var answers = ["candle", "light","shadow"];
var random = Math.floor(Math.random()* questions.length);

function submit(){
    var b = input.value;
    if (random == 0 && b == answers[0]) {
        document.getElementById("answers").innerHTML=" correct.." 
        setTimeout(function () {
            window.location.href = "file:///Users/sebas/Art151/Art151Project2.5/transition_to_circle2.html"; //will redirect to your blog page (an ex: blog.html)
         }, 2000);


    } else if (random == 1 && b == answers[1]) {
        document.getElementById("answers").innerHTML=" correct.."
        setTimeout(function () {
            window.location.href = "file:///Users/sebas/Art151/Art151Project2.5/transition_to_circle2.html"; //will redirect to your blog page (an ex: blog.html)
         }, 2000);
       
    } else if (random == 2 && b == answers[2]) {
        document.getElementById("answers").innerHTML=" correct.."
        setTimeout(function () {
            window.location.href = "file:///Users/sebas/Art151/Art151Project2.5/transition_to_circle2.html"; //will redirect to your blog page (an ex: blog.html)
         }, 2000);
    } else {
        document.getElementById("answers").innerHTML=" incorrect.."
    }}
document.getElementById("message").innerHTML= questions[random];
