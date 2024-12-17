ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7850").setExtent([391145.529112, 6392998.417914, 393809.503724, 6394747.601896]);
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
var format_352easement_2 = new ol.format.GeoJSON();
var features_352easement_2 = format_352easement_2.readFeatures(json_352easement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_352easement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_352easement_2.addFeatures(features_352easement_2);
var lyr_352easement_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_352easement_2, 
                style: style_352easement_2,
                popuplayertitle: '352 easement',
                interactive: false,
                title: '<img src="styles/legend/352easement_2.png" /> 352 easement'
            });
var format_PlanningFrameworkLanduse_3 = new ol.format.GeoJSON();
var features_PlanningFrameworkLanduse_3 = format_PlanningFrameworkLanduse_3.readFeatures(json_PlanningFrameworkLanduse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_PlanningFrameworkLanduse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningFrameworkLanduse_3.addFeatures(features_PlanningFrameworkLanduse_3);
var lyr_PlanningFrameworkLanduse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningFrameworkLanduse_3, 
                style: style_PlanningFrameworkLanduse_3,
                popuplayertitle: 'Planning Framework Land use',
                interactive: false,
    title: 'Planning Framework Land use<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_3_0.png" /> Future Urban<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_3_1.png" /> Open Space<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_3_2.png" /> Urban<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_3_3.png" /> Urban Deferred<br />'
        });
var lyr_352OldMandurahRoad_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '352 Old Mandurah Road',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/352OldMandurahRoad_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895896.171748, -3841617.547585, 12897724.715834, -3839650.812577]
                            })
                        });
var lyr_ConceptPlan_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Concept Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ConceptPlan_5.png",
                                attributions: ' ',
                                projection: 'EPSG:7850',
                                alwaysInRange: true,
                                imageExtent: [391685.587496, 6393068.105063, 393212.840789, 6394726.451456]
                            })
                        });
var format_RoadNetwork_6 = new ol.format.GeoJSON();
var features_RoadNetwork_6 = format_RoadNetwork_6.readFeatures(json_RoadNetwork_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_RoadNetwork_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_6.addFeatures(features_RoadNetwork_6);
var lyr_RoadNetwork_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_6, 
                style: style_RoadNetwork_6,
                popuplayertitle: 'Road Network',
                interactive: false,
                title: '<img src="styles/legend/RoadNetwork_6.png" /> Road Network'
            });
var format_RegionalOpenSpace_7 = new ol.format.GeoJSON();
var features_RegionalOpenSpace_7 = format_RegionalOpenSpace_7.readFeatures(json_RegionalOpenSpace_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_RegionalOpenSpace_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionalOpenSpace_7.addFeatures(features_RegionalOpenSpace_7);
var lyr_RegionalOpenSpace_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionalOpenSpace_7, 
                style: style_RegionalOpenSpace_7,
                popuplayertitle: 'Regional Open Space',
                interactive: false,
                title: '<img src="styles/legend/RegionalOpenSpace_7.png" /> Regional Open Space'
            });
var format_OpenSpace_8 = new ol.format.GeoJSON();
var features_OpenSpace_8 = format_OpenSpace_8.readFeatures(json_OpenSpace_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_OpenSpace_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpace_8.addFeatures(features_OpenSpace_8);
var lyr_OpenSpace_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpace_8, 
                style: style_OpenSpace_8,
                popuplayertitle: 'Open Space',
                interactive: false,
                title: '<img src="styles/legend/OpenSpace_8.png" /> Open Space'
            });
var format_NSABoundariesOption2_9 = new ol.format.GeoJSON();
var features_NSABoundariesOption2_9 = format_NSABoundariesOption2_9.readFeatures(json_NSABoundariesOption2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_NSABoundariesOption2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSABoundariesOption2_9.addFeatures(features_NSABoundariesOption2_9);
var lyr_NSABoundariesOption2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NSABoundariesOption2_9, 
                style: style_NSABoundariesOption2_9,
                popuplayertitle: 'NSA Boundaries Option 2',
                interactive: false,
                title: '<img src="styles/legend/NSABoundariesOption2_9.png" /> NSA Boundaries Option 2'
            });
var format_NSABoundaries_10 = new ol.format.GeoJSON();
var features_NSABoundaries_10 = format_NSABoundaries_10.readFeatures(json_NSABoundaries_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_NSABoundaries_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSABoundaries_10.addFeatures(features_NSABoundaries_10);
var lyr_NSABoundaries_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NSABoundaries_10, 
                style: style_NSABoundaries_10,
                popuplayertitle: 'NSA Boundaries',
                interactive: false,
                title: '<img src="styles/legend/NSABoundaries_10.png" /> NSA Boundaries'
            });
