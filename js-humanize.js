Humanize = {
    humanize: function (value) {
        var mag = this.magnitude(value);

        if (mag <= 3) return value;

        if (mag > 3 && mag <= 6) {
            return value.toString().substr(0, mag - 3) + "K"
        }

        if (mag > 6 && mag <= 9) {
            return value.toString().substr(0, mag - 6) + "M"
        }

        if (mag > 9 && mag <= 12) {
            return value.toString().substr(0, mag - 9) + "B"
        }

        if (mag > 12 && mag <= 15) {
            return value.toString().substr(0, mag - 12) + "T"
        }

        return value;
    },

    magnitude: function (value) {
        var mag = 0;

        while(value > 1) {
          mag++;
          value = value / 10;
        };

        return mag;
    }
};


// tests

// for (var i = 1; i< 10000000000000000000; i*=5) {
//     console.log(i, Humanize.magnitude(i), Humanize.humanize(i));
// }
