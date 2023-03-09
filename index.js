const robot = require('robotjs')

const main = () => {
  setInterval(() => {
    const {x, y} = robot.getMousePos()
    robot.moveMouse(x+1,y+1)
  }, 30*1000)
}

main()
