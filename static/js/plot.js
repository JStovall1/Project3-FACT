
  function init() {

    let points = [{
      values: [46, 54, 35, 10, 11, 55,],
      labels: ['Asian Foodball Confederation', 'Confederation of African Football', 'Confederation of North, Central America and Caribbean Association Football', 'South American Football Confederation', 'Oceania Football Confederation', 'Union of European Football Associations'],
      type: "pie"
    }];

    let layout = {
      height: 900,
      width: 1450
    };
    Plotly.newPlot("pie", points, layout);
    }

    init()

    