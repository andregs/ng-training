import {
  wearBombs, goLunch, orderBigMac, eat, boom
} from './2.09.evil-plan-es2017';

// proper way of chaining
async function evilPlan() {
  await wearBombs();
  await goLunch();
  const lunch = await orderBigMac();
  await eat(lunch);
  boom();
}

evilPlan();
