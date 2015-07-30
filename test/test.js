describe('treewalker test case', function() {
	
	var treewalker = require('../');
	
	var node = {
		name : 'parent',
		childs : [{
			name : 'child-1',
			childs : []
		}, {
			name : 'child-2',
			childs : []
		}]
	};
	
	var newNode = {
		name : 'king',
		childs : []
	};

	describe('Insertion Test Case', function() {
		it('It should should be able to insert successfully', function() {
			treewalker.resolveTree(node, 'childs', function(obj) {
				if (obj.name === 'parent') {
					//shollow copy the object and push
					var newObj = {};
					for (var key in newNode) {
						newObj[key] = newNode[key];
					}
					obj.childs.push(newObj);
					return true;
				}
			});
			treewalker.resolveTree(node, 'childs', function(obj) {
				
				if (obj.name === 'parent') {
					obj.childs.forEach(function(obj) {
						if (obj.name === newNode.name) {
							for (var key in obj) {
								if (!obj[key] === newNode[key]) {
									throw new Error('Insertion Failed');
								}
							}
						}
					});
				}
			});
		});
	});
});
