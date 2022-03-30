var request=require('./module/require');

//console.log(request); //{ xxx: { get: [Function: get], post: [Function: post] } }

//console.log(request);  //{ get: [Function: get], post: [Function: post] }

console.log(request);  //{ get: [Function], post: [Function] }

request.get();
request.post();