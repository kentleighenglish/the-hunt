const clues = [
	{
		_id: "flat-lounge",
		type: "image",
		text: "Where a question was asked,<br>delayed for too long.",
		image: "images/flat-lounge.png",
		hint: "The wall might hold the answers.",
		stage: 1,
		difficulty: 1
	},
	{
		_id: "flat-bedroom",
		type: "text",
		text: "When one cannot wait, perhaps it is best to turn to deduction;<br>it may make short work of things.",
		hint: "Elementary!",
		stage: 1,
		difficulty: 1
	},
	{
		_id: "flat-bookshelf",
		type: "text",
		text: "Perhaps it's time for a break?",
		hint: "Check your hands for a minute, maybe it'll come to you.",
		stage: 1,
		difficulty: 1
	},
	{
		_id: "flat-clock",
		type: "image",
		image: "images/flat-clock.jpg",
		hint: "It has a name, it starts with R.",
		stage: 1,
		difficulty: 2
	},
	{
		_id: "car",
		type: "audio",
		audio: "audio/car.mp3",
		hint: "Where families unrelated, gathered for a common celebration.",
		stage: 1,
		difficulty: 3
	},
	{
		_id: "the-trent",
		type: "text",
		text: "I am with you always, but I never move;<br>I hold great value, but alone I am worth little.",
		hint: "I also hold a driver's license.",
		stage: 1,
		difficulty: 2
	},
	{
		_id: "wallet",
		type: "image",
		image: "images/wallet.jpg",
		hint: "Green, Sri Lanka, and money; where nearby would those be a common factor?",
		stage: 1,
		difficulty: 3
	},
	{
		_id: "green-shop",
		type: "image",
		image: "images/green-shop.jpg",
		hint: "A place where the human residents are outnumbered.",
		stage: 1,
		difficulty: 3
	},
	{
		_id: "karls",
		type: "text",
		text: "I am a cat, but I do not meow; you can cuddle me close, and I won't go.",
		hint: "I'm a hoot",
		stage: 1,
		difficulty: 4
	},
	{
		_id: "pusyscat",
		type: "text",
		text: "Round to four decimal places.<br><ul><li>(14,537 x 165) / 45708 = ??</li><li>(3,673 x 3) / -7,500 = ??</li></ul>",
		hint: "A few nights, a few hours, spent here just lying back and talking.",
		stage: 1,
		difficulty: 3
	},
	{
		_id: "parking-bedpark",
		type: "text",
		text: "Freakiest Grow 0124<br>9-4-4",
		hint: "The first pretty booms, or was it the second?<br>I suggested climbing up.",
		stage: 2,
		difficulty: 3
	},
	{
		_id: "gateway-bedpark",
		type: "text",
		text: "Neither Labour, nor the Lib Dems.",
		hint: "Was on the short-list of reception venues.",
		stage: 2,
		difficulty: 1
	},
	{
		_id: "cons-club",
		type: "text",
		text: "Some grave news, there are signs the veterans with a common wealth of sadness.<br />The signs we address speak of a canine distress.",
		hint: "Behind the signs no dog wants to see; located near the old soldier's memories.",
		stage: 2,
		difficulty: 3
	},
	{
		_id: "cemetery",
		type: "text",
		text: "In your bobbly hat.",
		hint: "... I sat; but where?",
		stage: 2,
		difficulty: 2
	},
	{
		_id: "bench-bedpark",
		type: "image",
		image: "images/bench-bedpark.jpg",
		hint: "Not far from a certain empty alcoholic beverage deposit.",
		stage: 2,
		difficulty: 2
	},
	{
		_id: "tee-bedpark",
		type: "image",
		image: "images/tee-bedpark.jpg",
		hint: "Near the skate park",
		stage: 2,
		difficulty: 2
	},
	{
		_id: "leisure-centre",
		type: "text",
		text: "The corner of a group of trees; once filled with many goodbyes, now forgotten.",
		hint: "Is there a parking space?",
		stage: 2,
		difficulty: 3
	},
	{
		_id: "the-grove",
		type: "image",
		image: "images/the-grove.jpg",
		hint: "Don't you recognize it? It follows you everywhere.",
		stage: 2,
		difficulty: 3
	},
	{
		_id: "royal-mail",
		type: "text",
		text: "In a pleasant place, where a post box resides.<br>You'll find what's in-store; number the days spent by my side.",
		hint: "Premier; 18/11/14",
		stage: 2,
		difficulty: 4
	},
	{
		_id: "phone-box",
		type: "image",
		image: "images/phone-box.jpg",
		hint: "I can remember you in silver, in this place.",
		stage: 2,
		difficulty: 5
	},
	{
		_id: "reflex",
		type: "text",
		text: "This wasn't the first stop in this town that night, retrace those steps.",
		hint: "We danced and we grinded.",
		stage: 3,
		difficulty: 2
	},
	{
		_id: "willy-whites",
		type: "image",
		image: "images/willy-whites.jpg",
		hint: "There's only four circles located near here, this one can be found North my dear.",
		stage: 3,
		difficulty: 2
	},
	{
		_id: "abbey-gate",
		type: "audio",
		audio: "audio/abbey-gate.mp3",
		hint: "I do.",
		stage: 3,
		difficulty: 3
	},
	{
		_id: "suite-riversley",
		type: "text",
		text: "Not far from here, an octagon sits; just like you wished to be wed near.",
		hint: "Outside, under or in a _____?",
		stage: 3,
		difficulty: 3
	},
	{
		_id: "park-riversley",
		type: "text",
		text: "Riversley, such a sweet name; I'm sure some think only kids would play this game.<br>For grown-ups it is beige, and bland; just like sand. For kids sand's just grand.",
		hint: "Riversley, kids, sand.",
		stage: 3,
		difficulty: 3
	},
	{
		_id: "playground-riversley",
		type: "text",
		text: "Quack!",
		hint: "Watch out for a troll, can't afford the toll.",
		stage: 3,
		difficulty: 1
	},
	{
		_id: "bridge-riversley",
		type: "text",
		text: "You cannot park in this place, unless you're a patron or perhaps a saint.",
		hint: "Maybe you can park here when you go to a certain group again.",
		stage: 3,
		difficulty: 1
	},
	{
		_id: "church-parking",
		type: "image",
		image: "images/church-parking.jpg",
		hint: "Hopefully they'll have some in stock.",
		stage: 3,
		difficulty: 1
	},
	{
		_id: "sainsburys",
		type: "image",
		image: "images/sainsburys.jpg",
		hint: "Mushroom",
		stage: 3,
		difficulty: 1
	},
	{
		_id: "abbey-theatre",
		type: "image",
		image: "images/abbey-theatre.jpg",
		hint: "Two people; both ladies; rather large.",
		stage: 3,
		difficulty: 5
	},
	{
		_id: "gala-bingo",
		type: "audio",
		audio: "audio/gala-bingo.mp3",
		hint: "Enjoy.",
		stage: 4,
		difficulty: 2
	},
	{
		_id: "lobby-rplus",
		type: "text",
		text: "Where I first watched Mary Bartowski face-off with Cabe Gallo.",
		hint: "We didn't watch it in the office.",
		stage: 4,
		difficulty: 3
	},
	{
		_id: "lounge-rplus",
		type: "audio",
		audio: "audio/lounge-rplus.mp3",
		hint: "Where a door appears a secret.",
		stage: 4,
		difficulty: 3
	},
	{
		_id: "secret-rplus",
		type: "text",
		text: "A trip to Cov is not complete, without a visit to the musician Rob Evans.",
		hint: "It rhymes with Lowcut Flan.",
		stage: 4,
		difficulty: 3
	},
	{
		_id: "donut-man",
		type: "text",
		text: "Need a haircut? Don't have to look far.",
		hint: "Near the fountain, there's a lucky business.",
		stage: 4,
		difficulty: 2
	},
	{
		_id: "godiva-barber",
		type: "text",
		text: "This business thrives, while others do fail.<br>Especially when instead of eating, they're chasing small tails.",
		hint: "A business failed, for rodents made a home there.",
		stage: 4,
		difficulty: 3
	},
	{
		_id: "cosmo",
		type: "text",
		text: "Searching can be tiresome. Patience and determination can be rewarding though.<br>Rightly so.<br>In case you find yourself lost; No worries.<br>Kindly Look Everywhere; Stop at nothing.",
		hint: "Think big, think in case.",
		stage: 4,
		difficulty: 4
	},
	{
		_id: "sprinkles",
		type: "text",
		text: "Find natural peace in this noise.<br>Under glass and steel.",
		hint: "The skyway loom yonder, o'er serene greenery.",
		stage: 4,
		difficulty: 1
	},
	{
		_id: "lady-herberts",
		type: "image",
		image: "images/lady-herberts.jpg",
		hint: "There was a place, used to be called the Colosseum, or Colly.",
		stage: 4,
		difficulty: 4
	},
	{
		_id: "kasbah",
		type: "image",
		image: "images/kasbah.jpg",
		hint: "You'd think this would be ramping up in difficulty.",
		stage: 4,
		difficulty: 4
	},
	{
		_id: "priory-place",
		type: "audio",
		audio: "audio/priory-place.mp3",
		text: "Seek what you've already encountered; find a chapter that is the answer to life, and everything.",
		hint: "Where would you go, to look for a book here? Not WH Smiths, too expensive.",
		stage: 4,
		difficulty: 5
	},
	{
		_id: "oxfam-bookshop",
		type: "text",
		text: "LTILNKZ'X NSJWY UJSFSHJ, TGXJWAJI GD YMJ YFNQTW.",
		hint: "Thomas is the tailor.",
		stage: 4,
		difficulty: 5
	},
	{
		_id: "lady-godive",
		type: "image",
		image: "images/lady-godiva.jpg",
		hint: "A royal-like church, for those born again.",
		stage: 4,
		difficulty: 5
	},
	{
		_id: "church-queens",
		type: "text",
		text: "Find a place is meant for those who don't hear the sounds, that are quite ironically from the place that is found nearby.",
		hint: "Henry Fry was quite a guy.",
		stage: 4,
		difficulty: 5
	},
	{
		_id: "henry-fry",
		type: "text",
		text: "Where the ones are zeroes, sum up your problems, no matter how negative.",
		hint: "There's only been four zeroes thus far.",
		stage: 4,
		difficulty: 1
	}
];

export default () => ({
	currentClue: null,
	clues,
	mode: "view",
	loading: false,
	error: null
});
