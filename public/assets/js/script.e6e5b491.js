let e=document.getElementById("js-submitButton"),t=document.getElementById("js-submitionScreen");function n(){t.classList.toggle("active")}e.onclick=function(){(function(){let e=document.querySelector(".rate-wrapper__radio:checked");document.getElementById("js-selectedNumber").innerText=e.value})(),n()},t.onclick=function(){n()};