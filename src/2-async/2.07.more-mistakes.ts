import { wait, wearBombs, goLunch, orderBigMac } from "./2.03.evil-plan-es2015";

// waiting for a bunch of Promises

const db = {
  remove(id: number): Promise<void> {
    const time = Math.random() * 5;
    return wait(time).then(
      _ => console.log(id + ' deleted.')
    );
  }
};

const idsToDelete = [123, 234, 654, 342];

function unsafeLoop() {
  idsToDelete.forEach(id => db.remove(id));
  console.log('Everything was deleted.');
}

function safeLoop() {
  const promises = idsToDelete.map(id => db.remove(id));
  Promise.all(promises).then(
    _ => console.log('Everything was deleted.')
  );
}

unsafeLoop();
// safeLoop();

// side-effect vs returning

// goLunch and orderBigMac are gonna run in parallel
// after wearBombs resolve
wearBombs()
  .then(_ => { goLunch(); })
  .then(_ => { orderBigMac(); });

// to avoid this highly common mistake,
// inside of a then or catch method,
// ALWAYS return or throw something.
