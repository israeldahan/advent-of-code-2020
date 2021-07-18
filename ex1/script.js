var expenses = [
    1140, 1736, 1711, 1803, 1825, 1268, 1651, 2007, 1923, 1661, 1788, 1876, 2003, 1752, 1988, 1955, 1568, 1478, 1699, 1717, 1828, 1636, 1387, 1870, 1658, 1572, 1703, 1185, 1569, 1515, 1142, 1407, 1587, 1608, 1827, 1546, 1808, 1937, 1815, 1957, 1401, 1763, 1970, 1960, 1853, 1987, 1865, 1567, 1664, 1961, 1771, 1846, 1971, 1416, 1897, 633, 1708, 1606, 515, 1397, 1873, 1374, 1969, 1918, 1170, 1660, 1494, 1764, 2002, 1938, 1396, 1926, 1714, 1659, 1805, 1593, 1899, 1850, 1644, 1877, 1561, 1895, 1985, 1353, 395, 1919, 1522, 1745, 1721, 901, 1765, 1939, 2009, 1949, 1852, 1792, 1749, 1675, 1883, 1240, 1868, 1615, 1693, 1720, 1388, 1325, 1337, 867, 1751, 1408, 1715, 1942, 1706, 1894, 1260, 1945, 1700, 1148, 1373, 351, 1790, 1861, 1755, 1155, 1622, 1743, 1872, 1979, 1262, 1789, 1305, 1311, 1729, 1929, 823, 1623, 2005, 1932, 1814, 1909, 1728, 1592, 1712, 1363, 1338, 1804, 1402, 1198, 264, 1117, 1791, 1419, 1229, 1924, 1838, 1785, 1982, 1683, 1950, 1199, 1984, 1830, 1921, 1980, 1834, 1341, 1282, 1989, 1854, 1395, 1847, 1900, 1913, 1777, 1779, 1333, 1800, 1966, 1543, 1882, 1375, 1811, 1673, 1679, 889, 1670, 1879, 1312, 1741, 1772, 1663, 1776, 1642, 1674, 1472, 1580, 1264, 1738, 1999, 1637
]

//option a
for (let i = 0; i < expenses.length; i++) {
    for (let x = 0; x < expenses.length; x++) {
        if (expenses[i] + expenses[x] == 2020){
            console.log(`i found the ${expenses[i]} and ${expenses[x]} equal 2020`);
        }
    }
}

//option b
function compareNumbers(a, b) {
    return a - b;
}
expenses.sort(compareNumbers);

let f = find2020(expenses);

function find2020(expenses) {
    let endEx = expenses.length - 1;
    for (let i = 0; i < expenses.length; i++) {
        let elementEnd = expenses[endEx];
        let sum = expenses[i] + expenses[endEx];
        for (let x = endEx; sum > 2020; x--) {
            endEx = x
            elementEnd = expenses[endEx];
            sum = expenses[i] + expenses[endEx];
            if (sum == 2020){
                return sum;
            }
        }
    }
}


let result = findSumFromThreeNum(expenses, 2020);
console.log(result);
let multRes = multipleResult(result);
console.log(multRes);
function findSumFromThreeNum(expenses, toFind) {
    let end = expenses.length - 1;
    for (let i = 0; i < expenses.length; i++) {
        let mid = i + 1;
        let sum = expenses[i] + expenses[mid] + expenses[end];
        for (let x = end; sum > toFind; x--) {
            end = x
            sum = expenses[i] + expenses[mid] + expenses[end];
        }
        while (sum <= toFind) {
            sum = expenses[i] + expenses[mid] + expenses[end];
            if (sum == toFind) {
                return [expenses[i], expenses[mid], expenses[end]];
            }
            mid++;
        }
    }
}

function multipleResult(arr) {
    let sum = 1;
    arr.forEach(el => {
        sum = sum * el; 
    });
    return sum;
}