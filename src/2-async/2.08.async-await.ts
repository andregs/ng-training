import { wait } from './2.03.evil-plan-es2015';

// When an async function is called, it returns a Promise.

function makePromise(): Promise<void> {
  return wait(3);
}

async function makePromise2(): Promise<void> {
  return wait(3);
}

// Any other value returned is wrapped in a resolved Promise.

function wrapValue(): Promise<string> {
  return Promise.resolve('foo');
}

async function wrapValue2(): Promise<string> {
  return 'foo';
}

// undefined is wrapped too

function doStuff(): void {
  console.log('done.');
}

function wrapUndef(): Promise<void> {
  doStuff();
  return Promise.resolve();
}

async function wrapUndef2(): Promise<void> {
  doStuff(); // returning nothing
}

// Errors thrown are wrapped in a rejected Promise.

function wrapError(): Promise<never> {
  return Promise.reject(new Error('reason'));
}

async function wrapError2(): Promise<never> {
  throw new Error('reason');
}
