var traffic = document.getElementById("traffic-chart");
var daily = document.getElementById("traffic-daily");
var mobile = document.getElementById("traffic-mobile");
var myAlert = document.getElementById("alert");
var sendBtn = document.getElementById("jscheck");
var uSearch = document.getElementById("usearch");
var uMessage = document.getElementById("umessage");
var bellSvg = document.getElementById("bell");

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
    responsive: true,
    animation: {
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
    responsive: true,
    animation: {
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
    responsive: true,
    animation: {
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
        data: [75, 115, 175, 125, 225, 270, 100], backgroundColor: 'rgb(0, 225, 255, 0.6)',
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


bellSvg.innerHTML += '<circle style="fill: rgb(41, 243, 14);" cx="102.993" cy="13.896" r="12.652" transform="matrix(1.027526, 0, 0, 1.025524, -2.486712, -0.677624)"/>'
myAlert.innerHTML = '<p>This is the alert</p> <p class="alert-close">X</p>'

myAlert.addEventListener("click", e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
        myAlert.style.display = "none"
        bellSvg.innerHTML = '   <svg id="bell" class="bell" viewBox="0 0 117.033 122.88" width="117.033" height="122.88" xmlns="http://www.w3.org/2000/svg"> <path d="M75.828 108.589c-.381 2.005-1.053 3.845-2.021 5.521-1 1.729-2.309 3.279-3.926 4.648-1.617 1.367-3.381 2.397-5.283 3.086-1.906.689-3.934 1.035-6.076 1.035-2.143 0-4.17-.346-6.077-1.035-1.903-.688-3.665-1.719-5.282-3.086-1.618-1.369-2.927-2.92-3.927-4.648-.998-1.728-1.682-3.63-2.054-5.706a1.87 1.87 0 011.51-2.169c.032-.005.329-.034.329-.036h31.001a1.876 1.876 0 011.806 2.39zM68.398 6.868c1.521.397 2.998.879 4.43 1.444a40.563 40.563 0 016.076 3.007c.076.047.15.097.223.148a40.545 40.545 0 015.189 3.772 39.769 39.769 0 014.67 4.754l.012.013H89a39.921 39.921 0 013.787 5.462 41.416 41.416 0 012.867 6.056l.004-.001a36.914 36.914 0 011.834 6.622 39.61 39.61 0 01.607 6.984c0 4.714 0 7.257.002 7.566.01 2.417.023 4.779.041 7.085v.024a52.96 52.96 0 00.404 6.279 49.763 49.763 0 001.115 6.014l.004-.001a30.951 30.951 0 001.967 5.493 35.459 35.459 0 003.086 5.311l.006-.004c1.195 1.697 2.691 3.373 4.488 5.027 1.855 1.709 4.01 3.383 6.461 5.023a3.065 3.065 0 01-1.707 5.612v.01H3.076a3.076 3.076 0 01-1.591-5.708c2.491-1.686 4.63-3.354 6.416-5.008 1.777-1.646 3.265-3.33 4.462-5.055.036-.051.072-.1.11-.148a36.903 36.903 0 002.967-5.173 32.764 32.764 0 002.037-5.635c.475-1.84.837-3.779 1.088-5.812a51.86 51.86 0 00.378-6.337V45.129c0-2.34.21-4.671.629-6.987a36.974 36.974 0 011.849-6.655 41.921 41.921 0 012.905-6.096 40.698 40.698 0 013.828-5.496l.017-.02-.004-.004a39.926 39.926 0 0110.151-8.663 38.778 38.778 0 016.128-2.971 38.48 38.48 0 014.529-1.405c.529-1.851 1.437-3.349 2.722-4.496C53.471.752 55.81-.025 58.712 0c2.875.025 5.194.821 6.952 2.391 1.289 1.151 2.201 2.643 2.734 4.477zm2.196 7.162a33.159 33.159 0 00-5.203-1.577 3.076 3.076 0 01-2.656-2.677c-.166-1.341-.551-2.281-1.154-2.819-.605-.541-1.578-.817-2.917-.829-1.33-.012-2.291.246-2.882.774-.6.536-.98 1.485-1.14 2.85h-.003a3.067 3.067 0 01-2.484 2.667 32.579 32.579 0 00-10.69 4.051 33.815 33.815 0 00-8.589 7.341l-.004-.003a34.614 34.614 0 00-3.234 4.659 35.731 35.731 0 00-2.473 5.207 30.78 30.78 0 00-1.56 5.55 33.06 33.06 0 00-.509 5.906v14.564c0 2.412-.143 4.774-.427 7.083a51.535 51.535 0 01-1.256 6.605c-.01.047-.021.095-.033.142a38.888 38.888 0 01-2.389 6.549 43.177 43.177 0 01-3.461 6.046 3.175 3.175 0 01-.121.189c-1.408 2.026-3.192 4.039-5.352 6.039l-.078.071H105.031c-2.111-1.946-3.887-3.942-5.328-5.989l.004-.004-.004-.008a41.698 41.698 0 01-3.621-6.231 37.238 37.238 0 01-2.375-6.575l.002-.001-.002-.011a55.496 55.496 0 01-1.264-6.771 59.853 59.853 0 01-.428-6.992v-.007c-.018-2.278-.031-4.656-.041-7.133a3586.95 3586.95 0 01-.025-7.566c0-2.024-.17-3.992-.512-5.902a30.791 30.791 0 00-1.521-5.517l.004-.001-.004-.011a35.351 35.351 0 00-2.439-5.178 33.89 33.89 0 00-3.211-4.622l.002-.001a33.559 33.559 0 00-3.939-3.997 34.562 34.562 0 00-4.393-3.207 2.896 2.896 0 01-.203-.113 34.452 34.452 0 00-5.139-2.551z"/> </svg>'
    }
})

sendBtn.addEventListener("click", function () {
    if (uSearch.value === "" && uMessage.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (uSearch.value === "") {
        alert("Please fill out user field before sending");
    } else if (uMessage.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${uSearch.value}`);
    }
})
