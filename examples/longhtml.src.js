function start(){
  this.container = document.body.appendChild(
    <div @container style="border: 1px solid red; margin: 5px;">
      <p>Please fill out this form:</p>
      <p><label>Name: <input @name style="width:100px;" /></label></p>
      <p><label>Fail: <input @title style="width:100px;" /></label></p>
   </div>
  );
  this.container.querySelectorAll('input')[0].onkeyup = function(){ this.name = this.value; console.log('name=',this.value); };
  this.container.querySelectorAll('input')[1].onkeyup = function(){ fail; this.name = this.value; console.log('title=',this.value); };
}
