function answer()
{
  var amountInput=parseInt(document.getElementById("amount").value);
  var rateInput=parseInt(document.getElementById("rate").value);
  var timeInput=parseInt(document.getElementById("time").value);
  var interest=Math.floor((amountInput*rateInput*timeInput)/100);
  document.getElementById("Output").innerHTML=interest;
  document.getElementById("Amount").innerHTML=interest+amountInput;
}
