function dav_move(host, src, dst, name, new_name) {
	if (! new_name) {
		new_name = name;
	}
	var req = new XMLHttpRequest();
	req.open("MOVE", src + name, true);
	req.setRequestHeader("Destination", host + dst + new_name);
	req.setRequestHeader("Overwrite", "F");
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(src);
			dav_propfind(dst);
			if (req.status < 200 || 300 <= req.status) {
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
	var req = new XMLHttpRequest();
	req.open("GET", path, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			content_cache[path] = req.responseText;
			for (var i = 0; i < containers.length; i++) {
				var container = containers[i];
				if (container.$title === path) {
					container.$text = req.responseText;
				}
			}
		}
	}
	req.send("");
}
function dav_put(path, data) {
	var req = new XMLHttpRequest();
	req.open("PUT", path, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
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
	var req = new XMLHttpRequest();
	req.open("DELETE", folder + name, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			dav_propfind(folder);
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
	var req = new XMLHttpRequest();
	req.open("PROPFIND", path, true);
	req.setRequestHeader("Depth", "1");
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			parseProp(path, req.responseXML);
			for (var i = 0; i < containers.length; i++) {
				if (containers[i].$title === path) {
					display(containers[i]);
				}
			}
		}
	};
	req.send("");
}
function dav_proppatch(path, ns, name, value) {
	var req = new XMLHttpRequest();
	req.open("PROPPATCH", path, true);
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status < 200 || 300 <= req.status) {
				alert(req.responseText.split(/<[^>]*>/).join(" "));
			}
		}
	};
	req.send('<?xml version="1.0"?><d:propertyupdate xmlns:d="DAV:" xmlns:s="'+ns+'"><d:set><d:prop><s:'+name+'>'+value+'</s:'+name+'></d:prop></d:set></d:propertyupdate>');
}

