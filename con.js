
  /* ข้อมูล Api โควิค-19 */
fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
  .then(response => response.json())
  .then(data => {
    
     document.getElementById('new_death').innerHTML = '+' + data[0].new_death + '<pb> คน</pb>'
     document.getElementById('case_new_diff').innerHTML = '+' + (data[0].case_new_diff).toLocaleString() + '<pb> คน</pb>'
     document.getElementById('total_case').innerHTML = '+' + (data[0].total_case).toLocaleString() + '<pb> คน</pb>'
     document.getElementById('case_foreign').innerHTML = + data[0].case_foreign + '<pb> คน</pb>'
     document.getElementById('case_new_prev').innerHTML = + data[0].case_new_prev + '<pb> คน</pb>'
     document.getElementById('update_date').innerHTML = '<b>อัปเดตล่าสุดเมื่อ: </b>' + data[0].update_date

  })
  .catch(error => console.error('Error:', error));