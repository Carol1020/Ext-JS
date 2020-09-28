let record = {};
for (let N = 0; N < 1001; N++) {
  record = {
    name: "Milhouse" + N,
    email: "milhouse" + N + "@simpsons.com",
    phone: "555-" + N,
  };
  console.log(record);
}
