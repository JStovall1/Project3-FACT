
  function init() {

    let points = [{
      values: [46, 54, 35, 10, 11, 55,],
      labels: ['Asian Football Confederation (AFC)', 'Confederation of African Football (CAF)', 'Confederation of North, Central America and Caribbean Association Football (CONCACAF)', 'South American Football Confederation (CONMEBOL)', 'Oceania Football Confederation (OFC)', 'Union of European Football Associations (UEFA)'],
      type: "pie"
    }];

    let layout = {
      height: 900,
      width: 1450
    };
    Plotly.newPlot("pie", points, layout);
    }

    init()

    