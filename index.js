const genId1 = require('nisd_xid');
const genId2 = require('svoj_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|EeuJK6P6Sg|' + genId2()).digest('base64');
}


module.exports = generateKey;
