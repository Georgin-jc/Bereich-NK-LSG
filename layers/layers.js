var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Deutschland_Grenzen_1 = new ol.format.GeoJSON();
var features_Deutschland_Grenzen_1 = format_Deutschland_Grenzen_1.readFeatures(json_Deutschland_Grenzen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deutschland_Grenzen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deutschland_Grenzen_1.addFeatures(features_Deutschland_Grenzen_1);
var lyr_Deutschland_Grenzen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deutschland_Grenzen_1, 
                style: style_Deutschland_Grenzen_1,
                popuplayertitle: 'Deutschland_Grenzen',
                interactive: true,
                title: '<img src="styles/legend/Deutschland_Grenzen_1.png" /> Deutschland_Grenzen'
            });
var format_Bereich_NK_LSG_2 = new ol.format.GeoJSON();
var features_Bereich_NK_LSG_2 = format_Bereich_NK_LSG_2.readFeatures(json_Bereich_NK_LSG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bereich_NK_LSG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bereich_NK_LSG_2.addFeatures(features_Bereich_NK_LSG_2);
var lyr_Bereich_NK_LSG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bereich_NK_LSG_2, 
                style: style_Bereich_NK_LSG_2,
                popuplayertitle: 'Bereich_NK_LSG',
                interactive: true,
    title: 'Bereich_NK_LSG<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_0.png" /> Altentreptow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_1.png" /> Anklam<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_2.png" /> Bergen<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_3.png" /> Demmin<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_4.png" /> Gadebusch<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_5.png" /> Greifswald<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_6.png" /> Grimmen<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_7.png" /> Güstrow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_8.png" /> Hagenow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_9.png" /> Ludwigslust<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_10.png" /> Malchow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_11.png" /> Neubrandenburg<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_12.png" /> Neustrelitz<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_13.png" /> Parchim<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_14.png" /> Pasewalk<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_15.png" /> Prenzlau<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_16.png" /> Prignitz<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_17.png" /> Roebel<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_18.png" /> Schwerin<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_19.png" /> Stavenhagen<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_20.png" /> Stralsund<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_21.png" /> Templin<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_22.png" /> Teterow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_23.png" /> Torgelow<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_24.png" /> Waren<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_25.png" /> Wolgast<br />\
    <img src="styles/legend/Bereich_NK_LSG_2_26.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Deutschland_Grenzen_1.setVisible(true);lyr_Bereich_NK_LSG_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Deutschland_Grenzen_1,lyr_Bereich_NK_LSG_2];
lyr_Deutschland_Grenzen_1.set('fieldAliases', {'plz': 'plz', 'note': 'note', 'einwohner': 'einwohner', 'qkm': 'qkm', });
lyr_Bereich_NK_LSG_2.set('fieldAliases', {'Bereich': 'Bereich', 'Abonents P': 'Abonents P', 'Summe Brie': 'Summe Brie', 'Brief Pro': 'Brief Pro', 'Paket': 'Paket', 'Gebäude': 'Gebäude', 'Wochenblä': 'Wochenblä', });
lyr_Deutschland_Grenzen_1.set('fieldImages', {'plz': 'TextEdit', 'note': 'TextEdit', 'einwohner': 'TextEdit', 'qkm': 'TextEdit', });
lyr_Bereich_NK_LSG_2.set('fieldImages', {'Bereich': 'TextEdit', 'Abonents P': 'TextEdit', 'Summe Brie': 'TextEdit', 'Brief Pro': 'TextEdit', 'Paket': 'TextEdit', 'Gebäude': 'TextEdit', 'Wochenblä': 'TextEdit', });
lyr_Deutschland_Grenzen_1.set('fieldLabels', {'plz': 'no label', 'note': 'no label', 'einwohner': 'no label', 'qkm': 'no label', });
lyr_Bereich_NK_LSG_2.set('fieldLabels', {'Bereich': 'header label - visible with data', 'Abonents P': 'inline label - visible with data', 'Summe Brie': 'inline label - visible with data', 'Brief Pro': 'inline label - visible with data', 'Paket': 'inline label - visible with data', 'Gebäude': 'inline label - visible with data', 'Wochenblä': 'inline label - visible with data', });
lyr_Bereich_NK_LSG_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});