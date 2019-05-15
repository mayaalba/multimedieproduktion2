/* TOPNAV */
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* KALENDER */
window.onload = function(){
    let d = new Date();
    let month_name = ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'];
    let month = d.getMonth();   //0-11
    let year = d.getFullYear(); //2014
    let first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    let tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    let first_day = tmp.substring(0, 3);    //Mon
    let day_name = ['Søn','Man','Tirs','Ons','Tors','Fre','Lør'];
    let day_no = day_name.indexOf(first_day);   //1
    let days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    let calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    
    //row for the day letters
    for(let c=0; c<=6; c++){
        let td = document.createElement('td');
        td.innerHTML = "SMTOTFL"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c; //skal være var, ellers virker det ikke
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        let td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    let count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(let r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(let c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            let td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}