ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7850").setExtent([391156.755462, 6393007.996812, 394234.507335, 6394832.437356]);
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
var lyr_352OldMandurahRoadDraft_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '352 Old Mandurah Road Draft',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/352OldMandurahRoadDraft_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895896.171748, -3841617.547585, 12897724.715834, -3839650.812577]
                            })
                        });
var lyr_ConceptPlan_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Concept Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ConceptPlan_3.png",
                                attributions: ' ',
                                projection: 'EPSG:7850',
                                alwaysInRange: true,
                                imageExtent: [391685.587496, 6393068.105063, 393212.840789, 6394726.451456]
                            })
                        });
var format_RegionalOpenSpace_4 = new ol.format.GeoJSON();
var features_RegionalOpenSpace_4 = format_RegionalOpenSpace_4.readFeatures(json_RegionalOpenSpace_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_RegionalOpenSpace_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionalOpenSpace_4.addFeatures(features_RegionalOpenSpace_4);
var lyr_RegionalOpenSpace_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionalOpenSpace_4, 
                style: style_RegionalOpenSpace_4,
                popuplayertitle: 'Regional Open Space',
                interactive: false,
                title: '<img src="styles/legend/RegionalOpenSpace_4.png" /> Regional Open Space'
            });
var format_OpenSpace_5 = new ol.format.GeoJSON();
var features_OpenSpace_5 = format_OpenSpace_5.readFeatures(json_OpenSpace_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_OpenSpace_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpace_5.addFeatures(features_OpenSpace_5);
var lyr_OpenSpace_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpace_5, 
                style: style_OpenSpace_5,
                popuplayertitle: 'Open Space',
                interactive: false,
                title: '<img src="styles/legend/OpenSpace_5.png" /> Open Space'
            });
var format_NSABoundariesOption2_6 = new ol.format.GeoJSON();
var features_NSABoundariesOption2_6 = format_NSABoundariesOption2_6.readFeatures(json_NSABoundariesOption2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_NSABoundariesOption2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSABoundariesOption2_6.addFeatures(features_NSABoundariesOption2_6);
var lyr_NSABoundariesOption2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NSABoundariesOption2_6, 
                style: style_NSABoundariesOption2_6,
                popuplayertitle: 'NSA Boundaries Option 2',
                interactive: false,
                title: '<img src="styles/legend/NSABoundariesOption2_6.png" /> NSA Boundaries Option 2'
            });
var format_NSABoundaries_7 = new ol.format.GeoJSON();
var features_NSABoundaries_7 = format_NSABoundaries_7.readFeatures(json_NSABoundaries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_NSABoundaries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSABoundaries_7.addFeatures(features_NSABoundaries_7);
var lyr_NSABoundaries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NSABoundaries_7, 
                style: style_NSABoundaries_7,
                popuplayertitle: 'NSA Boundaries',
                interactive: false,
                title: '<img src="styles/legend/NSABoundaries_7.png" /> NSA Boundaries'
            });
var format_352easement_8 = new ol.format.GeoJSON();
var features_352easement_8 = format_352easement_8.readFeatures(json_352easement_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_352easement_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_352easement_8.addFeatures(features_352easement_8);
var lyr_352easement_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_352easement_8, 
                style: style_352easement_8,
                popuplayertitle: '352 easement',
                interactive: false,
                title: '<img src="styles/legend/352easement_8.png" /> 352 easement'
            });
var format_PlanningFrameworkLanduse_9 = new ol.format.GeoJSON();
var features_PlanningFrameworkLanduse_9 = format_PlanningFrameworkLanduse_9.readFeatures(json_PlanningFrameworkLanduse_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_PlanningFrameworkLanduse_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningFrameworkLanduse_9.addFeatures(features_PlanningFrameworkLanduse_9);
var lyr_PlanningFrameworkLanduse_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningFrameworkLanduse_9, 
                style: style_PlanningFrameworkLanduse_9,
                popuplayertitle: 'Planning Framework Land use',
                interactive: false,
    title: 'Planning Framework Land use<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_9_0.png" /> Future Urban<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_9_1.png" /> Open Space<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_9_2.png" /> Urban<br />\
    <img src="styles/legend/PlanningFrameworkLanduse_9_3.png" /> Urban Deferred<br />'
        });
