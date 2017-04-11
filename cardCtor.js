function BasicCard (front, back){
	this.front = front;
	this.back = back;
	this.ask = function (){
		console.log(this.front);
	}
	this.answer = function(){
		console.log(this.back);
	}
}


var president = new BasicCard("Who was the first president of the United States?", "George Washington");

// president.ask();
// president.answer();


function ClozeCard (fullText, deletion){
	this.fullText = fullText;
	this.deletion = deletion;
	this.ask = function(){
		var partial = this.fullText.replace(deletion, "_______________");
		console.log(partial);
	} 
	this.answer = function(){
		console.log(deletion);
	}
}



var os = new ClozeCard ("Windows 10 is the operative sistem on this computer", "Windows 10");

os.ask();
