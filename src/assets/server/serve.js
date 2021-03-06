const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/musics').get((request, response) => {
  response.send(MOCK_MUSICS);
});

app.route('/api/musics').post((request, response) => {
  let music = request.body;

  const firstId = MOCK_MUSICS ? Math.max.apply(null, MOCK_MUSICS.map(musicIterator => musicIterator.id)) + 1 : 1;
  music.id = firstId;
  MOCK_MUSICS.push(music);
  

  response.status(201).send(music);
});

app.route('/api/musics/:id').put((request, response) => {
  const musicId = +request.params['id'];
  const music = request.body;

  const index = MOCK_MUSICS.findIndex(musicIterator => musicIterator.id === musicId);
  MOCK_MUSICS[index] = music;

  response.status(200).send(music);
});

app.route('/api/musics/:id').get((request, response) => {
  const musicId = +request.params['id'];

  response.status(200).send(MOCK_MUSICS.find(musicIterator => musicIterator.id === musicId));
});

app.route('/api/musics/:id').delete((request, response)=> {
  const musicId = +request.params['id'];
  MOCK_MUSICS = MOCK_MUSICS.filter(musicIterator => musicIterator.id !== musicId);
  
  response.status(204).send({});
});

var MOCK_MUSICS = [
  {"id":1,"name":"Idahoa","coverUrl":"http://dummyimage.com/157x100.png/dddddd/000000","artist":"Kathi Mullender","durationMS":16873,"rating":3.7,"releaseDate":"05/01/2020"},
  {"id":2,"name":"Knobcone Pine Dwarf Mistletoe","coverUrl":"http://dummyimage.com/216x100.png/cc0000/ffffff","artist":"Harriet Hillborne","durationMS":18476,"rating":3.1,"releaseDate":"09/07/1994"},
  {"id":3,"name":"Tecate Cypress","coverUrl":"http://dummyimage.com/169x100.png/5fa2dd/ffffff","artist":"Gnni Boobier","durationMS":37012,"rating":1.1,"releaseDate":"03/05/2015"},
  {"id":4,"name":"Hybrid Willow","coverUrl":"http://dummyimage.com/212x100.png/dddddd/000000","artist":"Lon Pigott","durationMS":42310,"rating":1.1,"releaseDate":"06/02/2005"},
  {"id":5,"name":"Hedlund's Dot Lichen","coverUrl":"http://dummyimage.com/249x100.png/cc0000/ffffff","artist":"Lynea Pappin","durationMS":22115,"rating":1.6,"releaseDate":"14/10/2020"},
  {"id":6,"name":"Palm-leaf Marshmallow","coverUrl":"http://dummyimage.com/127x100.png/5fa2dd/ffffff","artist":"Ardis Wyeth","durationMS":21981,"rating":1.2,"releaseDate":"12/08/1997"},
  {"id":7,"name":"Carolina Rose","coverUrl":"http://dummyimage.com/189x100.png/5fa2dd/ffffff","artist":"Phillie Franzke","durationMS":35850,"rating":4.8,"releaseDate":"16/10/2013"},
  {"id":8,"name":"Jackass Breadnut","coverUrl":"http://dummyimage.com/230x100.png/ff4444/ffffff","artist":"Gigi Jeandot","durationMS":48787,"rating":3.0,"releaseDate":"28/04/1997"},
  {"id":9,"name":"Lapalapa","coverUrl":"http://dummyimage.com/170x100.png/dddddd/000000","artist":"Marc Dollar","durationMS":27665,"rating":1.7,"releaseDate":"17/08/2005"},
  {"id":10,"name":"Aiken Hawthorn","coverUrl":"http://dummyimage.com/196x100.png/5fa2dd/ffffff","artist":"Sarajane Rolston","durationMS":11981,"rating":3.0,"releaseDate":"21/03/1991"},
  {"id":11,"name":"Mycoporum Lichen","coverUrl":"http://dummyimage.com/177x100.png/5fa2dd/ffffff","artist":"Cristin Neubigin","durationMS":42702,"rating":4.1,"releaseDate":"18/12/2005"},
  {"id":12,"name":"Roundleaf Thoroughwort","coverUrl":"http://dummyimage.com/138x100.png/ff4444/ffffff","artist":"Yetty Chattell","durationMS":32389,"rating":2.2,"releaseDate":"06/09/2008"},
  {"id":13,"name":"Napaea","coverUrl":"http://dummyimage.com/211x100.png/cc0000/ffffff","artist":"Lalo Eloy","durationMS":13924,"rating":1.5,"releaseDate":"02/06/1993"},
  {"id":14,"name":"Hairy Rupturewort","coverUrl":"http://dummyimage.com/249x100.png/cc0000/ffffff","artist":"Herculie Hundal","durationMS":12396,"rating":4.5,"releaseDate":"24/02/2013"},
  {"id":15,"name":"Damiana","coverUrl":"http://dummyimage.com/208x100.png/5fa2dd/ffffff","artist":"Keelia Laurenceau","durationMS":40303,"rating":2.5,"releaseDate":"02/03/2012"},
  {"id":16,"name":"Kern Larkspur","coverUrl":"http://dummyimage.com/163x100.png/ff4444/ffffff","artist":"Goldina Cheake","durationMS":26968,"rating":2.9,"releaseDate":"11/12/2001"},
  {"id":17,"name":"Wire Mousetail","coverUrl":"http://dummyimage.com/104x100.png/dddddd/000000","artist":"Mechelle Delong","durationMS":35197,"rating":4.1,"releaseDate":"21/12/2013"},
  {"id":18,"name":"Two-leaf Vetch","coverUrl":"http://dummyimage.com/128x100.png/cc0000/ffffff","artist":"Biron Rylance","durationMS":30509,"rating":4.2,"releaseDate":"31/08/2006"},
  {"id":19,"name":"Winged Sumac","coverUrl":"http://dummyimage.com/250x100.png/5fa2dd/ffffff","artist":"Turner Sinson","durationMS":22471,"rating":3.7,"releaseDate":"03/02/2015"},
  {"id":20,"name":"Shriver's Purple Fringed Orchid","coverUrl":"http://dummyimage.com/151x100.png/ff4444/ffffff","artist":"Violetta Lightman","durationMS":19812,"rating":1.1,"releaseDate":"12/02/2005"},
  {"id":21,"name":"Ballhead Ipomopsis","coverUrl":"http://dummyimage.com/210x100.png/5fa2dd/ffffff","artist":"Rici McTague","durationMS":22294,"rating":3.2,"releaseDate":"22/07/2013"},
  {"id":22,"name":"Beard Lichen","coverUrl":"http://dummyimage.com/164x100.png/5fa2dd/ffffff","artist":"Maurise Wooderson","durationMS":26411,"rating":1.5,"releaseDate":"23/09/1992"},
  {"id":23,"name":"Brewer's Miterwort","coverUrl":"http://dummyimage.com/151x100.png/5fa2dd/ffffff","artist":"Anthia Sellens","durationMS":19345,"rating":1.0,"releaseDate":"18/03/2006"},
  {"id":24,"name":"Lewis River Suncup","coverUrl":"http://dummyimage.com/186x100.png/5fa2dd/ffffff","artist":"Ayn Mair","durationMS":20853,"rating":2.5,"releaseDate":"22/12/2001"},
  {"id":25,"name":"Graceful Sandmat","coverUrl":"http://dummyimage.com/185x100.png/dddddd/000000","artist":"Lisetta Heaviside","durationMS":10081,"rating":1.7,"releaseDate":"28/02/1998"},
  {"id":26,"name":"Canyon Schiedea","coverUrl":"http://dummyimage.com/132x100.png/5fa2dd/ffffff","artist":"Annabela Ilchuk","durationMS":37141,"rating":1.2,"releaseDate":"06/01/1992"},
  {"id":27,"name":"Siberian Oatgrass","coverUrl":"http://dummyimage.com/116x100.png/cc0000/ffffff","artist":"Jesselyn De La Haye","durationMS":23193,"rating":2.6,"releaseDate":"10/10/2006"},
  {"id":28,"name":"Field Chickweed","coverUrl":"http://dummyimage.com/249x100.png/5fa2dd/ffffff","artist":"Francklyn MacVay","durationMS":27818,"rating":1.9,"releaseDate":"06/08/2017"},
  {"id":29,"name":"Giant Sunflower","coverUrl":"http://dummyimage.com/106x100.png/ff4444/ffffff","artist":"Quincey Meadowcraft","durationMS":20999,"rating":4.6,"releaseDate":"04/05/1997"},
  {"id":30,"name":"Orange Lichen","coverUrl":"http://dummyimage.com/106x100.png/cc0000/ffffff","artist":"Elise Feuell","durationMS":22691,"rating":4.5,"releaseDate":"20/04/2006"},
  {"id":31,"name":"Sudetic Lousewort","coverUrl":"http://dummyimage.com/246x100.png/ff4444/ffffff","artist":"Amity Leipelt","durationMS":42544,"rating":1.7,"releaseDate":"08/02/1993"},
  {"id":32,"name":"Bush Rue","coverUrl":"http://dummyimage.com/136x100.png/cc0000/ffffff","artist":"Ginger Bidewel","durationMS":37426,"rating":3.7,"releaseDate":"19/08/2017"},
  {"id":33,"name":"Caryopteris","coverUrl":"http://dummyimage.com/102x100.png/ff4444/ffffff","artist":"Papagena Lidington","durationMS":20385,"rating":3.9,"releaseDate":"08/02/2018"},
  {"id":34,"name":"Thorne's Beaksedge","coverUrl":"http://dummyimage.com/154x100.png/ff4444/ffffff","artist":"Eliot Duchart","durationMS":34720,"rating":2.5,"releaseDate":"15/07/1994"},
  {"id":35,"name":"Appalachian Polytrichum Moss","coverUrl":"http://dummyimage.com/109x100.png/cc0000/ffffff","artist":"Elsey Arnot","durationMS":34270,"rating":4.1,"releaseDate":"30/07/1995"},
  {"id":36,"name":"Hispid Wreath Lichen","coverUrl":"http://dummyimage.com/151x100.png/cc0000/ffffff","artist":"Mikol Ney","durationMS":34763,"rating":4.0,"releaseDate":"29/12/1999"},
  {"id":37,"name":"Tweedy's Plantain","coverUrl":"http://dummyimage.com/245x100.png/ff4444/ffffff","artist":"Jocelyne Greetland","durationMS":39417,"rating":4.8,"releaseDate":"07/02/2003"},
  {"id":38,"name":"Sticky Ragwort","coverUrl":"http://dummyimage.com/156x100.png/cc0000/ffffff","artist":"Demott Albasiny","durationMS":26965,"rating":4.7,"releaseDate":"15/02/2007"},
  {"id":39,"name":"Southwestern Brickellbush","coverUrl":"http://dummyimage.com/137x100.png/ff4444/ffffff","artist":"Edita Child","durationMS":28111,"rating":2.7,"releaseDate":"16/04/2014"},
  {"id":40,"name":"Plains Eryngo","coverUrl":"http://dummyimage.com/150x100.png/dddddd/000000","artist":"Kellen Garroch","durationMS":49145,"rating":3.3,"releaseDate":"10/08/1996"},
  {"id":41,"name":"Arizona Lupine","coverUrl":"http://dummyimage.com/195x100.png/ff4444/ffffff","artist":"Devan Gudgen","durationMS":29129,"rating":4.0,"releaseDate":"22/11/2006"},
  {"id":42,"name":"Piper's Bluegrass","coverUrl":"http://dummyimage.com/238x100.png/ff4444/ffffff","artist":"Romain Blouet","durationMS":41835,"rating":1.6,"releaseDate":"04/02/1994"},
  {"id":43,"name":"Roccellina Lichen","coverUrl":"http://dummyimage.com/212x100.png/dddddd/000000","artist":"Felike Sterricker","durationMS":23735,"rating":2.9,"releaseDate":"15/12/2010"},
  {"id":44,"name":"Hispid Needle Lichen","coverUrl":"http://dummyimage.com/145x100.png/dddddd/000000","artist":"Corrina Govenlock","durationMS":25928,"rating":1.8,"releaseDate":"01/06/2017"},
  {"id":45,"name":"Appalachian Barren Strawberry","coverUrl":"http://dummyimage.com/182x100.png/ff4444/ffffff","artist":"Petunia Estcourt","durationMS":41554,"rating":3.5,"releaseDate":"19/02/2016"},
  {"id":46,"name":"Yellow Milkvetch","coverUrl":"http://dummyimage.com/153x100.png/dddddd/000000","artist":"Christie Matchell","durationMS":47994,"rating":3.2,"releaseDate":"29/08/1998"},
  {"id":47,"name":"Russelia","coverUrl":"http://dummyimage.com/163x100.png/5fa2dd/ffffff","artist":"Collie Pattison","durationMS":16466,"rating":2.5,"releaseDate":"28/06/2018"},
  {"id":48,"name":"Rim Lichen","coverUrl":"http://dummyimage.com/155x100.png/cc0000/ffffff","artist":"Christi Traviss","durationMS":30614,"rating":4.9,"releaseDate":"25/02/2000"},
  {"id":49,"name":"Yellow Hornpoppy","coverUrl":"http://dummyimage.com/245x100.png/ff4444/ffffff","artist":"Deva Dyshart","durationMS":25314,"rating":4.6,"releaseDate":"15/12/1996"},
  {"id":50,"name":"Watergrass","coverUrl":"http://dummyimage.com/129x100.png/5fa2dd/ffffff","artist":"Leontyne Blomefield","durationMS":20413,"rating":4.3,"releaseDate":"27/01/2011"},
  {"id":51,"name":"Minthorn's Milkvetch","coverUrl":"http://dummyimage.com/142x100.png/cc0000/ffffff","artist":"Lyndy Chaney","durationMS":44440,"rating":3.8,"releaseDate":"15/10/2017"},
  {"id":52,"name":"Palegreen Orchid","coverUrl":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","artist":"Artus Capenor","durationMS":38674,"rating":1.3,"releaseDate":"26/06/2007"},
  {"id":53,"name":"Chempedak","coverUrl":"http://dummyimage.com/226x100.png/dddddd/000000","artist":"Dodie Mioni","durationMS":42941,"rating":2.8,"releaseDate":"02/05/1999"},
  {"id":54,"name":"Brazilian Firetree","coverUrl":"http://dummyimage.com/214x100.png/ff4444/ffffff","artist":"Rozele Genese","durationMS":46606,"rating":4.8,"releaseDate":"27/05/2014"},
  {"id":55,"name":"Single Delight","coverUrl":"http://dummyimage.com/232x100.png/cc0000/ffffff","artist":"Fifi Vereker","durationMS":26704,"rating":4.7,"releaseDate":"22/03/2001"},
  {"id":56,"name":"Rue Of The Mountains","coverUrl":"http://dummyimage.com/163x100.png/cc0000/ffffff","artist":"Diarmid Rowesby","durationMS":27019,"rating":1.8,"releaseDate":"23/07/2006"},
  {"id":57,"name":"Variegated Orchid","coverUrl":"http://dummyimage.com/205x100.png/cc0000/ffffff","artist":"Sarge Romeuf","durationMS":29769,"rating":4.7,"releaseDate":"31/05/2010"},
  {"id":58,"name":"Prostrate Pigweed","coverUrl":"http://dummyimage.com/221x100.png/dddddd/000000","artist":"Bogart Dymott","durationMS":17824,"rating":3.1,"releaseDate":"05/06/1996"},
  {"id":59,"name":"Possumhaw","coverUrl":"http://dummyimage.com/114x100.png/dddddd/000000","artist":"Herbie Klousner","durationMS":10551,"rating":2.3,"releaseDate":"09/11/1997"},
  {"id":60,"name":"Johnny-nip","coverUrl":"http://dummyimage.com/177x100.png/cc0000/ffffff","artist":"Garik Bagnell","durationMS":35131,"rating":1.3,"releaseDate":"30/07/2010"},
  {"id":61,"name":"Blanketflower","coverUrl":"http://dummyimage.com/207x100.png/ff4444/ffffff","artist":"Idette Ingleston","durationMS":36483,"rating":3.9,"releaseDate":"08/02/2013"},
  {"id":62,"name":"Palo Iloron","coverUrl":"http://dummyimage.com/173x100.png/5fa2dd/ffffff","artist":"Eleanora Inkles","durationMS":16515,"rating":1.7,"releaseDate":"03/09/1998"},
  {"id":63,"name":"Rocky Mountain Nailwort","coverUrl":"http://dummyimage.com/143x100.png/ff4444/ffffff","artist":"Retha Woodroffe","durationMS":47847,"rating":2.4,"releaseDate":"26/02/1993"},
  {"id":64,"name":"Stiffleaf Cheesewood","coverUrl":"http://dummyimage.com/111x100.png/dddddd/000000","artist":"Dallas Jenney","durationMS":44788,"rating":1.9,"releaseDate":"05/11/2010"},
  {"id":65,"name":"Cornish Heath","coverUrl":"http://dummyimage.com/197x100.png/5fa2dd/ffffff","artist":"Zolly Laux","durationMS":19204,"rating":4.8,"releaseDate":"22/11/2006"},
  {"id":66,"name":"False Mermaidweed","coverUrl":"http://dummyimage.com/200x100.png/5fa2dd/ffffff","artist":"Essie Morriarty","durationMS":19812,"rating":1.4,"releaseDate":"22/10/2015"},
  {"id":67,"name":"Alkali Sunflower","coverUrl":"http://dummyimage.com/161x100.png/ff4444/ffffff","artist":"Carin Piff","durationMS":22607,"rating":1.7,"releaseDate":"05/11/2009"},
  {"id":68,"name":"Stalked Wild Petunia","coverUrl":"http://dummyimage.com/154x100.png/dddddd/000000","artist":"Linzy Bessett","durationMS":36043,"rating":1.2,"releaseDate":"06/04/2016"},
  {"id":69,"name":"Longleaf Rush","coverUrl":"http://dummyimage.com/171x100.png/ff4444/ffffff","artist":"Aeriel McCready","durationMS":49431,"rating":2.4,"releaseDate":"13/02/1997"},
  {"id":70,"name":"Snowbed Sedge","coverUrl":"http://dummyimage.com/216x100.png/dddddd/000000","artist":"Cammie Philips","durationMS":43722,"rating":2.7,"releaseDate":"01/11/2012"},
  {"id":71,"name":"Broadscale Sedge","coverUrl":"http://dummyimage.com/214x100.png/ff4444/ffffff","artist":"Arleta Geraudel","durationMS":48209,"rating":4.7,"releaseDate":"22/08/1998"},
  {"id":72,"name":"Wine Raspberry","coverUrl":"http://dummyimage.com/179x100.png/5fa2dd/ffffff","artist":"Elspeth Flawn","durationMS":39059,"rating":4.8,"releaseDate":"20/12/2005"},
  {"id":73,"name":"Naturita Milkvetch","coverUrl":"http://dummyimage.com/143x100.png/cc0000/ffffff","artist":"Kinnie Ferraro","durationMS":47860,"rating":4.7,"releaseDate":"16/09/2014"},
  {"id":74,"name":"Iowa Moonwort","coverUrl":"http://dummyimage.com/193x100.png/5fa2dd/ffffff","artist":"Marcus Gallico","durationMS":27145,"rating":3.7,"releaseDate":"31/05/2018"},
  {"id":75,"name":"Contorted Skin Lichen","coverUrl":"http://dummyimage.com/130x100.png/ff4444/ffffff","artist":"Bari Leggen","durationMS":37407,"rating":3.3,"releaseDate":"25/08/2001"},
  {"id":76,"name":"Nodding Beggartick","coverUrl":"http://dummyimage.com/140x100.png/5fa2dd/ffffff","artist":"Anton Othick","durationMS":42832,"rating":4.6,"releaseDate":"21/08/2013"},
  {"id":77,"name":"Twining Bluehood","coverUrl":"http://dummyimage.com/232x100.png/dddddd/000000","artist":"Ailene Marrington","durationMS":27621,"rating":4.5,"releaseDate":"28/02/2000"},
  {"id":78,"name":"Locustberry","coverUrl":"http://dummyimage.com/158x100.png/dddddd/000000","artist":"Wendye Frowd","durationMS":43970,"rating":2.5,"releaseDate":"12/06/2012"},
  {"id":79,"name":"Dactylina Lichen","coverUrl":"http://dummyimage.com/159x100.png/ff4444/ffffff","artist":"Torrin Loy","durationMS":17536,"rating":2.1,"releaseDate":"31/12/2013"},
  {"id":80,"name":"Asian Spiderflower","coverUrl":"http://dummyimage.com/206x100.png/dddddd/000000","artist":"Waldemar Cobleigh","durationMS":16820,"rating":4.6,"releaseDate":"21/08/2019"},
  {"id":81,"name":"Almex","coverUrl":"http://dummyimage.com/165x100.png/ff4444/ffffff","artist":"Nigel Stiller","durationMS":13680,"rating":4.4,"releaseDate":"13/11/1998"},
  {"id":82,"name":"American Grama","coverUrl":"http://dummyimage.com/170x100.png/cc0000/ffffff","artist":"Collie Bandey","durationMS":43308,"rating":4.7,"releaseDate":"10/01/1997"},
  {"id":83,"name":"Snowball Cactus","coverUrl":"http://dummyimage.com/249x100.png/dddddd/000000","artist":"Maximilian Krysztowczyk","durationMS":21378,"rating":2.2,"releaseDate":"02/04/1991"},
  {"id":84,"name":"Pitcherplant","coverUrl":"http://dummyimage.com/221x100.png/dddddd/000000","artist":"Randee Blaylock","durationMS":17476,"rating":1.1,"releaseDate":"10/11/2008"},
  {"id":85,"name":"Ladder Buckwheat","coverUrl":"http://dummyimage.com/195x100.png/cc0000/ffffff","artist":"Les Aloshikin","durationMS":36993,"rating":2.8,"releaseDate":"21/10/2001"},
  {"id":86,"name":"Jaeger's Joshua Tree","coverUrl":"http://dummyimage.com/235x100.png/5fa2dd/ffffff","artist":"Minette McCarthy","durationMS":19229,"rating":2.8,"releaseDate":"01/08/2008"},
  {"id":87,"name":"Inyo Lupine","coverUrl":"http://dummyimage.com/147x100.png/5fa2dd/ffffff","artist":"Sephira Perceval","durationMS":47535,"rating":2.4,"releaseDate":"24/02/2007"},
  {"id":88,"name":"Chinese Windmill Palm","coverUrl":"http://dummyimage.com/166x100.png/cc0000/ffffff","artist":"Kitti Quantrell","durationMS":34972,"rating":1.9,"releaseDate":"14/08/2019"},
  {"id":89,"name":"Mountain Snowberry","coverUrl":"http://dummyimage.com/115x100.png/5fa2dd/ffffff","artist":"Raychel Samuels","durationMS":19082,"rating":4.7,"releaseDate":"19/09/1992"},
  {"id":90,"name":"Houttuynia","coverUrl":"http://dummyimage.com/152x100.png/5fa2dd/ffffff","artist":"Donnell Rudolf","durationMS":32582,"rating":1.7,"releaseDate":"28/06/2001"},
  {"id":91,"name":"Castle Crags Bellflower","coverUrl":"http://dummyimage.com/100x100.png/cc0000/ffffff","artist":"Abeu Very","durationMS":14482,"rating":5.0,"releaseDate":"08/01/2014"},
  {"id":92,"name":"Montane Coneflower","coverUrl":"http://dummyimage.com/158x100.png/dddddd/000000","artist":"Darline Blaylock","durationMS":31671,"rating":3.9,"releaseDate":"19/09/2004"},
  {"id":93,"name":"Salmon River Cryptantha","coverUrl":"http://dummyimage.com/183x100.png/5fa2dd/ffffff","artist":"Patsy Filpi","durationMS":24558,"rating":3.6,"releaseDate":"07/06/2000"},
  {"id":94,"name":"Raynolds' Sedge","coverUrl":"http://dummyimage.com/162x100.png/dddddd/000000","artist":"Atlante Halligan","durationMS":17146,"rating":4.0,"releaseDate":"08/06/1994"},
  {"id":95,"name":"Great Ragweed","coverUrl":"http://dummyimage.com/117x100.png/dddddd/000000","artist":"Garner Imesson","durationMS":40025,"rating":1.3,"releaseDate":"31/01/1994"},
  {"id":96,"name":"Giant Hyssop","coverUrl":"http://dummyimage.com/126x100.png/cc0000/ffffff","artist":"Josie Lorans","durationMS":23355,"rating":3.5,"releaseDate":"03/03/1993"},
  {"id":97,"name":"Hairy Ragweed","coverUrl":"http://dummyimage.com/137x100.png/cc0000/ffffff","artist":"Mavra Geraudel","durationMS":16102,"rating":2.8,"releaseDate":"25/08/2002"},
  {"id":98,"name":"Dehesa Beargrass","coverUrl":"http://dummyimage.com/241x100.png/ff4444/ffffff","artist":"Sherlock Tulloch","durationMS":10290,"rating":2.7,"releaseDate":"01/09/2008"},
  {"id":99,"name":"Raymund's Birch","coverUrl":"http://dummyimage.com/186x100.png/dddddd/000000","artist":"Tallie Ferrea","durationMS":19417,"rating":1.2,"releaseDate":"07/07/2009"},
  {"id":100,"name":"Rim Lichen","coverUrl":"http://dummyimage.com/176x100.png/cc0000/ffffff","artist":"Tiena Greschik","durationMS":20205,"rating":3.7,"releaseDate":"08/06/1991"}];