var i=0;


function podlicz(){
	document.getElementsByClassName("cont2")[0].style.visibility = "visible";
	var names = document.getElementsByName("imie");
	var ages = document.getElementsByName("wiek");
	var sum=0;

	while(document.getElementById("myTable2").lastElementChild.lastElementChild.className != "perm")
	{
		var k = document.getElementById("myTable2").lastElementChild.lastElementChild.rowIndex;
		document.getElementById("myTable2").deleteRow(k);
	}
	for(j=0;j<names.length;j++){
		var condition = names[j].value!="" && ages[j].value !="" && !(/\D/g).test(ages[j].value) && ages[j].value >= 18;
		if(condition){
			var newItem1 = document.createElement("td");
			newItem1.innerHTML = names[j].value;
			var newItem2 = document.createElement("td");
			newItem2.innerHTML = ages[j].value;
			var table = document.getElementById("myTable2");
			var row = table.insertRow();
			row.appendChild(newItem1);
			row.appendChild(newItem2);
			sum=sum+parseInt(ages[j].value);
		}
	}
	var newItem3 = document.createElement("td");
	var newItem4 = document.createElement("td");
	var table = document.getElementById("myTable2");
	var row = table.insertRow();
	row.appendChild(newItem3);
	row.appendChild(newItem4);
	newItem3.className="summary";
	newItem4.className="summary";
	newItem3.innerHTML = 'Sum'.bold();
	newItem4.innerHTML = sum.toString().bold();
}

function onFocus(){
	console.log(document.getElementById(i).value)
	if(this.class!="kappa" && document.getElementById(i).value != ""){
		i++;
		var x = document.createElement("input");
		var y = document.createElement("input");
		x.name="imie";
		y.name="wiek";
		y.type="number";
		x.setAttribute("id",i);
		y.onfocus = onFocus;
		var newItem1 = document.createElement("td");
		newItem1.appendChild(x);
		var newItem2 = document.createElement("td");
		newItem2.appendChild(y);
		var table = document.getElementById("myTable1");
		var row = table.insertRow();
		row.appendChild(newItem1);
		row.appendChild(newItem2);
		this.class="kappa";
	}
}