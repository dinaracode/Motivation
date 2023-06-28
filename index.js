const button = document.querySelector("#btn");
const par = document.querySelector("#par");


const quotes = [
    "« Just one small positive thought in the morning can change your whole day» - Dalai Lama",
    "« Opportunities don't happen, you create them» — Chris Grosser",
    "« Love your family, work super hard, live your passion» — Gary Vaynerchuk",
    "« It is never too late to be what you might have been» — George Eliot",
    "« Learn as if you will live forever, live like you will die tomorrow» — Mahatma Gandhi",
    "« Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too» — Mark Twain",
    "« When you change your thoughts, remember to also change your world» - Norman Vincent Peale",
    "« It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest» — Walter Anderson"
]

button.addEventListener("click", function(){
    let randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})