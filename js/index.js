document.querySelector('.time').innerText = new Date().toLocaleTimeString();


document.querySelector('.get-html-ajax').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         document.querySelector('.html-container').innerHTML = xhr.responseText;
      }
   }
   xhr.open('GET', 'client-data.html', true);
   xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

async function fetchHtml() {
   // fetch('client-data.html')
   //    .then(response => response.text()  )
   //    .then(html => document.querySelector('.html-container').innerHTML = html);
   const response = await fetch('client-data.html');
   document.querySelector('.html-container').innerHTML = await response.text();

}

document.querySelector('.get-json-ajax').addEventListener('click', getJsonAjax);

function getJsonAjax() {
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         const data = JSON.parse(xhr.responseText);
         document.querySelector('.client-name').innerText = data.name;
         document.querySelector('.accaunt-balance').innerText = data.balance;
      }
   }
   xhr.open('GET', 'client-data.json', true);
   xhr.send();
}

document.querySelector('.fetch-json').addEventListener('click', fetchJson);

async function fetchJson() {
   // fetch('client-data.html')
   //    .then(response => response.text()  )
   //    .then(html => document.querySelector('.html-container').innerHTML = html);
   const response = await fetch('client-data.json');
   const data = await response.json();
   document.querySelector('.client-name').innerText = data.name;
   document.querySelector('.accaunt-balance').innerText = data.balance;

}