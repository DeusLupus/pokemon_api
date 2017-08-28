// Initialize Firebase
var config = {
	apiKey: "AIzaSyBGjG-7HjmlhzOWmNEowpGYd9pCS8UTDKg",
	authDomain: "pokemonapi-65800.firebaseapp.com",
	databaseURL: "https://pokemonapi-65800.firebaseio.com",
	projectId: "pokemonapi-65800",
	storageBucket: "pokemonapi-65800.appspot.com",
	messagingSenderId: "1066313172748"
};

firebase.initializeApp(config);

var pokeData = firebase.database();

//get user input
$("#addPokemonBtn").on("click", function() {
	var pokemonName = $("#pokemonName").val().trim();
	var typeOne = $("#type1").val();
	var typeTwo = $("#type2").val();
	var nDex = $("#nDex").val().trim();

//assign values
var newPokemon = {
	name: pokemonName,
	type1: typeOne,
	type2: typeTwo,
	nDex: nDex
}

//push to firebase
	pokeData.ref().push(newPokemon);

	alert('Pokemon Added!');

	$('#pokemonName').val('');
	$('#type1').val('');
	$('#type2').val('');
	$('#nDex').val('');

	return false;
})
