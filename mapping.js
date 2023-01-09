// Create a map object.
var myMap = L.map("map", {
  center: [26.648067347877863, -35.50853088629663],
  zoom: 2.5});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each country's name, and rank
var countries = [{
  location: [-7.836995001479985, -55.58399155482516],
  team: 'Brazil',
  current_rank: 1
  },
  {
  location: [50.49285248350924, 4.676262775981822],
  team: 'Belgium',
  current_rank: 2 
  },
  {
  location: [-35.50132138682665, -64.98534043516156],
  team: 'Argentina',
  current_rank: 3 
  },
  {
  location: [46.64671186582204, 2.9701532601194103],
  team: 'France',
  current_rank: 4
  }, 
  {
  location: [52.17799254193983, -1.6926973842317412],
  team: 'England',
  current_rank: 5 
  }, 
  {
  location: [39.66508244315576, -3.5097336290543284],
  team: 'Spain',
  current_rank: 7
  }, 
  {
  location: [52.415897877796105, 4.965928919387176],
  team: 'Netherland',
  current_rank: 8
  }, 
  {
  location: [39.667894682630156, -8.683013581748195],
  team: 'Portugal',
  current_rank: 9
  }, 
  {
  location: [55.562861403540175, 10.486973609226679],
  team: 'Denmark',
  current_rank: 10
  }, 
  {
  location: [51.227762477897045, 10.275667071811524],
  team: 'Germany',
  current_rank: 11
  }, 
  {
  location: [45.08017616206448, 14.51497185132348],
  team: 'Croatia',
  current_rank: 12
  },
  {
  location: [23.938338746567457, -103.24669857239378],
  team: 'Mexico',
  current_rank: 13
  },
  {
  location: [-32.76752451345405, -56.285176489740415],
  team: 'Uruguay',
  current_rank: 14 
  },
  {
  location: [46.80307755112908, 8.107961081894324],
  team: 'Switzerland',
  current_rank: 15
  },
  {
  location: [39.99796458066473, -100.29839530802029],
  team: 'USA',
  current_rank: 16
  }, 
  {
  location: [14.375194738042676, -14.413140411215773],
  team: 'Senegal',
  current_rank: 18 
  }, 
  {
  location: [52.009050054208366, -4.383163057771134],
  team: 'Wales',
  current_rank: 19
  }, 
  {
  location: [32.121866363093886, 54.50907395126997],
  team: 'Iran',
  current_rank: 20
  }, 
  {
  location: [44.10211895914576, 20.886956379883816],
  team: 'Serbia',
  current_rank: 21
  }, 
  {
  location: [31.92114798550019, -5.999282599716994],
  team: 'Morocco',
  current_rank: 22
  }, 
  {
  location: [36.47971614879522, 139.03581012090095],
  team: 'Japan',
  current_rank: 24
  }, 
  {
  location: [52.91059588280292, 18.63890397091538],
  team: 'Poland',
  current_rank: 26
  }, 
  {
  location: [36.5722241443866, 127.85360480959875],
  team: 'South Korea',
  current_rank: 28
  }, 
  {
  location: [34.08941142440663, 9.492782704931553],
  team: 'Tunisia',
  current_rank: 30
  }, 
  {
  location: [-25.11172485250972, 133.33039524484076],
  team: 'Australia',
  current_rank: 38
  }, 
  {
  location: [60.616792677510084, -113.40624064479857],
  team: 'Canada',
  current_rank: 41
  }, 
  {
  location: [5.600675826008071, 13.027445475160905],
  team: 'Cameroon',
  current_rank: 43
  }, 
  {
  location: [-1.4000123197434124, -78.4210509387305],
  team: 'Ecuador',
  current_rank: 44
  }, 
  {
  location: [25.31077531640607, 51.19838483459212],
  team: 'Qatar',
  current_rank: 50
  }, 
  {
  location: [23.573510700932786, 45.8101396496157],
  team: 'Saudia Arabia',
  current_rank: 51
  }, 
  {
  location: [8.050806790560747, -1.1211414909566755],
  team: 'Ghana',
  current_rank: 61
  }, 
];
// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < countries.length; i++) {
  var country = countries[i];
  L.marker(country.location)
    .bindPopup(`<h1>${country.team}</h1> <hr> <h3>Rank ${country.current_rank.toLocaleString()}</h3>`)
    .addTo(myMap);
}
  