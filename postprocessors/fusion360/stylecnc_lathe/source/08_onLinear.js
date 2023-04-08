function onLinear(_x, _y, _z, feed) {
    var x = xOutput.format(_x);
    var y = yOutput.format(_y);
    var z = zOutput.format(_z);
    var f = getFeed(feed);

    writeBlock(gFormat.format(1), x, y, z, f);
}
