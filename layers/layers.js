var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PlanningFrameworkLanduse_2 = new ol.format.GeoJSON();
var features_PlanningFrameworkLanduse_2 = format_PlanningFrameworkLanduse_2.readFeatures(json_PlanningFrameworkLanduse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanningFrameworkLanduse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningFrameworkLanduse_2.addFeatures(features_PlanningFrameworkLanduse_2);
var lyr_PlanningFrameworkLanduse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningFrameworkLanduse_2, 
                style: style_PlanningFrameworkLanduse_2,
                popuplayertitle: "Planning Framework Land use",
                interactive: false,
    title: 'Planning Framework Land use<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_2_0.png" /> Future Urban<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_2_1.png" /> Open Space<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_2_2.png" /> Urban<br />'
        });
var lyr_352OldMandurahRoad_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "352 Old Mandurah Road",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/352OldMandurahRoad_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895896.171748, -3841617.547585, 12897724.715834, -3839650.812577]
                            })
                        });
var format_352OldMandurahRoadRavenswood_4 = new ol.format.GeoJSON();
var features_352OldMandurahRoadRavenswood_4 = format_352OldMandurahRoadRavenswood_4.readFeatures(json_352OldMandurahRoadRavenswood_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_352OldMandurahRoadRavenswood_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_352OldMandurahRoadRavenswood_4.addFeatures(features_352OldMandurahRoadRavenswood_4);
var lyr_352OldMandurahRoadRavenswood_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_352OldMandurahRoadRavenswood_4, 
                style: style_352OldMandurahRoadRavenswood_4,
                popuplayertitle: "352 Old Mandurah Road, Ravenswood",
                interactive: true,
                title: '<img src="styles/legend/352OldMandurahRoadRavenswood_4.png" /> 352 Old Mandurah Road, Ravenswood'
            });
var group_Propertry = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoadRavenswood_4,],
                                fold: "open",
                                title: "Propertry"});
var group_ConceptPlan = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoad_3,],
                                fold: "open",
                                title: "Concept Plan"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_PlanningFrameworkLanduse_2,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_PlanningFrameworkLanduse_2.setVisible(false);lyr_352OldMandurahRoad_3.setVisible(true);lyr_352OldMandurahRoadRavenswood_4.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_ConceptPlan,group_Propertry];
lyr_PlanningFrameworkLanduse_2.set('fieldAliases', {'Land Use': 'Land Use', });
lyr_352OldMandurahRoadRavenswood_4.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_PlanningFrameworkLanduse_2.set('fieldImages', {'Land Use': 'TextEdit', });
lyr_352OldMandurahRoadRavenswood_4.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_PlanningFrameworkLanduse_2.set('fieldLabels', {'Land Use': 'hidden field', });
lyr_352OldMandurahRoadRavenswood_4.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'hidden field', 'VALUE @ 467m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Mobiles': 'hidden field', 'Vendor Emails': 'hidden field', 'Vendor Addresses': 'hidden field', 'Major Landowner': 'hidden field', 'Lead Link': 'hidden field', });
lyr_352OldMandurahRoadRavenswood_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});