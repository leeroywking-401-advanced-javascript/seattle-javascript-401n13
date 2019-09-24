class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce( (acc,val) => {
      return acc + val.charCodeAt(0)
    }, 0) * 599 % this.size;
  }

  set(key,value) {
    let hashValue = this.hash(key);
    if( !this.map[hashValue]) { this.map[hashValue] = []; }
    this.map[hashValue].push({[key]:value});
  }

  has(key) {
    let hashKey = this.hash(key);
    for(let i=0; i<this.map[hashKey].length; i++) {
      if( this.map[hashKey][i][key] ) { return true;}
    }
    return false;
  }

  get(key) {

  }

}

let map = new HashMap(16);
map.set('John', 'John Cokos');
map.set('Rosie', 'Rosie Cokos');
map.set('Allie', 'Allie Cokos');
map.set('Zach', 'Zach Cokos');
map.set('x', 'x');
map.set('acc', 'acc');
map.set('b', 'Jx');
map.set('d', 'Jxdfd');
map.set('foo', 'sdfasdf');
map.set('far', 'fdsfd');
map.set('adsfljds', 'xill');

console.log(map.has('far'));

console.log(map);
