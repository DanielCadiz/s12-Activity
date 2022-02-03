let trainer = {
	name: 'Ash Ketchum',
	age: 10,
	pokemon: ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'],
	friends: {
		kanto: ['Brock', 'Misty'],
		hoenn: ['May', 'Max']
	},
	talk: function() {
		console.log('Pikachu! I choose you!');
	} 
}
console.log(trainer);
console.log('Result of dot notation:')
console.log(trainer.name);
console.log('Result of bracket notation:')
console.log(trainer['pokemon']);
console.log('Result of talk method:')
trainer.talk();

function Pokemon(name, level) {
	this.name = name;
	this.level = level;
	this.health = level * 2;
	this.attack = level;

	this.tackle = function(target) {
		target.health -= this.attack;
		console.log(this.name + ' tackled ' + target.name);
		console.log(target.name + "'s health is now reduced to " + target.health);
		if(target.health <= 0) {
			console.log(target.name + ' fainted.');
		}
	};
	this.faint = function(){
		console.log(this.name + ' fainted.');
	};
}

let pikachu = new Pokemon('Pikachu', 12);
let geodude = new Pokemon('Geodude', 8);
let mewtwo = new Pokemon('MewTwo', 100);

console.log(pikachu);
console.log(geodude);
console.log(mewtwo);

geodude.tackle(pikachu);
mewtwo.tackle(geodude);
console.log(geodude);
