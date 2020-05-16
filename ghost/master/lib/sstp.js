(function (exports) {
  // initialize
  const net = require('net');
  let client;
  // public method
  // connect to sstp server
  exports.connect = function (host, port, callback) {
    // initialize
    host = host || '127.0.0.1';
    port = port || 9801;
    // connect
    client = new net.Socket();
    client.connect(port, host, function () {
      callback();
    });
    return client;
  };
  // close connection
  exports.close = function () {
    client && client.end();
  };
  // request
  exports.request = function (command, host, port) {
    // initialize
    command = command.replace(/[\r\n]+\s*/g, '\r\n') + '\r\n';
    host = host || '127.0.0.1';
    port = port || 9801;
    // create promise
    const promise = new Promise(function (resolve, reject) {
      client || (function () {
        client = new net.Socket();
        client.connect(port, host);
      })();
      client.on('data', function (data) {
        var response = parse(data);
        console.log(response);
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      });

      console.log('in sstp module\n', command);
      client.write(command);
    });
    promise.success = function (callback) {
      promise.then(callback);
      return this;
    };
    promise.error = function (callback) {
      promise.catch(callback);
      return this;
    };

    return promise;
  };

  // private method
  function parse(text) {
    const arr = text.toString().split('\r\n');
    const header = arr[0].split(' ');
    const body = {};
    arr.slice(1, arr.length - 1).forEach(function (line) {
      if (!line.length) return;
      let s = line.split(': ');
      body[s[0].toLowerCase()] = s[1];
    });
    return response = {
      protocol: header[0],
      status: parseInt(header[1]),
      message: header[2],
      body: body
    };
  }
})(typeof exports === "object" && exports || this);
