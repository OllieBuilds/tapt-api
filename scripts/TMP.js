// let beers;
let options = {
hostname: 'http://api.brewerydb.com',
port: 80,
path: 'v2/beer/QJrMOR/?key=1e4230aee7ebf8eb42550ddfdcae3e1e',
method: 'GET',
};

const getBeer =  http.request(options, (res) =>{
console.log(`STATUS: ${res.statusCode}`);
res.on('data', (chunk) => {
  console.log(`BODY: ${chunk}`);
});
res.on('end', () => {
  console.log('No more data in response.');
});
});

// getBeer();







// request.get('http://api.brewerydb.com/v2/beer/QJrMOR/?key=1e4230aee7ebf8eb42550ddfdcae3e1e',
//       function(err, res) {
//         if(!err && res.statusCode === 200) {
//           beers = JSON.parse(res.body);
//           res.render(beers);
//         }
//       }
//     );
// Beer.find(beers)
// .then((beers) => console.log('second' + beers))
// .then((beers) => res.json({ beers }))
// .catch((err) => next(err));
