var wms_layers = [];

var lyr_Ortofotocolor2024provisional_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2024 (provisional)",
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2024provisional_0, 0]);
var format_Urbanisme_1 = new ol.format.GeoJSON();
var features_Urbanisme_1 = format_Urbanisme_1.readFeatures(json_Urbanisme_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urbanisme_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urbanisme_1.addFeatures(features_Urbanisme_1);
var lyr_Urbanisme_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urbanisme_1, 
                style: style_Urbanisme_1,
                popuplayertitle: "Urbanisme",
                interactive: true,
    title: 'Urbanisme<br />\
    <img src="styles/legend/Urbanisme_1_0.png" /> Banc<br />\
    <img src="styles/legend/Urbanisme_1_1.png" /> Paperera<br />\
    <img src="styles/legend/Urbanisme_1_2.png" /> Font<br />'
        });
var group_DADESVECTORIALS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DADES VECTORIALS"});
var group_01Geopackage = new ol.layer.Group({
                                layers: [lyr_Urbanisme_1,],
                                fold: "open",
                                title: "01-Geopackage"});
var group_04Actuacions = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "04-Actuacions"});
var group_05Inventaris = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "05-Inventaris"});
var group_XarxaTransports = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Xarxa Transports"});
var group_EspaisNaturals = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Espais Naturals"});
var group_MediAmbient = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Medi Ambient"});
var group_ZonesInundables = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zones Inundables"});
var group_MapaUrbanistic = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa Urbanistic"});
var group_CartografiaBase = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2024provisional_0,],
                                fold: "open",
                                title: "Cartografia Base"});
var group_LimitsAdministratius = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limits Administratius"});
var group_07TramitAudiencia = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "07-Tramit Audiencia"});

lyr_Ortofotocolor2024provisional_0.setVisible(true);lyr_Urbanisme_1.setVisible(true);
var layersList = [group_CartografiaBase,group_01Geopackage];
lyr_Urbanisme_1.set('fieldAliases', {'fid': 'fid', 'I1-Tipus': 'I1-Tipus', 'P2-Estat': 'P2-Estat', 'L1-CodiLocalitzacio': 'L1-CodiLocalitzacio', 'L2-DescripcioLocalitzacio': 'L2-DescripcioLocalitzacio', 'Z-Actualitzacio': 'Z-Actualitzacio', });
lyr_Urbanisme_1.set('fieldImages', {'fid': 'TextEdit', 'I1-Tipus': 'TextEdit', 'P2-Estat': 'TextEdit', 'L1-CodiLocalitzacio': 'TextEdit', 'L2-DescripcioLocalitzacio': 'TextEdit', 'Z-Actualitzacio': 'TextEdit', });
lyr_Urbanisme_1.set('fieldLabels', {'fid': 'no label', 'I1-Tipus': 'no label', 'P2-Estat': 'no label', 'L1-CodiLocalitzacio': 'no label', 'L2-DescripcioLocalitzacio': 'no label', 'Z-Actualitzacio': 'no label', });
lyr_Urbanisme_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});