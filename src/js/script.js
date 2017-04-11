google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);
google.charts.setOnLoadCallback(drawStackSeries);

function drawMultSeries() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Asigantura');
  data.addColumn('number', 'Evaluacion Continua');
  data.addColumn('number', 'Examen Ordinal');

  data.addRows([
    ['Análisis e Interpretación de Datos', 100, 70],
    ['Ingeniería para el Procesado Masivo de Datos', 95, 84],
    ['Métodos de Captura y Almacenamiento de la Información', 100, 56],
    ['Privacidad y Protección de Datos', 100, 52.5],
    ['Técnicas de Inteligencia Artificial', 100, 50],
    ['Visualización interactiva de la información', 100, 60]
  ]);

  var options = {
    width: 600,
    height: 400,
    title: 'Mis Notas I Cuatrimestre',
    hAxis: {
      title: 'Asignaturas',
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      title: '% de Notas',
      gridlines: {
        color: 'transparent'
      }
    },
    colors: ['#00B562', '#B4D900']
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}

function drawStackSeries() {
  var data = google.visualization.arrayToDataTable([
    ['Notas', 'Evaluacion Continua', 'Examen Ordinal', { role: 'annotation' } ],
    ['Análisis e Interpretación de Datos', 4, 4.2, ''],
    ['Ingeniería para el Procesado Masivo de Datos', 3.8, 5.4, ''],
    ['Métodos de Captura y Almacenamiento de la Información', 4, 3.36, ''],
    ['Privacidad y Protección de Datos', 4, 3.15, ''],
    ['Técnicas de Inteligencia Artificial', 4, 3, ''],
    ['Visualización interactiva de la información', 4, 3.6, '']
  ]);

  var options = {
    width: 600,
    height: 400,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
    colors: ['#00B562', '#B4D900'],
    vAxis: {
      gridlines: {
        color: 'transparent'
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div1'));

  chart.draw(data, options);
}