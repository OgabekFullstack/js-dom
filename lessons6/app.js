let keyboard = [
    {
        symbol: '`',
        shift: '~'
    },
    {
        symbol: '1',
        shift: '!'
    },
    {
        symbol: '2',
        shift: '@'
    },
    {
        symbol: '3',
        shift: '#'
    },
    {
        symbol: '4',
        shift: '$'
    },
    {
        symbol: '5',
        shift: '%'
    },
    {
        symbol: '6',
        shift: '^'
    },
    {
        symbol: '7',
        shift: '&'
    },
    {
        symbol: '8',
        shift: '*'
    },
    {
        symbol: '9',
        shift: '('
    },
    {
        symbol: '0',
        shift: ')'
    },
    {
        symbol: '-',
        shift: '_'
    },
    {
        symbol: 'q',
        shift: 'Q'
    },
    {
        symbol: 'w',
        shift: 'W'
    },
    {
        symbol: 'e',
        shift: 'E'
    },
    {
        symbol: 'r',
        shift: 'R'
    },
    {
        symbol: 't',
        shift: 'T'
    },
    {
        symbol: 'y',
        shift: 'Y'
    },
    {
        symbol: 'u',
        shift: 'U'
    },
    {
        symbol: 'i',
        shift: 'I'
    },
    {
        symbol: 'o',
        shift: 'O'
    },
    {
        symbol: 'p',
        shift: 'P'
    },
    {
        symbol: '[',
        shift: '{'
    },
    {
        symbol: ']',
        shift: '}'
    },
    {
        symbol: 'a',
        shift: 'A'
    },
    {
        symbol: 's',
        shift: 'S'
    },
    {
        symbol: 'd',
        shift: 'D'
    },
    {
        symbol: 'f',
        shift: 'F'
    },
    {
        symbol: 'g',
        shift: 'G'
    },
    {
        symbol: 'h',
        shift: 'H'
    },
    {
        symbol: 'j',
        shift: 'J'
    },
    {
        symbol: 'k',
        shift: 'K'
    },
    {
        symbol: 'l',
        shift: 'L'
    },
    {
        symbol: ';',
        shift: ':'
    },
    {
        symbol: '\'',
        shift: '"'
    },
    {
        symbol: '\\',
        shift: '|'
    },
    {
        symbol: 'z',
        shift: 'Z'
    },
    {
        symbol: 'x',
        shift: 'X'
    },
    {
        symbol: 'c',
        shift: 'C'
    },
    {
        symbol: 'v',
        shift: 'V'
    },
    {
        symbol: 'b',
        shift: 'B'
    },
    {
        symbol: 'n',
        shift: 'N'
    },
    {
        symbol: 'm',
        shift: 'M'
    },
    {
        symbol: ',',
        shift: '<'
    },
    {
        symbol: '.',
        shift: '>'
    },
    {
        symbol: '/',
        shift: '?'
    },
]

container = document.querySelector(".container");
openBtn = document.querySelector(".toggle-keyboard");
openBtn.addEventListener("click", function(e) {
    container.classList.toggle("open");
});