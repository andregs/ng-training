export function wait(seconds: number = 1): Promise<void> {
  return new Promise<void>(r => setTimeout(r, seconds * 1000));
}

let seconds = 0;

wait()
  .then(_ => {
    console.log(`${++ seconds} second has passed`);
    return wait();
  })
  .then(_ => {
    console.log(`${++ seconds} seconds have passed`);
    return wait();
  })
  .then(_ => {
    console.log(`${++ seconds} seconds have passed`);
    return wait(seconds);
  })
  .then(_ => {
    console.log(`${seconds} more seconds have passed`);
  })
  .then(_ => console.log('end of story.'));

console.log("I'm gonna run right away.");
