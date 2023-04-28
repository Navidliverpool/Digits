// This solution is from Codewars.
let opts, lastGuess;

const count = ([a, b, c, d], [e, f, g, h]) => (a == e) + (b == f) + (c == g) + (d == h);
const nArr = n => [...String(n).padStart(4, '0')].map(v => Number(v));

function game(matches) {
    if (matches === -1)
        opts = Array.from({ length: 10000 }, (_, i) => i).filter(i => new Set(String(i).padStart(4, '0')).size === 4);
    else
        opts = opts.filter(v => count(nArr(v), lastGuess) == matches);
    lastGuess = nArr(opts[0]);
    return lastGuess;
}