 const labels = ['NaN', '8/1', 'NaN', '10/10']

const dataset1 = {
    label: "# of Popular Videos",
    data: [10, 55, 60, 120],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    fill: false,
    tension: 0.1
};


const dataset3 = {
    label: "Plays",
    data: [20, 40, 55, 120],
    borderColor: 'rgba(69, 140, 248, 0.8)',
    fill: false,
    tension: 0.1
};



const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [dataset1,dataset3]
};

const config = {
    type: 'line',
    data: data,
};

new Chart(graph, config);