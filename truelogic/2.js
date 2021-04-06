const funcA = () => console.log('Func A');
const funcB = () => setTimeout(() => console.log('Func B'));
const funcC = () => console.log('Func C');
//What is the output and why?
funcB();
funcA();
funcC();

/**
 * the event loop prioritizes the A and B function because once it checks for the setTimeout
 * it would add at the end of the loop "queue"
 *
 * Func A
 * Func C
 * Func B
 */
