WSH JSLint Runner
=================

A Windows Scripting Host runner for [JSLint][1] and [JSHint][2].

You will need to download the latest version of [`jslint.js`][3] or [`jshint.js`][4] to the same directory as these files.

This enables running JSLint as an [EditPlus][5] user tool with the following configuration:

* Menu text: `JSLint`
* Command: `cscript.exe`
* Argument: `C:\path\to\jslint.wsf //Nologo $(FilePath)`
* Action: _Capture output_
* Output Pattern:
    * Regular expression: `^JSLint at line ([0-9]+) character ([0-9]+):.*$`
    * File name: _None_
    * Line: _Tagged Expression 1_
    * Column: _Tagged Expression 2_

To run JSHint use the same configuration but replace all instances of JSLint with JSHint.

[1]: http://www.jslint.com
[2]: http://jshint.com
[3]: https://raw.github.com/douglascrockford/JSLint/master/jslint.js
[4]: https://raw.github.com/jshint/jshint/master/jshint.js
[4]: http://www.editplus.com