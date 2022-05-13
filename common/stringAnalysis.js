const path = "https://github.com/Mega-star-Nikolya/surfboard/blob/master/dist/index.html"

const isHtml = stringAnalysis => {
      return stringAnalysis.slice(stringAnalysis.lastIndexOf('.') + 1) === 'html';
}
console.log(isHtml(path))




