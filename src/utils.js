export default class Utils {
    static getRandomColor(){
        return `hsl(${Math.floor(Math.random()*360)}deg, 50%, 50%)`
    }
}