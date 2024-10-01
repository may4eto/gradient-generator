const layer1 = document.querySelector(".layer1")
const layer2 = document.querySelector(".layer2")
const changeButton = document.querySelector(".change")
const downloadButton = document.querySelector(".download")
const gradientNode = document.getElementById('gradient');

function download() {
  htmlToImage.toPng(gradientNode)
  .then(function (dataUrl) {
    let img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
    let link = document.createElement('a');
    link.download = 'gradient.png';
    link.href = dataUrl;
    link.click();
  })
  .catch(function (error) {
    console.error('Oops, something went wrong!', error);
  });
}

function makeColor() {
  let h = Math.random() * 360
  let s = 50 + Math.random() * 50
  let l = 40 + Math.random() * 50
  return `hsl(${h}, ${s}%, ${l}%)`
}

function makeGradient() {
  let color1 = makeColor()
 	let color2 = makeColor()
  let angle = Math.random() * 360
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`
}

function changeBg() {
  layer1.style.backgroundImage = makeGradient()
  layer2.style.backgroundImage = makeGradient()
}

changeBg()

changeButton.addEventListener("click", function() {
  changeBg()
})

downloadButton.addEventListener("click", function() {
  download()
})