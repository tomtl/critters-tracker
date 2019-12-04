require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Editor"
], function(Map, MapView, FeatureLayer, Editor) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-71.627158, 42.293983], // longitude, latitude
        zoom: 15
    });

    // Places feature layer
    var crittersLayer = new FeatureLayer({
        url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Critters/FeatureServer"
    });

    map.add(crittersLayer);

    view.when(function(){
        // editor
        var editor = new Editor({
            layer: crittersLayer,
            view: view
        });

        view.ui.add(editor, "top-right");
    });
});
