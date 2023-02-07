function sym(...args) {
  console.log(args);
  let variables = [];
  variables = compare(args[0], args[1]);
  args.shift();
  args.shift();
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    variables = compare(variables, args[i]);
    console.log(i);
  }
  console.log(variables);
  return variables;
}

function compare(...args) {
  let variables = [];
  args[0] = [...new Set(args[0])];
  args[1] = [...new Set(args[1])];
  for (let a = 0; a <= args[0].length; a++) {
    for (let b = 0; b < args[1].length; b++) {
      if (args[0][a] != args[1][b] && b == args[1].length - 1) {
        if (args[0][a] == undefined) {
          break;
        }
        variables.push(args[0][a]);
        break;
      } else if (args[0][a] == args[1][b]) {
        break;
      }
    }
  }
  for (let b = 0; b <= args[1].length; b++) {
    for (let a = 0; a < args[0].length; a++) {
      if (args[0][a] != args[1][b] && a == args[0].length - 1) {
        if (args[1][b] == undefined) {
          break;
        }
        variables.push(args[1][b]);
        break;
      } else if (args[0][a] == args[1][b]) {
        break;
      }
    }
  }
  return variables;
}
sym([1, 2, 3], [5, 2, 1, 4]);
