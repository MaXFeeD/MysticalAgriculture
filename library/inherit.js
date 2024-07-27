LIBRARY({
	name: "inherit",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

function __inherit__(to, from, references) {
	if (typeof to !== "object" || to === null) {
		throw new TypeError("To object " + String(to) + " is not a object or null");
	}
	if (typeof from !== "object" || from === null) {
		throw new TypeError("From object " + String(from) + " is not a object or null");
	}
	if ((references || (references = [])).indexOf(from) != -1) {
		return;
	}
	(references = references.slice()).push(from);
	for (let key in from) {
		if (to[key] !== undefined || Object.prototype.hasOwnProperty.call(from, key)) {
			if (from[key] === undefined) {
				delete to[key];
				continue;
			}
			if (from[key] === null || to[key] === null || typeof from[key] !== "object" || typeof to[key] !== "object" || Array.isArray(from[key]) || Array.isArray(to[key])) {
				to[key] = from[key];
				continue;
			}
			let inherits = to[key];
			to[key] = (Object.assign || function(t, p) { for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) t[k] = p[k]; })({}, to[key]);
			__inherit__(to[key], from[key], references);
			to[key].$ = inherits;
		}
	}
}

function __class__(obj, proto) {
	if (typeof obj !== "object" || obj === null) {
		throw new TypeError("Class " + String(obj) + " is not a prototype or null");
	}
	let target = obj.constructor || (obj.constructor = function() { return proto && proto.apply(this, arguments) || this; });
	if (target.prototype === Object.prototype || (proto != null && target.prototype === proto.prototype)) {
		let constructed = false;
		target = (function(proto) {
			return function() {
				return constructed ? proto.apply(this, arguments) : (constructed = true);
			};
		})(target);
		new target();
	}
	if (proto !== undefined) {
		if (typeof proto !== "function" && proto !== null) {
			throw new TypeError("Class extends value " + String(proto) + " is not a constructor or null");
		}
		(Object.setPrototypeOf || function(t, p) { t.__proto__ = p; })(target, proto);
		if (proto === null) {
			target.prototype = Object.create(proto);
		} else {
			function __() { this.constructor = target; }
			__.prototype = proto.prototype;
			target.prototype = new __();
		}
		target.prototype.$ = proto === null ? target.prototype : proto.prototype;
		__inherit__(target.prototype, obj);
	} else {
		target.prototype = obj;
	}
	return target;
}

EXPORT("__class__", __class__);
