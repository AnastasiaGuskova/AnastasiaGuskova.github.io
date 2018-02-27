function renderRow(row) {
  const html = document.querySelector("#row-tpl").textContent.trim();
  const compiled = _.template(html);
  console.log(compiled);
  const result = compiled({
    data: row
  });
  const container = document.querySelector("#row-container");
  container.innerHTML = result;
}
