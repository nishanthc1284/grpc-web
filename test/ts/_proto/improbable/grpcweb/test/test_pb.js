/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.improbable.grpcweb.test.CheckStreamClosedRequest', null, global);
goog.exportSymbol('proto.improbable.grpcweb.test.CheckStreamClosedResponse', null, global);
goog.exportSymbol('proto.improbable.grpcweb.test.ContinueStreamRequest', null, global);
goog.exportSymbol('proto.improbable.grpcweb.test.PingRequest', null, global);
goog.exportSymbol('proto.improbable.grpcweb.test.PingRequest.FailureType', null, global);
goog.exportSymbol('proto.improbable.grpcweb.test.PingResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.improbable.grpcweb.test.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.improbable.grpcweb.test.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.improbable.grpcweb.test.PingRequest.displayName = 'proto.improbable.grpcweb.test.PingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.improbable.grpcweb.test.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.improbable.grpcweb.test.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.improbable.grpcweb.test.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    responseCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errorCodeReturned: jspb.Message.getFieldWithDefault(msg, 3, 0),
    failureType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    checkMetadata: jspb.Message.getFieldWithDefault(msg, 5, false),
    sendHeaders: jspb.Message.getFieldWithDefault(msg, 6, false),
    sendTrailers: jspb.Message.getFieldWithDefault(msg, 7, false),
    streamIdentifier: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.improbable.grpcweb.test.PingRequest}
 */
proto.improbable.grpcweb.test.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.improbable.grpcweb.test.PingRequest;
  return proto.improbable.grpcweb.test.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.improbable.grpcweb.test.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.improbable.grpcweb.test.PingRequest}
 */
proto.improbable.grpcweb.test.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResponseCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setErrorCodeReturned(value);
      break;
    case 4:
      var value = /** @type {!proto.improbable.grpcweb.test.PingRequest.FailureType} */ (reader.readEnum());
      msg.setFailureType(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckMetadata(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendHeaders(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendTrailers(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.improbable.grpcweb.test.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.improbable.grpcweb.test.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.improbable.grpcweb.test.PingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponseCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getErrorCodeReturned();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getFailureType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCheckMetadata();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSendHeaders();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSendTrailers();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getStreamIdentifier();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.improbable.grpcweb.test.PingRequest.FailureType = {
  NONE: 0,
  CODE: 1,
  DROP: 2
};

/**
 * optional string value = 1;
 * @return {string}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 response_count = 2;
 * @return {number}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getResponseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setResponseCount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 error_code_returned = 3;
 * @return {number}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getErrorCodeReturned = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setErrorCodeReturned = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional FailureType failure_type = 4;
 * @return {!proto.improbable.grpcweb.test.PingRequest.FailureType}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getFailureType = function() {
  return /** @type {!proto.improbable.grpcweb.test.PingRequest.FailureType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.improbable.grpcweb.test.PingRequest.FailureType} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setFailureType = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool check_metadata = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getCheckMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setCheckMetadata = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional bool send_headers = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getSendHeaders = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setSendHeaders = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional bool send_trailers = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getSendTrailers = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setSendTrailers = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string stream_identifier = 8;
 * @return {string}
 */
proto.improbable.grpcweb.test.PingRequest.prototype.getStreamIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.improbable.grpcweb.test.PingRequest.prototype.setStreamIdentifier = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.improbable.grpcweb.test.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.improbable.grpcweb.test.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.improbable.grpcweb.test.PingResponse.displayName = 'proto.improbable.grpcweb.test.PingResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.improbable.grpcweb.test.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.improbable.grpcweb.test.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.improbable.grpcweb.test.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.improbable.grpcweb.test.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    counter: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.improbable.grpcweb.test.PingResponse}
 */
proto.improbable.grpcweb.test.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.improbable.grpcweb.test.PingResponse;
  return proto.improbable.grpcweb.test.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.improbable.grpcweb.test.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.improbable.grpcweb.test.PingResponse}
 */
proto.improbable.grpcweb.test.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.improbable.grpcweb.test.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.improbable.grpcweb.test.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.improbable.grpcweb.test.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.improbable.grpcweb.test.PingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCounter();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string Value = 1;
 * @return {string}
 */
proto.improbable.grpcweb.test.PingResponse.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.improbable.grpcweb.test.PingResponse.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 counter = 2;
 * @return {number}
 */
proto.improbable.grpcweb.test.PingResponse.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.improbable.grpcweb.test.PingResponse.prototype.setCounter = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.improbable.grpcweb.test.ContinueStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.improbable.grpcweb.test.ContinueStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.improbable.grpcweb.test.ContinueStreamRequest.displayName = 'proto.improbable.grpcweb.test.ContinueStreamRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.improbable.grpcweb.test.ContinueStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.improbable.grpcweb.test.ContinueStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamIdentifier: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.improbable.grpcweb.test.ContinueStreamRequest}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.improbable.grpcweb.test.ContinueStreamRequest;
  return proto.improbable.grpcweb.test.ContinueStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.improbable.grpcweb.test.ContinueStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.improbable.grpcweb.test.ContinueStreamRequest}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.improbable.grpcweb.test.ContinueStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.improbable.grpcweb.test.ContinueStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stream_identifier = 1;
 * @return {string}
 */
proto.improbable.grpcweb.test.ContinueStreamRequest.prototype.getStreamIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.improbable.grpcweb.test.ContinueStreamRequest.prototype.setStreamIdentifier = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.improbable.grpcweb.test.CheckStreamClosedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.improbable.grpcweb.test.CheckStreamClosedRequest.displayName = 'proto.improbable.grpcweb.test.CheckStreamClosedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.improbable.grpcweb.test.CheckStreamClosedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamIdentifier: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.improbable.grpcweb.test.CheckStreamClosedRequest}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.improbable.grpcweb.test.CheckStreamClosedRequest;
  return proto.improbable.grpcweb.test.CheckStreamClosedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.improbable.grpcweb.test.CheckStreamClosedRequest}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.improbable.grpcweb.test.CheckStreamClosedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stream_identifier = 1;
 * @return {string}
 */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.prototype.getStreamIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.improbable.grpcweb.test.CheckStreamClosedRequest.prototype.setStreamIdentifier = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.improbable.grpcweb.test.CheckStreamClosedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.improbable.grpcweb.test.CheckStreamClosedResponse.displayName = 'proto.improbable.grpcweb.test.CheckStreamClosedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.improbable.grpcweb.test.CheckStreamClosedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    closed: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.improbable.grpcweb.test.CheckStreamClosedResponse}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.improbable.grpcweb.test.CheckStreamClosedResponse;
  return proto.improbable.grpcweb.test.CheckStreamClosedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.improbable.grpcweb.test.CheckStreamClosedResponse}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.improbable.grpcweb.test.CheckStreamClosedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.improbable.grpcweb.test.CheckStreamClosedResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool closed = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.prototype.getClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.improbable.grpcweb.test.CheckStreamClosedResponse.prototype.setClosed = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.improbable.grpcweb.test);
