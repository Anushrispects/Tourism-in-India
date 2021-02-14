var targetInput = document.getElementById("country"),
results = document.getElementById("autocomplete-results"),
countryList = [	 'India',
'Russia',
	 'China',
	 'Kazakhstan',
    'Saudi Arabia',
 'Iran',
	 'Mongolia',
	 'Indonesia',
	 'Pakistan',
	 'Turkey',
	 'Myanmar',
	 'Afghanistan',
   	 'Yemen',
	 'Thailand',
	 'Turkmenistan',
	 'Uzbekistan',
	 'Iraq',
	 'Japan',
	 'Vietnam',
	 'Malaysia'];

matches=[],
resultCursor=0;

targetInput.focus();
targetInput.addEventListner("keydown",function(event){
	if (event.keyCode == '13') {
	        event.preventDefault();
	    }
});

targetInput.addEventListener('keyup', function(event) {

results.innerHTML="";
toggleResults("hide");

if(this.value.length > 0){
matches = getMatches(this.value);

if(matches.length > 0){
  displayMatches(matches);
}
}

if (results.classList.contains('visible')) {
			switch(event.keyCode) {
					case 13:
							targetInput.value = results.children[resultsCursor].innerHTML;
							toggleResults('hide');
							resultsCursor = 0;

							break;
					case 38:
							if (resultsCursor > 0) {
									resultsCursor--;

									moveCursor(resultsCursor);
							}

							break;
					case 40:
							if (resultsCursor < (matches.length - 1)) {
									resultsCursor++;

									moveCursor(resultsCursor);
							}

							break;
			}
	}
});


function getMatches(inputText){
  var matchList = [];

  for(var i=0;i < countryList.length; i++){
    if(countryList[i].toLowerCase().indexOf( inputText.toLowerCase() ) != -1 ){
  matchList.push( countryList[i] );
  }
  }
  return matchlist;

  function displayMatches( matchList ){
  var j = 0;
  while( j < matchList.length ){
  results.innerHTML += '<li clss="result> + matchList[j] + '</li>';
  j++;

  }

  moveCursor( "resultCursor" );

  toggleResults( "show" );

  }

  fuction moveCursor(pos) {
for(var x = 0; x< results.children.length; x++ ){
results.children[x].classList.remove( "highlighted" );
}
results.children[pos].classList.add( "highlighted" );
}
// Define a function for toggling the results list
function toggleResults(action) {
    if (action == 'show') {
        results.classList.add('visible');
    } else if (action == 'hide') {
        results.classList.remove('visible');
    }
}
