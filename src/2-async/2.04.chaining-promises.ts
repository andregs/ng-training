import { wearBombs, goLunch, orderBigMac, eat, boom } from "./2.03.evil-plan";

// proper way of chaining
wearBombs()
  .then(_ => goLunch())
  .then(_ => orderBigMac())
  .then(lunch => eat(lunch))
  .then(_ => boom());

// rookie way of chaining, but with same result
wearBombs().then(() => {
  goLunch().then(() => {
    orderBigMac().then(lunch => {
      eat(lunch).then(_ => {
        boom();
      });
    });
  });
});
