# gRPCNode
 Application built in Node.js using the gRPC architecture. 
 This project implements a **gRPC** service and client in **Node.js** that communicate using the gRPC protocol. The server responds with a custom greeting message   depending on the name sent by the client.
## Features
- gRPC**: Efficient communication between client and server.
- Protocol Buffers**: Definition of messages and services using the `hello.proto` file.
- Node.js**: Client and server implementation.
## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js 14 or higher**.  
  Download it from [nodejs.org](https://nodejs.org/).
- npm** (included with Node.js)
- gRPC** and **Protocol Buffers Compiler**.  
  Install `protoc` from [the official documentation](https://grpc.io/docs/protoc-installation/).

## Steps to Download and Run the Project

1. **Clone the Repository**.  
   Clone this repository on your local machine using the command:
   ```bash
   git https://github.com/EnContacto/gRPCNode.git
   cd gRPCNode
2. **Install the dependencies**.
   Run the following command to install the project dependencies:

   `npm install`

3. **Verify the hello.proto file**
   Make sure the hello.proto file is in the same directory as the server and client scripts. 
4. **Start the server**
   Run the following command to start the gRPC server:
   `node server.js`
   You should see the following message in the console:
   Server running at `0.0.0.0.0:50051`
5. **Run the client**
   In a new terminal, run the gRPC client and send a name as argument:
   `node client.js`
   Expected response:
    `node client.js`
   Greeting: Hello, Bryan!
   If you do not specify a name, the server will respond with `“Hello, World!”`:

## Project Structure.
   The project has the following basic structure:
   ```bash
📁 grpc-nodejs-hello
 ┣ 📄 server.js # gRPC server code.
 ┣ 📄 client.js # gRPC client code
 ┣ 📄 hello.proto # Service and message definition in Protocol Buffers
 ┗ 📄 README.md # Project documentation
