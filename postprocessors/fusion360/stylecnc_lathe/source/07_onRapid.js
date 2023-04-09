function onRapid(_x, _y, _z) {
    var x = xOutput.format(_x);
    var z = zOutput.format(_z);

    if (x || z) {
        writeBlock(gFormat.format(0), x, z);
    }
}
