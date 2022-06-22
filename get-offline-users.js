/**
 * La función devuelve un array con los nomrbes de usuario de todos los usuarios que estan OFFLINE
 * 
 * @param {string} users 
 * @returns array
 */

function getOfflineUsers(users) {
    // usar https://www.w3schools.com/jsref/jsref_match.asp
    // junto https://javascript.info/regexp-lookahead-lookbehind#tasks

    return users.match(/\w+(?=\sOFFLINE)/gm);
}


let bbdd =
    `mario ONLINE,
pedro OFFLINE,
marta ONLINE,
macario OFFLINE
`;

console.log(getOfflineUsers(bbdd)); // ["pedro", "macario"] 
