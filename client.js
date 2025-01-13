const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;


const client = new helloProto.HelloWorld('localhost:50051', grpc.credentials.createInsecure());

const name = process.argv[2] || 'World';
client.SayHello({ name }, (err, response) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Greeting:', response.message);
  }
});
