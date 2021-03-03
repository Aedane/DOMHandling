"use strict";
function myBeautifulPage() {
  const wrapper = document.createElement("div");
  const iframe = document.createElement("iframe");
  const para = document.createElement("p");
  const newpara = document.createElement("p");
  const list = document.createElement("ul");

  wrapper.className = "iframeContainerclass";
  wrapper.id = "iframeContainerid";
  iframe.className = "classiframe";
  iframe.id = "idiframe";
  para.textContent = "This is a paragraph";
  newpara.textContent = "This is another paragraph";

  iframe.src = "mydom2.html";

  for (let i = 0; i <= 5; i++) {
    const listitem = document.createElement("li");
    listitem.className = "fure";
    console.log("i is: ", i);
    listitem.id = `unique${i}`;
    console.log(listitem);
  }
  let i = 0;
  while (i <= 5) {
    const listitem = document.createElement("li");
    listitem.className = "fure";
    const myname = `kalimera${i}`;
    listitem.id = myname;
    listitem.textContent = myname;
    console.log(listitem);
    list.appendChild(listitem);
    i++;
  }

  const mylist = document.getElementsByClassName("fure");

  wrapper.appendChild(para).appendChild(newpara).appendChild(list);

  document.body.appendChild(wrapper).appendChild(iframe);
  console.log(mylist);
  console.log(mylist.length);
  console.log(mylist[0]);
  console.log(mylist[mylist.length - 1]);
}

myBeautifulPage();
