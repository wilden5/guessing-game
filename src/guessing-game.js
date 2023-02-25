class GuessingGame {

    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.value = Math.round((this.min + this.max) / 2);
    }

    lower() {
        return this.max = this.value;
    }

    greater() {
        return this.min = this.value;
    }
}

module.exports = GuessingGame;