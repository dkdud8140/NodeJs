
    const toolbar = [ "fontname","fontsize","style","color","table", "height",
    ["para", ["ul","ol"],], ["view",["fullscreen", "help"]],
    ["insert",["link"]] ];

const fontNames = [
"맑은 고딕",
"궁서",
"굴림",
"바탕체",
"Arial",
"Arial Black",
"Comic Sans MS",
"Courier New",
]

const fontSizes = [
"8", "10", "12", "14", "16", "18", "20", "24",
]

$("#b_text").summernote({
lang: "ko-KR",
toolbar,
fontNames : fontNames,
fontsizes : fontSizes,
placeholder: "본문을 입력하세요",
width: "60%",
height: "300px",
});