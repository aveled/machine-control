function onRapid(_x, _y, _z) {
    var x = xOutput.format(_x);
    var y = yOutput.format(_y);
    var z = zOutput.format(_z);

    if (x || y || z) {
        writeBlock(gFormat.format(0), x, y, z);
    }
}
