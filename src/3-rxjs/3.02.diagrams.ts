// The streams of the previous lesson, as a diagram:

// | is the completion signal
// X is an error
// ---> is the timeline

/* stream0 ---0---1---2----3----4----5----6--7--8--9-->
 *            take(7)
 * stream1 ---0---1---2----3----4----5----6-|->
 *            map(n + 97)
 * stream2 --97--98--99--100--101--102--103-|->
 *            map(fromCharCode(n))
 * stream3 ---a---b---c----d----e----f----g-|->
 *            map(d is dumb)
 * stream4 ---a---b---c----X-->
 */

// stream5 -0-1-2-3-4-5-6-97-98-99-100-101-102-103-a-b-c-d-e-f-g-a-b-c-X->
