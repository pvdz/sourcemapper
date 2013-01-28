function start(){
  this.container = document.body.appendChild(
    (function(){
	var dom = document.createElement('div');
	dom.setAttribute('style', 'border: 1px solid red; margin: 5px;');
	dom.appendChild(document.createTextNode('\n      '));
	dom.appendChild((function(){
		var dom = document.createElement('p');
		dom.appendChild(document.createTextNode('Please fill out this form:'));
		return dom;
	})());
	dom.appendChild(document.createTextNode('\n      '));
	dom.appendChild((function(){
		var dom = document.createElement('p');
		dom.appendChild((function(){
			var dom = document.createElement('label');
			dom.appendChild(document.createTextNode('Name: '));
			dom.appendChild((function(){
				var dom = document.createElement('input');
				dom.setAttribute('style', 'width:100px;');
				return dom;
			})());
			return dom;
		})());
		return dom;
	})());
	dom.appendChild(document.createTextNode('\n      '));
	dom.appendChild((function(){
		var dom = document.createElement('p');
		dom.appendChild((function(){
			var dom = document.createElement('label');
			dom.appendChild(document.createTextNode('Fail: '));
			dom.appendChild((function(){
				var dom = document.createElement('input');
				dom.setAttribute('style', 'width:100px;');
				return dom;
			})());
			return dom;
		})());
		return dom;
	})());
	dom.appendChild(document.createTextNode('\n   '));
	return dom;
})()
  );
  this.container.querySelectorAll('input')[0].onkeyup = function(){ this.name = this.value; console.log('name=',this.value); };
  this.container.querySelectorAll('input')[1].onkeyup = function(){ fail; this.name = this.value; console.log('title=',this.value); };
}
//@ sourceMappingURL=source.map
