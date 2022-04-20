const timer = (second) => {
  
  let time = 1000;
  for(let i of second) {
    setTimeout(() =>{
      process.stdout.write('\x07');
    }, time*i)
  }
}

const args = timer(process.argv.slice(2));