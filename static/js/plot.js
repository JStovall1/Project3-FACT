if (data == 'AFC') {
    data.associationName = 'Asian Foodball Confederation';
  }
  else if (data == 'CAF') {
    data.associationName = 'Confederation of African Football';
  }
  else if (data == 'CONCACAF') {
    data.associationName = 'Confederation of North, Central America and Caribbean Association Football';
  }
  else if (data == 'CONMEBOL') {
    data.associationName = 'South American Football Confederation';
  }
  else if (data == 'OFC') {
    data.associationName = 'Oceania Football Confederation';
  }
  else if (data == 'UEFA') {
    data.associationName = 'Union of European Football Associations';
  }
  function init() {
    let data = [{
      values: [46, 54, 35, 10, 11, 55,],
      labels: ['AFC', 'CAF', 'CONCACAF', 'CONMEBOL', 'OFC', 'UEFA'],
      type: "pie"
    }];
    let layout = {
      height: 600,
      width: 800
    };
    Plotly.newPlot("pie", data, layout);
    }
    init()