//Calculate Energy Operation
calcEnergyButton = document.getElementById("calcEnergy");
energyOperation = function(){
  voltage = parseFloat(document.getElementById("voltage").value);
  resistance = parseFloat(document.getElementById("resistance").value);
  t1 = parseFloat(document.getElementById("t1").value);
  t1 = t1*Math.pow(10,-6);
  t2 = parseFloat(document.getElementById("t2").value);
  t2 = t2*Math.pow(10,-6);
  t3 = 20*t2;
  tau = -1*((t2-t1)/(-0.69314718056));
  A = Math.pow(voltage,2)/resistance;
  B = (A*t1)/3;
  C = (tau/-2)*A;
  D = -2*((t3-t1)/tau);
  energy = (C*(Math.exp(D)-1))+B;
  energy = energy.toFixed(4);
  calcEnergyRes = document.getElementById("calcEnergyRes");
  calcEnergyRes.innerText = energy;
}
calcEnergyButton.addEventListener("click",energyOperation);

//Calculate Tau Operation
calcTauButton = document.getElementById("calcTau");
TauOperation = function(){
  voltage = parseFloat(document.getElementById("voltage").value);
  resistance = parseFloat(document.getElementById("resistance").value);
  t1 = parseFloat(document.getElementById("t1").value);
  t1 = t1*Math.pow(10,-6);
  t2 = parseFloat(document.getElementById("t2").value);
  t2 = t2*Math.pow(10,-6);
  t3 = 20*t2;
  tau = -1*((t2-t1)/(-0.69314718056));
  tauRes = (tau*Math.pow(10,6)).toFixed(4);
  calcTauRes = document.getElementById("calcTauRes");
  calcTauRes.innerText = tauRes;
}
calcTauButton.addEventListener("click",TauOperation);