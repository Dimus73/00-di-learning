function print_string(e){
  e.preventDefault();
  console.log(e);
  console.log("dddddddd");
  let forms = document.forms;
  let obj = {
    name:forms[0].f_name.value,
    lastname:forms[0].l_name.value
  }
  // let json_s=`{"name":${forms[0].f_name.value},"lastname":${forms[0].l_name.value}}`
  json_s = JSON.stringify(obj);
  console.log(json_s);
  let div=document.createElement('div');
  div.textContent=json_s;
  document.body.appendChild(div);
}