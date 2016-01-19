window.onload = function(){
	DOMCreator = function()();
	DOMCreator.createElement = fucntion(tag, parent, className){
		document.createElement(tag);
		parent.appendChild(elem);
		if (className) {
			elem.className = className;
		}
		elem.className = className;
		if (innerHTML){
			elem.innerHTML = innerHTML;
		}
		elem.innerHTML = innerHTML;
		return elem;
	};

DOMCreator.createCheckBox = function(parent, text) {
	var div = DOMCreator.createElement('label',parent, 'checkbox');
	var label = DOMCreator.createElement('label',parent);
	var input = DOMCreator.createElement('input', label);
	DOMCreator.createElement('p', label, '', text);
	input.type = "checkbox";
};

	var div = DOMCreator.createElement('div', document.body, 'header');
	DOMCreator.createElement('div', '', document.body, '', 'Programming Test');
	var content = DOMCreator.createElement('ul', document.body, 'content');
	for (var i = 1; i <= 3; i++) {
		var li1 = DOMCreator.createElement('li',content, '');
		DOMCreator.createElement('h4',li1, '', i+'.Question №'+i);
		var ul = DOMCreator.createElement('ul', li);
		for (var j = 1; j <=3; j++) {
			var li2 = DOMCreator.createElement('li', ul);
			DOMCreator.createCheckBox(li2, 'Variant' +j);
		}
	}

	var button = DOMCreator.createElement('div', document.body, 'button');
	var btn = DOMCreator.createElement('button',button, 'btn btn-primary', 'Check the result');
	bnt.type = 'button';

};



	// var div = document.createElement('div');
	// div.className = 'header';
	// document.body.appendChild(div);
	// var h3 = document.createElement('h3');
	// h3.innerHTML= 'Programming Test'
	// div.appendChild(h3);

};
