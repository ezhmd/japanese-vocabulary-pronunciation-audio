const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'lib', 'mp3');

let files =  fs.readdirSync(directoryPath);

const regex = /(.*?)【(.*?)】/;

files = files.map((fileName) => {
    const arr = regex.exec(fileName);
    return {
        k: arr[1],
        r: arr[2]
    };
});

fs.writeFileSync('./dist/wk-audio-index.json', JSON.stringify(files, null, 1), 'utf8');