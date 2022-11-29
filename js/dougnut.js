var ctx = document.getElementById("myChart1").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "doughnut",

  // The data for our dataset
  data: {
    // Data Labels
   

    datasets: [
      // Data Set 1
      {
        //  Chart Label
        label: "Programming Languages",

        // Actual Data
        data: [100, 10, 10, 30, 26, 30, 50, 50],

        // Background Color
        backgroundColor: [
          "rgba(241, 198, 59)",
          "rgba(250, 178, 40 )",
          "rgba(91, 199, 141)",
          "rgba(128, 117, 196)",
          "rgba(122, 211, 253)",
          "rgb(168, 215, 109)",
        ],

        // Border Color
        borderColor: [
          "rgba(241, 198, 59, 1)",
          "rgba(250, 178, 40, 1)",
          "rgba(91, 199, 141, 1)",
          "rgba(128, 117, 196, 1)",
          "rgba(122, 211, 253, 1)",
          "rgba(168, 215, 109, 1)",
          "rgb(240, 141, 105, 1",
        ],

        // Border Width
        borderWidth: 1,
      },
      

      // Data Set 2
      // {
      //   //  Chart Label
      //   label: "Framework",

      //   // Actual Data
      //   data: [10, 8, 3, 7, 8, 9],

      //   // Background Color
      //   backgroundColor: [
      //     "rgba(255, 97, 132, 0.2)",
      //     "rgba(54, 16, 235, 0.2)",
      //     "rgba(255, 26, 86, 0.2)",
      //     "rgba(75, 12, 192, 0.2)",
      //     "rgba(153, 2, 255, 0.2)",
      //     "rgba(255, 19, 64, 0.2)",
      //   ],
      // },
    ],
  },

  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: false,
    maintainAspectRatio: true,

    // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    // Configure ToolTips
    tooltips: {
      enabled: true, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "red", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },

    // Custom Chart Title
    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,
      lineHeight: 5,
    },

    // Legends Configuration
    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },

    // We have Three Events - events which take string array, onHover and Onclick which take function
    // Example of events
    // This chart will not respond to mousemove, etc
    // mousemove, mouseout, click, touchstart, touchmove
    // events: ["click"],

    // onClick Example
    // onClick: function () {
    //   console.log("On Click");
    // },

    // onHover Example - It will work
    // onHover: function () {
    //   console.log("On Hover");
    // },
  },
});
    