const isEqual = (a, b) => {
    /* strong equal */

    /* string */
    if (typeof a === 'string' && typeof b === 'string') {
        return a === b;
    }

    /* number */
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b;
    }

    /* boolean */
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return a === b;
    }

    /* undefined */
    if (typeof a === 'undefined' && typeof b === 'undefined') {
        return true;
    }

    /* object or null */
    if (typeof a === 'object' && typeof b === 'object') {
        /* Array */
        if (Array.isArray(a) && Array.isArray(b)) {
            return a.length === b.length && a.every((val, index) => isEqual(val, b[index]));
        }
    }

    // arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index])
};