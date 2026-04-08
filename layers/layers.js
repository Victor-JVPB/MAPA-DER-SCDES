var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MARCADORESGERAIS_3 = new ol.format.GeoJSON();
var features_MARCADORESGERAIS_3 = format_MARCADORESGERAIS_3.readFeatures(json_MARCADORESGERAIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORESGERAIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORESGERAIS_3.addFeatures(features_MARCADORESGERAIS_3);
cluster_MARCADORESGERAIS_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MARCADORESGERAIS_3
});
var lyr_MARCADORESGERAIS_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MARCADORESGERAIS_3, 
                style: style_MARCADORESGERAIS_3,
                popuplayertitle: 'MARCADORES GERAIS',
                interactive: false,
    title: 'MARCADORES GERAIS<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_5.png" /> Área Pública<br />\
    <img src="styles/legend/MARCADORESGERAIS_3_6.png" /> Em Revisão - Documental / Técnica<br />' });
var format_SP425PENPOLISCLEMENTINA_4 = new ol.format.GeoJSON();
var features_SP425PENPOLISCLEMENTINA_4 = format_SP425PENPOLISCLEMENTINA_4.readFeatures(json_SP425PENPOLISCLEMENTINA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP425PENPOLISCLEMENTINA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP425PENPOLISCLEMENTINA_4.addFeatures(features_SP425PENPOLISCLEMENTINA_4);
var lyr_SP425PENPOLISCLEMENTINA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP425PENPOLISCLEMENTINA_4, 
                style: style_SP425PENPOLISCLEMENTINA_4,
                popuplayertitle: 'SP 425 - PENÁPOLIS - CLEMENTINA',
                interactive: false,
    title: 'SP 425 - PENÁPOLIS - CLEMENTINA<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_5.png" /> Área Pública<br />\
    <img src="styles/legend/SP425PENPOLISCLEMENTINA_4_6.png" /> Em Revisão - Documental / Técnica<br />' });
var format_SP461VOTUPORANGALVARESFLORENCECARDOSO_5 = new ol.format.GeoJSON();
var features_SP461VOTUPORANGALVARESFLORENCECARDOSO_5 = format_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.readFeatures(json_SP461VOTUPORANGALVARESFLORENCECARDOSO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP461VOTUPORANGALVARESFLORENCECARDOSO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.addFeatures(features_SP461VOTUPORANGALVARESFLORENCECARDOSO_5);
var lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP461VOTUPORANGALVARESFLORENCECARDOSO_5, 
                style: style_SP461VOTUPORANGALVARESFLORENCECARDOSO_5,
                popuplayertitle: 'SP 461 - VOTUPORANGA - ÁLVARES FLORENCE - CARDOSO',
                interactive: true,
    title: 'SP 461 - VOTUPORANGA - ÁLVARES FLORENCE - CARDOSO<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_5.png" /> Área Pública<br />\
    <img src="styles/legend/SP461VOTUPORANGALVARESFLORENCECARDOSO_5_6.png" /> Em Revisão - Documental / Técnica<br />' });
var format_SP563ANDRADINA_6 = new ol.format.GeoJSON();
var features_SP563ANDRADINA_6 = format_SP563ANDRADINA_6.readFeatures(json_SP563ANDRADINA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP563ANDRADINA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP563ANDRADINA_6.addFeatures(features_SP563ANDRADINA_6);
var lyr_SP563ANDRADINA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP563ANDRADINA_6, 
                style: style_SP563ANDRADINA_6,
                popuplayertitle: 'SP 563 - ANDRADINA',
                interactive: true,
    title: 'SP 563 - ANDRADINA<br />\
    <img src="styles/legend/SP563ANDRADINA_6_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/SP563ANDRADINA_6_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/SP563ANDRADINA_6_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/SP563ANDRADINA_6_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/SP563ANDRADINA_6_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/SP563ANDRADINA_6_5.png" /> Área Pública<br />\
    <img src="styles/legend/SP563ANDRADINA_6_6.png" /> Em Revisão - Documental / Técnica<br />' });
var format_SP123TAUBATCAMPOSDOJORDO_7 = new ol.format.GeoJSON();
var features_SP123TAUBATCAMPOSDOJORDO_7 = format_SP123TAUBATCAMPOSDOJORDO_7.readFeatures(json_SP123TAUBATCAMPOSDOJORDO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP123TAUBATCAMPOSDOJORDO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP123TAUBATCAMPOSDOJORDO_7.addFeatures(features_SP123TAUBATCAMPOSDOJORDO_7);
var lyr_SP123TAUBATCAMPOSDOJORDO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP123TAUBATCAMPOSDOJORDO_7, 
                style: style_SP123TAUBATCAMPOSDOJORDO_7,
                popuplayertitle: 'SP 123 - TAUBATÉ - CAMPOS DO JORDÃO',
                interactive: true,
    title: 'SP 123 - TAUBATÉ - CAMPOS DO JORDÃO<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_5.png" /> Área Pública<br />\
    <img src="styles/legend/SP123TAUBATCAMPOSDOJORDO_7_6.png" /> Em Revisão - Documental / Técnica<br />' });
var group_Empreendimentos = new ol.layer.Group({
                                layers: [lyr_MARCADORESGERAIS_3,lyr_SP425PENPOLISCLEMENTINA_4,lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5,lyr_SP563ANDRADINA_6,lyr_SP123TAUBATCAMPOSDOJORDO_7,],
                                fold: 'close',
                                title: 'Empreendimentos'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleRoad_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_MARCADORESGERAIS_3.setVisible(true);lyr_SP425PENPOLISCLEMENTINA_4.setVisible(true);lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.setVisible(true);lyr_SP563ANDRADINA_6.setVisible(true);lyr_SP123TAUBATCAMPOSDOJORDO_7.setVisible(true);
var layersList = [group_MapasBase,group_Empreendimentos];
lyr_MARCADORESGERAIS_3.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', 'layer': 'layer', 'path': 'path', });
lyr_SP425PENPOLISCLEMENTINA_4.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', });
lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', });
lyr_SP563ANDRADINA_6.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', });
lyr_SP123TAUBATCAMPOSDOJORDO_7.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', });
lyr_MARCADORESGERAIS_3.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SP425PENPOLISCLEMENTINA_4.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', });
lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', });
lyr_SP563ANDRADINA_6.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', });
lyr_SP123TAUBATCAMPOSDOJORDO_7.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', });
lyr_MARCADORESGERAIS_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_SP425PENPOLISCLEMENTINA_4.set('fieldLabels', {'fid': 'no label', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', });
lyr_SP461VOTUPORANGALVARESFLORENCECARDOSO_5.set('fieldLabels', {'fid': 'hidden field', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', });
lyr_SP563ANDRADINA_6.set('fieldLabels', {'fid': 'inline label - always visible', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', });
lyr_SP123TAUBATCAMPOSDOJORDO_7.set('fieldLabels', {'fid': 'hidden field', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', });
lyr_SP123TAUBATCAMPOSDOJORDO_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});