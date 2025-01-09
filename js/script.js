/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here

	$(".beforeimagetest").cndkbeforeafter(
		{
		  mode: "drag",
		  theme: "dark",
		  beforeText: "BEFORE",
       	  afterText: "AFTER"
		}
	);

		// $('.beforeAfter').beforeAfter({
		// 	movable: true,
        //     clickMove: true
		// });

	var height_of_container = $(".container").height();
	console.log(height_of_container)


	var pymChild = new pym.Child({ polling: 500 });
    	pymChild.sendHeight();

}); //end document.ready block
