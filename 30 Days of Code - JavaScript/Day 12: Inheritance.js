
class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);

        this.scores = scores;
    }

    calculate() {
        const average = this.scores.reduce((target, score) => { return target + score }) / this.scores.length;

        const range = (average < 70)
            ? Math.ceil((100 - average) / 15)
            : Math.floor((100 - average - 1) / 10);
        let letter = '';

        switch (range) {
            case -1:
            case 0:
                letter = 'O';
                break;

            case 1:
                letter = 'E';
                break;

            case 2:
                letter = 'A';
                break;

            case 3:
                letter = 'P';
                break;

            case 4:
                letter = 'D';
                break;

            default:
                letter = 'T';
                break;
        }

        return letter;
    }
}