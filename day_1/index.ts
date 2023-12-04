import { readFileSync } from "fs";

const readLines = (path: string) => {
    const input = readFileSync(path, "utf8");
    return input.split("\n");
};

/**
 * @description Part one solution
 * @todo Code part 2
 */
const getCalibrationValue = () => {
    const path = "./inputs.txt";
    const inputs = readLines(path);

    const total = inputs.reduce((sum, val) => {
        let twoDigit = "";
        twoDigit += val.match(/[0-9]/);
        twoDigit += val.split("").reverse().join("").match(/[0-9]/);
        return sum + parseInt(twoDigit);
    }, 0);

    return total;
};

console.log(getCalibrationValue());
