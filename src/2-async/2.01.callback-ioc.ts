// If you pass a callback from your code to an external function
// then you give away the control of your code execution.

// this is inversion of control,
// and it represents the biggest issue with async ballbacks.

// consider this example:

declare const http: any; // <- 3rd-party lib that we use to http get stuff
declare function charge(customer: any): void; // <- our fn that charges customers

http.get('example.com/customer?id=1', function(err: any, customer: any) {
  if (err) throw err;
  charge(customer);
});

// The example represents the callback approach to make an async http request.
// How can you be sure that the http lib is gonna call your fn properly?
// It's supposed to charge your customer only once,
// as soon as the http response arrives.
// But what if it calls the callback more than once? Or never?

// You have no control over that anymore. You gave it to the 3rd party lib.
