
/*Function for calculating Force*/
function force() {
	let area, pressure, force;
	area=Number(document.formcalc2.txtarea.value);
	pressure=Number(document.formcalc2.txtpress.value);
	force=area*pressure;
	document.formcalc2.txtforce.value=force;
}
/*Function for calculating Pressure*/
function pressure() {
	let area, pressure, force;
	area=Number(document.formcalc3.txtarea.value);
	force=Number(document.formcalc3.txtforce.value);
	pressure=force/area;
	document.formcalc3.txtpress.value=pressure;
}
/*Function for calculating area*/
function area() {
	let area, pressure, force;
	pressure=Number(document.formcalc4.txtpress.value);
	force=Number(document.formcalc4.txtforce.value);
	area=force/pressure;
	document.formcalc4.txtarea.value=area;
}
/*Function for calculating area of a cylinder*/
function areacyl() {
	let diameter, area;
	diameter=Number(document.formcalc5.txtdia.value);
	area=diameter*.7854;
	document.formcalc5.txtarea.value=area;
}
/*Fuction for velocity formulas. Find Q*/
function velocityone() {
	let stroke, time;
	stroke=Number(document.formcalc6.txtstroke.value);
	time=Number(document.formcalc6.txttime.value);
	velocity=stroke*(60/time);
	document.formcalc6.txtvelocity.value=velocity;
}
/*Function for velocity given flow and area*/
function velocitytwo() {
	let flow, area;
	flow=Number(document.formcalc7.txtflow.value);
	area=Number(document.formcalc7.txtarea.value);
	velocity=(flow*231)/area;
	document.formcalc7.txtvelocity.value=velocity;
}
/*Function for calculating Head pressure*/
function inletpressure() {
	let positiveHead,specificGravity, res;
	positiveHead=Number(document.formcalc.txtposhead.value);
	specificGravity=Number(document.formcalc.txtspecgrav.value);
	res=positiveHead*specificGravity*.433;
	document.formcalc.txtres.value=res;
}