var format_352OldMandurahRoadRavenswood_10 = new ol.format.GeoJSON();
var features_352OldMandurahRoadRavenswood_10 = format_352OldMandurahRoadRavenswood_10.readFeatures(json_352OldMandurahRoadRavenswood_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7850'});
var jsonSource_352OldMandurahRoadRavenswood_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_352OldMandurahRoadRavenswood_10.addFeatures(features_352OldMandurahRoadRavenswood_10);
var lyr_352OldMandurahRoadRavenswood_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_352OldMandurahRoadRavenswood_10, 
                style: style_352OldMandurahRoadRavenswood_10,
                popuplayertitle: '352 Old Mandurah Road Ravenswood',
                interactive: false,
                title: '<img src="styles/legend/352OldMandurahRoadRavenswood_10.png" /> 352 Old Mandurah Road Ravenswood'
            });
var group_Propertry = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoadRavenswood_10,],
                                fold: "open",
                                title: 'Propertry'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_PlanningFrameworkLanduse_9,],
                                fold: "open",
                                title: 'Zoning'});
var group_Easements = new ol.layer.Group({
                                layers: [lyr_352easement_8,],
                                fold: "open",
                                title: 'Easements'});
var group_ConceptPlanOptions = new ol.layer.Group({
                                layers: [lyr_RegionalOpenSpace_4,lyr_OpenSpace_5,lyr_NSABoundariesOption2_6,lyr_NSABoundaries_7,],
                                fold: "open",
                                title: 'Concept Plan Options'});
var group_ConceptPlan = new ol.layer.Group({
                                layers: [lyr_352OldMandurahRoadDraft_2,lyr_ConceptPlan_3,],
                                fold: "open",
                                title: 'Concept Plan'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_352OldMandurahRoadDraft_2.setVisible(true);lyr_ConceptPlan_3.setVisible(true);lyr_RegionalOpenSpace_4.setVisible(false);lyr_OpenSpace_5.setVisible(false);lyr_NSABoundariesOption2_6.setVisible(false);lyr_NSABoundaries_7.setVisible(false);lyr_352easement_8.setVisible(false);lyr_PlanningFrameworkLanduse_9.setVisible(false);lyr_352OldMandurahRoadRavenswood_10.setVisible(true);
var layersList = [group_BaseLayer,group_ConceptPlan,group_ConceptPlanOptions,group_Easements,group_Zoning,group_Propertry];
lyr_RegionalOpenSpace_4.set('fieldAliases', {'id': 'id', });
lyr_OpenSpace_5.set('fieldAliases', {'id': 'id', });
lyr_NSABoundariesOption2_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NSA': 'NSA', 'sum': 'sum', });
lyr_NSABoundaries_7.set('fieldAliases', {'id': 'id', 'NSA': 'NSA', 'sum': 'sum', });
lyr_352easement_8.set('fieldAliases', {'id': 'id', });
lyr_PlanningFrameworkLanduse_9.set('fieldAliases', {'Land Use': 'Land Use', });
lyr_352OldMandurahRoadRavenswood_10.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_RegionalOpenSpace_4.set('fieldImages', {'id': 'TextEdit', });
lyr_OpenSpace_5.set('fieldImages', {'id': 'TextEdit', });
lyr_NSABoundariesOption2_6.set('fieldImages', {'fid': '', 'id': '', 'NSA': '', 'sum': '', });
lyr_NSABoundaries_7.set('fieldImages', {'id': 'TextEdit', 'NSA': 'TextEdit', 'sum': 'TextEdit', });
lyr_352easement_8.set('fieldImages', {'id': '', });
lyr_PlanningFrameworkLanduse_9.set('fieldImages', {'Land Use': 'TextEdit', });
lyr_352OldMandurahRoadRavenswood_10.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_RegionalOpenSpace_4.set('fieldLabels', {'id': 'no label', });
lyr_OpenSpace_5.set('fieldLabels', {'id': 'no label', });
lyr_NSABoundariesOption2_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NSA': 'no label', 'sum': 'no label', });
lyr_NSABoundaries_7.set('fieldLabels', {'id': 'no label', 'NSA': 'no label', 'sum': 'no label', });
lyr_352easement_8.set('fieldLabels', {'id': 'no label', });
lyr_PlanningFrameworkLanduse_9.set('fieldLabels', {'Land Use': 'hidden field', });
lyr_352OldMandurahRoadRavenswood_10.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'hidden field', 'VALUE @ 467m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Mobiles': 'hidden field', 'Vendor Emails': 'hidden field', 'Vendor Addresses': 'hidden field', 'Major Landowner': 'hidden field', 'Lead Link': 'hidden field', });
lyr_352OldMandurahRoadRavenswood_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});