/*global ActiveXObject: false, WScript: false*/
/*jslint evil: true*/
(function () {
	'use strict';
	var filename, i, e,
		fso = new ActiveXObject('Scripting.FileSystemObject'),
		options = this.options || {},
		tool = this.JSLINT || this.JSHINT,
		exit = function (msg) {
			WScript.StdOut.WriteLine(msg);
			WScript.Quit();
		};
	if (!tool) {
		exit('jslint.js or jshint.js not found.');
	}
	if (WScript.Arguments.length === 0) {
		exit('No filename provided.');
	}
	filename = WScript.Arguments(0);
	if (!fso.FileExists(filename)) {
		exit('File "' + filename + '" not found.');
	}
	WScript.StdOut.WriteLine(filename +'\n');

	//read utf-8 text file.  by cuixiping 2013-02-19.
	function ReadUTF8TextFile(filepath){
		var stm = new ActiveXObject("ADODB.Stream");
		stm.Type = 2;
		stm.Mode = 3;
		stm.Charset = "utf-8";
		stm.Open();
		stm.LoadFromFile(filepath);
		var s = '';
		if(!stm.EOS){
			s = stm.ReadText();
		}
		stm.Close();
		stm = null;
		return s;
	}

	//if (!tool(fso.OpenTextFile(filename, 1, false, -2).ReadAll(), options)) {
	if (!tool(ReadUTF8TextFile(filename), options)) {
		for (i = 0; i < tool.errors.length; i = i + 1) {
			e = tool.errors[i];
			if (e) {
				WScript.StdOut.WriteLine('line ' + e.line + ' column ' + e.character + ': ' + e.reason);
				WScript.StdOut.WriteLine((e.evidence || '').replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1')); // the regex trims leading/trailing whitespace
				WScript.StdOut.WriteLine();
			}
		}
	}
}());
