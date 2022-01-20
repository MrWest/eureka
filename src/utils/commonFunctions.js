
const SIZE = 380;
const PIXEL = 6.97 ;

const generatedLines =  text => {
    const words = text.split(' ');
    const rslt = words.reduce((content, word) => {
 const newLine = `${content.currentLine} ${word}`;
 if(newLine.length * PIXEL > SIZE)
   return { currentLine: word, lines: [...content.lines, content.currentLine] };
 return {... content, currentLine: newLine };
    }, { currentLine: '', lines: []});
    return [...rslt.lines, rslt.currentLine];
};

export { generatedLines };