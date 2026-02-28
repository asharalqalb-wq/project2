function convertText() {
    let input = document.getElementById("inputText").value;
    let font = document.getElementById("fontSelect").value;
    
    // تحويل الحروف الإنجليزية إلى خطوط خرافية بسيطة
    let fancy = input
        .replace(/a/gi, "𝒶").replace(/b/gi, "𝒷").replace(/c/gi, "𝒸")
        .replace(/d/gi, "𝒹").replace(/e/gi, "ℯ").replace(/f/gi, "𝒻")
        .replace(/g/gi, "ℊ").replace(/h/gi, "𝒽").replace(/i/gi, "𝒾")
        .replace(/j/gi, "𝒿").replace(/k/gi, "𝓀").replace(/l/gi, "𝓁")
        .replace(/m/gi, "𝓂").replace(/n/gi, "𝓃").replace(/o/gi, "ℴ")
        .replace(/p/gi, "𝓅").replace(/q/gi, "𝓆").replace(/r/gi, "𝓇")
        .replace(/s/gi, "𝓈").replace(/t/gi, "𝓉").replace(/u/gi, "𝓊")
        .replace(/v/gi, "𝓋").replace(/w/gi, "𝓌").replace(/x/gi, "𝓍")
        .replace(/y/gi, "𝓎").replace(/z/gi, "𝓏");

    let outputDiv = document.getElementById("outputText");
    outputDiv.innerText = fancy;
    outputDiv.style.fontFamily = font;
}
