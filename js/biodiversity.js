var vg_1 = "js/biodiversity.json";
vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Check if the view is rendered by logging the result
    console.log("Map chart loaded successfully:", result.view);
}).catch(function(error) {
    // Log any errors to the console
    console.error("Error loading the map chart:", error);
});

var vg_2 = "js/two_chart.json";
vegaEmbed("#two_chart", vg_2).then(function(result) {
    // Check if the view is rendered by logging the result
    console.log("Second chart loaded successfully:", result.view);
}).catch(function(error) {
    // Log any errors to the console
    console.error("Error loading the second chart:", error);
});
