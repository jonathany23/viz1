google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

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
        title: 'Mis Notas I Cuatrimestre',
        hAxis: {
          title: 'Asignaturas'
        },
        vAxis: {
          title: '% de Notas'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }