exports.throwErrorCode = function(codemsg,Othermsg) {
  var info = codemsg.split('|');
  Othermsg=Othermsg?Othermsg:"";
  throw new Error(JSON.stringify({
    code: 'hdkey-' + info[1],
    errorType:info[0],
    message: info[2],
    othermsg: Othermsg || ''
  }));
};


exports.errorList = {
  "amino_not_Registered": "amino_not_Registered|1|amino not Registered",
	"amino_buffer_is_wrong": "amino_buffer_is_wrong|2|amino buffer is wrong",
	"amino_prefixBytes_is_wrong": "amino_prefixBytes_is_wrong|3|amino prefixBytes is wrong",
	"amino_msg_is_wrong": "amino_msg_is_wrong|4|amino msg is wrong",
	"Mnemonic_not_worldlist": "Mnemonic_not_worldlist|21|Mnemonic does not conform to worldlist",
	"Password_error": "Password_error|31|Password error"
};
