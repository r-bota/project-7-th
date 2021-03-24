var traffic = document.getElementById("traffic-chart");
var daily = document.getElementById("traffic-daily");
var mobile = document.getElementById("traffic-mobile");
var myAlert = document.getElementById("alert");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgb(245, 0, 171, 0.637)',
        borderWidth: 1,
    }]
};
let lineOptions = {
    aspectRatio: 2.5, animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let barOptions = {
    aspectRatio: 2.5, animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let doughnutOptions = {

    aspectRatio: 2.5, animation: {
        duration: 0
    },
    legend: {
        display: true,
        position: "right"
    },

};

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100], backgroundColor: 'rgb(245, 0, 171)',
        borderWidth: 1
    }]
};

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"], datasets: [{
        label: '# of Users', data: [2000, 550, 500], borderWidth: 0, backgroundColor: [
            '#7477BF', '#78CF82', '#51B6C8'
        ]
    }]
};

var lineChart = new Chart(traffic, {
    type: 'line',
    data: trafficData,
    options: lineOptions
});

var barChart = new Chart(daily, {
    type: "bar",
    data: dailyData,
    options: barOptions
})

var doughnutChart = new Chart(mobile, {
    type: 'doughnut',
    data: mobileData,
    options: doughnutOptions

})

function createAlert() {
    const newAlert = document.createElement("p");
    const alertText = document.createTextNode("This is the alert!");
    newAlert.appendChild(alertText);
    myAlert.appendChild(newAlert);
}

myAlert.addEventListener("click", function() {
    myAlert.style.display = "none";
})

createAlert()