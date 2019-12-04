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
        center: [-71.055185, 42.3591112], // longitude, latitude
        zoom: 13
    });

    // Places feature layer
    var placesLayer = new FeatureLayer({
        url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Critters/FeatureServer"
    });

    map.add(placesLayer);

    view.when(function(){

        // editor
        var editor = new Editor({
            layer: placesLayer,
            view: view
        });

        view.ui.add(editor, "top-right");
    });
});
