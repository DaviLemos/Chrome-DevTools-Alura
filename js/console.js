console.groupCollapsed('Nome do grupo');
console.warn('WARN');
console.error('Error');
console.log('batata');
var a = 10;
console.assert(a <= 10, 'Console Assert');
console.table([
  [1, 2, 3],
  [2, 4, 6],
]);
console.table([{ name: 'Alura' }, { name: 'Davi' }]);
console.groupEnd();
