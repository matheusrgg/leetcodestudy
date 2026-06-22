getNLargest(prefix, n) {
    const matchingFiles = [];

    for (const [name, size] of this.file) {
        if (name.startsWith(prefix)) {
            matchingFiles.push([name, size]);
        }
    }

    const sortedItems = matchingFiles.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }

        return b[1] - a[1];
    });

    const slicedData = sortedItems.slice(0, n);

    return slicedData.map(file => {
        return `${file[0]}(${file[1]})`;
    });
}