var format_352OldMandurahRoadRavenswood_11 = new ol.format.GeoJSON();
var features_352OldMandurahRoadRavenswood_11 = format_352OldMandurahRoadRavenswood_11.readFeatures(json_352OldMandurahRoadRavenswood_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_352OldMandurahRoadRavenswood_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_352OldMandurahRoadRavenswood_11.addFeatures(features_352OldMandurahRoadRavenswood_11);
var lyr_352OldMandurahRoadRavenswood_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_352OldMandurahRoadRavenswood_11, 
                style: style_352OldMandurahRoadRavenswood_11,
                popuplayertitle: '352 Old Mandurah Road, Ravenswood',
                interactive: false,
                title: '<img src="styles/legend/352OldMandurahRoadRavenswood_11.png" /> 352 Old Mandurah Road, Ravenswood'
            });
var group_Propertry = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoadRavenswood_11,],
                                fold: "open",
                                title: 'Propertry'});
var group_ConceptPlanOptions = new ol.layer.Group({
                                layers: [lyr_RoadNetwork_6,lyr_RegionalOpenSpace_7,lyr_OpenSpace_8,lyr_NSABoundariesOption2_9,lyr_NSABoundaries_10,],
                                fold: "open",
                                title: 'Concept Plan Options'});
var group_ConceptPlan = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoad_4,lyr_ConceptPlan_5,],
                                fold: "open",
                                title: 'Concept Plan'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_PlanningFrameworkLanduse_3,],
                                fold: "open",
                                title: 'Zoning'});
var group_Easements = new ol.layer.Group({
                                layers: [lyr_352easement_2,],
                                fold: "open",
                                title: 'Easements'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_352easement_2.setVisible(false);lyr_PlanningFrameworkLanduse_3.setVisible(false);lyr_352OldMandurahRoad_4.setVisible(true);lyr_ConceptPlan_5.setVisible(true);lyr_RoadNetwork_6.setVisible(false);lyr_RegionalOpenSpace_7.setVisible(false);lyr_OpenSpace_8.setVisible(false);lyr_NSABoundariesOption2_9.setVisible(false);lyr_NSABoundaries_10.setVisible(false);lyr_352OldMandurahRoadRavenswood_11.setVisible(true);
var layersList = [group_BaseLayer,group_Easements,group_Zoning,group_ConceptPlan,group_ConceptPlanOptions,group_Propertry];
lyr_352easement_2.set('fieldAliases', {'id': 'id', });
lyr_PlanningFrameworkLanduse_3.set('fieldAliases', {'Land Use': 'Land Use', });
lyr_RoadNetwork_6.set('fieldAliases', {'fid': 'fid', });
lyr_RegionalOpenSpace_7.set('fieldAliases', {'id': 'id', });
lyr_OpenSpace_8.set('fieldAliases', {'id': 'id', });
lyr_NSABoundariesOption2_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NSA': 'NSA', 'sum': 'sum', });
lyr_NSABoundaries_10.set('fieldAliases', {'id': 'id', 'NSA': 'NSA', 'sum': 'sum', });
lyr_352OldMandurahRoadRavenswood_11.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_352easement_2.set('fieldImages', {'id': '', });
lyr_PlanningFrameworkLanduse_3.set('fieldImages', {'Land Use': 'TextEdit', });
lyr_RoadNetwork_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_RegionalOpenSpace_7.set('fieldImages', {'id': 'TextEdit', });
lyr_OpenSpace_8.set('fieldImages', {'id': 'TextEdit', });
lyr_NSABoundariesOption2_9.set('fieldImages', {'fid': '', 'id': '', 'NSA': '', 'sum': '', });
lyr_NSABoundaries_10.set('fieldImages', {'id': 'TextEdit', 'NSA': 'TextEdit', 'sum': 'TextEdit', });
lyr_352OldMandurahRoadRavenswood_11.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_352easement_2.set('fieldLabels', {'id': 'no label', });
lyr_PlanningFrameworkLanduse_3.set('fieldLabels', {'Land Use': 'hidden field', });
lyr_RoadNetwork_6.set('fieldLabels', {'fid': 'no label', });
lyr_RegionalOpenSpace_7.set('fieldLabels', {'id': 'no label', });
lyr_OpenSpace_8.set('fieldLabels', {'id': 'no label', });
lyr_NSABoundariesOption2_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NSA': 'no label', 'sum': 'no label', });
lyr_NSABoundaries_10.set('fieldLabels', {'id': 'no label', 'NSA': 'no label', 'sum': 'no label', });
lyr_352OldMandurahRoadRavenswood_11.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'hidden field', 'VALUE @ 467m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Mobiles': 'hidden field', 'Vendor Emails': 'hidden field', 'Vendor Addresses': 'hidden field', 'Major Landowner': 'hidden field', 'Lead Link': 'hidden field', });
lyr_352OldMandurahRoadRavenswood_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});