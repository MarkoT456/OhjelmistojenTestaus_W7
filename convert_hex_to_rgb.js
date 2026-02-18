/**Function for converting provided hexvalue to rgb string*/
function ConvertHexToRgb(hexCode){
    let r = Number.parseInt(hexCode.substring(0, 2), 16);
    let g = Number.parseInt(hexCode.substring(2, 4), 16);
    let b = Number.parseInt(hexCode.substring(4, 6), 16);

    return `R:${r},G:${g},B:${b}`;
}

module.exports = ConvertHexToRgb;
