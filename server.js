const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

function sayHello(call, callback) {
  const name = call.request.name || 'World';
  callback(null, { message: `Hello, ${name}!` });
}

function main() {
  const server = new grpc.Server();
  server.addService(helloProto.HelloWorld.service, { SayHello: sayHello });
  const address = '0.0.0.0:50051';
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at ${address}`);
    server.start();
  });
}

main();
