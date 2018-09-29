


function inletpressure() {
	var positiveHead,specificGravity, res;
	positiveHead=Number(document.formcalc.txtposhead.value);
	specificGravity=Number(document.formcalc.txtspecgrav.value);
	res=positiveHead*specificGravity*.433;
	document.formcalc.txtres.value=res;
}

