
/* ---- Don't change anything between here --- */

const teacher = {
    name: 'Max',
    age: 31,
    boring: 'Sometimes',
    fun: true
};

/* --- And here --- */

// Print out to document, on a new line, the key / value pairs of the object.

for (let key in teacher) {
    let pair = document.createElement("h2");
    pair.innerText = `${key}: ${teacher[key]}`;
    document.body.appendChild(pair);
}