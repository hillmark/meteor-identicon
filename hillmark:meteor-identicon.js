// Write your package code here!
Package.blaze.UI.registerHelper('identicon', function(context, options) {
  if(context) {
  	var identicon = new Identicon(context, 256).toString();
  	return "data:image/png;base64," + identicon.toString();
  }	
});