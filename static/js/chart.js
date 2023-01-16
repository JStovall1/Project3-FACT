anychart.onDocumentReady(function () {
    // set chart theme
  anychart.theme('darkEarth');
        // create data set on our data
        var dataSet = anychart.data.set(getData());
        // map data for the first series, take x from the zero column and value from the first column of data set
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
        // map data for the second series, take x from the zero column and value from the second column of data set
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
        // create line chart
        var chart = anychart.line();
        // turn on chart animation
        chart.animation(true);
        // set chart padding
        chart.padding([10, 20, 5, 20]);
        // turn on the crosshair
        chart.crosshair().enabled(true).yLabel(false).yStroke(null);
        // set tooltip mode to point
        chart.tooltip().positionMode('point');
        // set chart title text settings
        chart.title(
          'Average Attendance during FIFA World Cup from 1930 to 2022'
        );
        // set yAxis title
        chart.yAxis().title('Average Attendance during FIFA');
        chart.xAxis().labels().padding(5);
        // create first series with mapped data
        var firstSeries = chart.line(firstSeriesData);
        firstSeries.name('Teams');
        firstSeries.hovered().markers().enabled(true).type('circle').size(4);
        firstSeries
          .tooltip()
          .position('right')
          .anchor('left-center')
          .offsetX(5)
          .offsetY(5);
        // create second series with mapped data
        var secondSeries = chart.line(secondSeriesData);
        secondSeries.name('Attendance Avg');
        secondSeries.hovered().markers().enabled(true).type('circle').size(4);
        secondSeries
          .tooltip()
          .position('right')
          .anchor('left-center')
          .offsetX(5)
          .offsetY(5);
        // turn the legend on
        chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]);
        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
      });
      function getData() {
        return [
            ['2022',32,53191],
            ['2018',32,47371],
            ['2014',32,53592],
            ['2010',32,49670],
            ['2006',32,52384],
            ['2002',32,42271],
            ['1998',32,45367],
            ['1994',24,68991],
            ['1990',24,48389],
            ['1986',24,46039],
            ['1982',24,40572],
            ['1978',16,40679],
            ['1974',16,49099],
            ['1970',16,50124],
            ['1966',16,48848],
            ['1962',16,27912],
            ['1958',16,23423],
            ['1954',16,29562],
            ['1950',15,47511],
            ['1938',16,20872],
            ['1934',16,21353],
            ['1930',13,32808],
        ];
      }