module.exports = function toReadable(number) {

    const strNum = String(number);

    const firstTen = (num) => {
        switch (num) {
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';

        };
        return num;
    };

    const secondTen = (num) => {
        switch (num) {
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
            case '20':
                return 'twenty';

        };
        return num;
    };

    const tens = (num) => {
        switch (num) {
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        };
        return num;

    }

    if (strNum <= 9) {
        if (strNum == 0) {
            return 'zero';
        }
        return firstTen(strNum);
    } else if (strNum >= 10 && strNum <= 20) {
        return secondTen(strNum);
    } else if (strNum >= 21 && strNum <= 99) {
        return (strNum[1] != 0) ? tens(strNum[0]) + ' ' + firstTen(strNum[1]) : tens(strNum.substring(0, 1));
    } else if (strNum >= 100 && strNum <= 999) {
        if (strNum.substring(1, 3) == 00) {
            return firstTen(strNum[0]) + ' hundred';
        } else if (strNum.substring(1, 3) <= 9 && strNum.substring(1, 3) >= 1) {
            return firstTen(strNum[0]) + ' hundred ' + firstTen(strNum[2]);
        } else if (strNum.substring(1, 3) >= 10 && strNum.substring(1, 3) <= 20) {
            return firstTen(strNum[0]) + ' hundred ' + secondTen(strNum.substring(1, 3));
        } else return (strNum[2] != 0) ? firstTen(strNum[0]) + ' hundred ' + tens(strNum[1]) + ' ' + firstTen(strNum[2]) : firstTen(strNum[0]) + ' hundred ' + tens(strNum[1]);

    };
}
