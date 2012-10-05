Use JSHint in EditPlus
=================
-----------------
_It was forked from [slieschke/wsh-jslint-runner][9] and I did some changes as my habit._

Configure [JSHint][2] in [EditPlus][5] with the following steps:
--------------------
* Create a sub directory named `JSHint` in Editplus application directory.
* Download and extract all these files to the `JSHint` directory.
* EditPlus Menu > Tools > Configure User Tools > Add Tool > Program
* Menu text: `JSHint current file`
* Command: `cscript.exe`
* Argument: `jshint.wsf $(FilePath) //Nologo`
* Initial: `$(AppDir)\JsHint\`
* Action: _Capture output_
* Output Pattern:
    * Regular expression: `^line ([0-9]+) column ([0-9]+):.*$`
    * File name: _None_
    * Line: _Tagged Expression 1_
    * Column: _Tagged Expression 2_
* Save: _None_

You can configure JSHint options by edit `options.js` file. 


the latest version of [`jshint.js`][4].

[JSHint options document][7]

[1]: http://www.jslint.com
[2]: http://jshint.com
[3]: https://raw.github.com/douglascrockford/JSLint/master/jslint.js
[4]: https://raw.github.com/jshint/jshint/master/jshint.js
[5]: http://www.editplus.com
[6]: http://www.jslint.com/lint.html#options
[7]: http://www.jshint.com/docs/
[8]: https://github.com/douglascrockford/JSON-js/raw/master/json_parse_state.js
[9]: https://github.com/slieschke/wsh-jslint-runner