$(document).ready(function(){
	$('.btn').click(function(){
	$('#quoteText').append("<DL>\n" + "<DT>" + "\"" + quotes[index] + "\"</DT>\n" + "<DD>\t\t\t" + "-- " + authors[index] + "</DT>\n" +  "</DL>\n"); 
	$('#quoteText').trigger('reset'); 	
	}); 
}); 





var all = [
	{quote: "I have a new philosophy. I'm only going to dread one day at a time.", author: "Charles Schulz"}, 
	{quote: "Reality is the leading cause of stress for those in touch with it.", author: "Jack Wagner"}, 
	{quote: "Few things are harder to put up with than the annoyance of a good example.", author: "Mark Twain"}, 
	{quote: "The pure and simple truth is rarely pure and never simple.", author: "Oscar Wilde"}, 
	{quote: "There's no business like show business, but there are several businesses like accounting.", author: "David Letterman"}, 
	{quote: "Man invented language to satisfy his deep need to complain.", author: "Lily Tomlin"}, 
	{quote: "Bad programmers worry about the code. Good programmers\n worry about data structures and their relationships.", author: "Linus Torvald"}, 
	{quote: "Just-a-second, what commands do we have to put the left foot in the ground...?", author: "Mendurim Rashiti"} 
]
	
var quotes = all.map(function(n){
	return n.quote; 
}); 
var authors = all.map(function(a){
	return a.author; 
});
	
var index = Math.floor(Math.random()* quotes.length);     
	












	// document.write("<DL>\n");
	// document.write("<DT>" + "\"" + quotes[index] + "\"</DT>\n");
	// document.write("<DD>\t\t\t" + "-- " + authors[index] + "</DT>\n");
	// document.write("</DL>\n");
	
	// console.log(quotes[0] + authors[0]);
	// // var results = document.getElementById("quoteText"); 
	// // results.innerHtml = '(<h3>' + quotes[0] + '</h3>)';
	// // document.write('<div>'+ quotes[0] + authors[0] + '</div>'); 	
	// document.getElementById('quoteText').innerHtml = ('<h3>' + quotes[0] + '</h3>');  

 // var quotes = []; 
 // var authors = []; 
 // for(var i=0; i < all.length; i++){
 // 	quotes.push(all[i]); 
 // debugger 
 // }


// document.getElementById('quoteText').innerHtml = quotes[0]; 


// document.write("<DL>\n");
// document.write("<DT>" + "\"" + quotes[0] + "\"</DT>\n");
// document.write("<DD>" + "-- " + authors[i] + "</DT>\n");
// document.write("</DL>\n");


