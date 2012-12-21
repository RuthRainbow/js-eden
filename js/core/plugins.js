Eden.plugins = {};

Eden.prototype.loadPlugin = function(name) {
	if (this.plugins === undefined) {
		this.plugins = {};
	}
	if (this.views === undefined) {
		this.views = {};
	}

	//If not already loaded then load.
	if (this.plugins[name] === undefined) {
		this.plugins[name] = new Eden.plugins[name](this);
	}
};

Eden.prototype.createView = function(name, type) {
	this.views[type].dialog(name+"-dialog", this.views[type].title);
};

Eden.prototype.showView = function(name) {
	$("#"+name+"-dialog").show();
}

Eden.prototype.hideView = function(name) {
	$("#"+name+"-dialog").hide();
}
