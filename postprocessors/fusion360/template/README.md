# Fusion 360 Post Processor Template


Edit `postName` and `files` in `data.js` and run `npm run build` to generate the post processor.

The `files` array contains the files that will be included in the post processor. The order of the files is important. The first file in the array will be the first file in the post processor. The last file in the array will be the last file in the post processor. The files are in the `source` directory and follow the naming convention `<orderIndex>_<fileName>.js`.
