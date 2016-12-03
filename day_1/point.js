var Point = function(coordinates) {
  this.horizontal = 0;
  this.vertical = 0;
  this.current = "north";
}

Point.prototype = {
  numBlocks: function(direction, distance) {

    for (var i = 0; i < direction.length; i ++ ) {

      switch (this.current) {
        case "north":
        if (direction[i] == 'R') {
          this.current = "east";
          this.horizontal += distance[i];
        } else {
          this.current = "west";
          this.horizontal -= distance[i];
        }
        break
        case "east":
        if (direction[i] == 'R') {
          this.current = "south";
          this.vertical -= distance[i];
        } else {
          this.current = "north";
          this.vertical += distance[i];
        }
        break
        case "south":
        if (direction[i] == 'R' ){
          this.current = "west";
          this.horizontal -= distance[i];
        } else { 
          this.current = "east";
          this.horizontal += distance[i];
        }
        break
        case "west":
        if (direction[i] == 'R' ){
          this.current = "north";
          this.vertical += distance[i];
        } else {
          this.current = "south";
          this.vertical -= distance[i];
        }
        break
      }
    }
    return Math.abs(this.horizontal) + Math.abs(this.vertical);
  }
  
};

module.exports = Point;









