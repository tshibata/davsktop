function dav_move(host, src, dst, name, new_name) {
	if (! new_name) {
		new_name = name;
	}
	if (src + name === dst + new_name) {
		return; // do nothing.
	}
	var req = new XMLHttpRequest();
	req.open("MOVE", src + name, true);
	req.setRequestHeader("Destination", host + dst + new_name);
	req.setRequestHeader("Overwrite", "F");
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(src);
			dav_propfind(dst);
			if (200 <= req.status && req.status < 300) {
				var path = src + name;
				for (var i = 0; i < containers.length; i++) {
					var title = containers[i].$title;
					if (title.substring(0, path.length) === path) {
						var newTitle = dst + new_name + title.substring(path.length);
						containers[i].$title = newTitle;
						if (newTitle.match(/\/$/)) {
							dav_propfind(newTitle);
						} else {
							content_cache[newTitle] = content_cache[title];
						}
						layout_cache[newTitle] = layout_cache[title];
						layout_cache[title] = undefined;
					}
				}
			} else {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send("");
}
function dav_copy(host, src, dst, name, new_name) {
	if (! new_name) {
		new_name = name;
	}
	var req = new XMLHttpRequest();
	req.open("COPY", src + name, true);
	req.setRequestHeader("Destination", host + dst + new_name);
	req.setRequestHeader("Overwrite", "F");
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(dst);
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send("");
}
function dav_get(path) {
	var o = reloading[path] = new Object();;
	for (var i = 0; i < containers.length; i++) {
		if (containers[i].$title === path) {
			containers[i].$reloadIcon = "reload.gif";
		}
	}
	var req = new XMLHttpRequest();
	req.open("GET", path, true);
	req.setRequestHeader("Cache-Control", "no-cache");
	req.onreadystatechange = function () {
		if (req.readyState == 4 && o == reloading[path]) { // care only for the last request
			reloading[path] = undefined;
			content_cache[path] = req.responseText;
			for (var i = 0; i < containers.length; i++) {
				if (containers[i].$title === path) {
					content_cache[path] = req.responseText;
					containers[i].$upload.style.opacity = 0.2;
					containers[i].$reloadIcon = "reload.png";
					containers[i].$text = req.responseText;
				}
			}
		}
	}
	req.send("");
}
function dav_put(path, data) {
	var o = uploading[path] = new Object();
	for (var i = 0; i < containers.length; i++) {
		if (containers[i].$title === path) {
			containers[i].$uploadIcon = "upload.gif";
		}
	}
	var req = new XMLHttpRequest();
	req.open("PUT", path, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4 && o == uploading[path]) { // care only for the last request
			uploading[path] = undefined;
			for (var i = 0; i < containers.length; i++) {
				if (containers[i].$title === path) {
					containers[i].$uploadIcon = "upload.png";
				}
			}
			var name = path.match(/\/([^\/]+\/?)$/)[1];
			dav_propfind(path.substring(0, path.length - name.length));
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send(data);
}
function dav_put_file(host, file, dst) {
	var req = new XMLHttpRequest();
	req.open("PUT", dst + file.name, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(dst);
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send(file);
}
function dav_delete(folder, name) {
	var path = folder + name;
	var req = new XMLHttpRequest();
	req.open("DELETE", path, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(folder);
			var base = document.getElementById("base");
			var left = []
			for (var i = 0; i < containers.length; i++) {
				if (containers[i].$title.substring(0, path.length) === path) {
					base.removeChild(containers[i]);
					content_cache[containers[i].$title] = undefined;
					// NOTE: layout_cache is kept because PROPPATCH may be not possible.
				} else {
					left.push(containers[i]);
				}
			}
			containers = left;
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send("");
}
function dav_mkcol(dst, name) {
	var req = new XMLHttpRequest();
	req.open("MKCOL", dst + name, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(dst);
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	}
	req.send("");
}
function dav_propfind(path) {
	var o = reloading[path] = new Object();
	for (var i = 0; i < containers.length; i++) {
		if (containers[i].$title === path) {
			containers[i].$reloadIcon = "reload.gif";
		}
	}
	var req = new XMLHttpRequest();
	req.open("PROPFIND", path, true);
	req.setRequestHeader("Depth", "1");
	req.onreadystatechange = function () {
		if (req.readyState == 4 && o == reloading[path]) { // care only for the last request
			reloading[path] = undefined;
			parseProp(path, req.responseXML);
			for (var i = 0; i < containers.length; i++) {
				if (containers[i].$title === path) {
					containers[i].$reloadIcon = "reload.png";
					display(containers[i]);
				}
			}
		}
	};
	req.send("");
}
function dav_proppatch(path, ns, map) {
	var req = new XMLHttpRequest();
	req.open("PROPPATCH", path, true);
	var patch;
	patch = '<?xml version="1.0"?><d:propertyupdate xmlns:d="DAV:" xmlns:s="'+ns+'"><d:set><d:prop>';
	for (name in map) {
		patch += '<s:' + name + '>' + map[name] + '</s:' + name + '>';
	}
	patch += '</d:prop></d:set></d:propertyupdate>';
	req.send(patch);
}

