	$(document).ready(function(){
	

	var quoteDB=[
		{quote: "I have a new philosophy. I'm only going to dread one day at a time.", author: "Charles Schulz"}, 
		{quote: "Reality is the leading cause of stress for those in touch with it.", author: "Jack Wagner"}, 
		{quote: "Few things are harder to put up with than the annoyance of a good example.", author: "Mark Twain"}, 
		{quote: "The pure and simple truth is rarely pure and never simple.", author: "Oscar Wilde"}, 
		{quote: "There's no business like show business, but there are several businesses like accounting.", author: "David Letterman"}, 
		{quote: "Man invented language to satisfy his deep need to complain.", author: "Lily Tomlin"}, 
		{quote: "Bad programmers worry about the code. Good programmers\n worry about data structures and their relationships.", author: "Linus Torvald"}, 
		{quote: "Just-a-second, what commands do we have to put the left foot in the ground...?", author: "Mendurim Rashiti"}, 
		{quote: "Walking on water and developing software from a specification are easy if both are frozen", author: "Edward V Berard"}, 
		{quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", author: "Mosher’s Law of Software Engineering"}, 
		{quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds"}, 
		{quote: "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.", author: "Why The Lucky Stiff"},
		{quote: "Software testing is a sport like hunting, it's bughunting.", author: "Amit Kalantri"},

		]; 
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteAuthor = $('#quoteAuthor').text();
			changeBackground();

			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var quoteSource = quoteDB.length;
			var randomNumber= Math.floor(Math.random()*quoteSource);
			//set a new quote
			for(i=0;i<=quoteSource;i+=1){
			var newQuote = quoteDB[randomNumber].quote;
			var newQuoteAuthor = quoteDB[randomNumber].author;
			//console.log(newQuote,newQuoteAuthor);
      		var timeAnimation = 100;
      		var quoteContainer = $('#quoteContainer');
	      		//fade out animation with callback
	      		quoteContainer.fadeOut(timeAnimation, function(){
	        		quoteContainer.html('');
						quoteContainer.append('<p>'+newQuote+'</p>'+'<p id="quoteAuthor">'+'-'+newQuoteAuthor+'</p>');
	        
			        //fadein animation.
			        quoteContainer.fadeIn(timeAnimation);
			    });  
			
				break;
			};//end for loop
	
		// generate numbers for changing background colors
  		function generateRandomNum(min,max){
    		return Math.floor(Math.random()*(max-min+1)+min);
  		}

	  	function changeBackground(){
		    var colorR = generateRandomNum(50,150);
		    var colorG = generateRandomNum(50,100);
		    var colorB = generateRandomNum(72,80);
		    var colorA = generateRandomNum(2,4);


		    $("body ").css("background-color","rgba("+ colorR + "," + colorG + "," + colorB + "," + colorA + ")").fadeIn(timeAnimation);
		    $("#quoteButton").css("background-color","rgba("+ colorR + "," + colorG + "," + colorB + "," + colorA + ")").fadeIn(timeAnimation);

	 	}

	 	
	 		

	});//end quoteButton function
		
		
});//end document ready

