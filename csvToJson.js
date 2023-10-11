const csvToJson = (csv) => {
  const [headers, ...rows] = csv.split("\n");
  const headersArray = headers.split(",");
  const json = [];
  rows.forEach((row) => {
    const rowArray = row.split(",");
    let item = {};
    for (i = 0; i < headersArray.length; i++) {
      item = {
        ...item,
        [`${headersArray[i]}`]: rowArray[i],
      };
    }
    json.push(item);
  });
  return json;
};

const jsonData = csvToJson("id,name,age\n1,john smith,29\n2,jane smith,30");
console.log(jsonData);
