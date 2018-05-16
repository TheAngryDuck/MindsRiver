/**
 * Wraps a string around each character/letter
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input as splitted by chars/letters
 */

var str = "Some say that the world is ruled by the strong, others think it is in the hands of the wise. But ";
function wrapChars(str, tmpl) {
    var answer = str.replace(/\S/g, tmpl || "<span class='people'>$&</span>");

    return answer;
}


