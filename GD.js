ctx = document.getElementById("grafico").getContext('2d');

data = {
    labels:['Consumo', 'Economia'],
    datasets:[{
        data:[75,25],
        backgroundColor:['rgb(255, 205, 86)','rgb(54, 162, 235)'],
    }]
};

options= {
    responsive: true,
    maintainAspectRatio: false,
}

myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
});


function voltar() 
{
    window.location.replace("nav.html");
}