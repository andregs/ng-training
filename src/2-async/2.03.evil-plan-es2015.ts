export function wait(seconds: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, seconds * 1000));
}

export function wearBombs(): Promise<void> {
  console.log('Wearing bombs...');
  const time = Math.random() * 10;
  return wait(time).then(_ => console.log('Bombs ready.\n'));
}

export function goLunch(): Promise<void> {
  console.log('Heading to Mc Donalds...');
  const time = Math.random() * 10;
  return wait(time).then(_ => console.log("I'm in."));
}

interface BigMac {
  beef: number;
  lettuce: boolean;
  cheese: boolean;
  bacon: boolean;
}

export function orderBigMac(): Promise<BigMac> {
  console.log('A Big Mac, please.\n');
  const time = Math.random() * 10;
  return wait(time).then(_ => (
    { beef: 2, lettuce: true, cheese: true, bacon: false }
  ));
}

export function eat(lunch: BigMac): Promise<void> {
  console.log('Eating', JSON.stringify(lunch));
  const time = Math.random() * 10;
  return wait(time).then(_ => console.log("\nLet's finish this.\n"));
}

export function boom(): void {
  console.warn('ALALALALALA!');
  console.warn('BOOOOM!!!');
}
