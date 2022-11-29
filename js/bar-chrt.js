var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["", "", "", "", "", ""],
datasets: [{
label: '',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
    "rgba(241, 198, 59)",
    "rgba(250, 178, 40 )",
    "rgba(91, 199, 141)",
    "rgba(128, 117, 196)",
    "rgba(122, 211, 253)",
    "rgb(168, 215, 109)",
],
borderColor: [
    "rgba(241, 198, 59, 1)",
    "rgba(250, 178, 40, 1)",
    "rgba(91, 199, 141, 1)",
    "rgba(128, 117, 196, 1)",
    "rgba(122, 211, 253, 1)",
    "rgba(168, 215, 109, 1)",
],
borderWidth: 1
}]
},
options: {
    responsive: false,
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});