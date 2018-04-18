var  on = false;
setInterval(function() {
  on = !on;
  LED1.write(on);
}, 100);

var data = new Uint8Array([
  0x00, 0x00, 0x00, 0x00, // |      UID/BCC      | TT = Tag Type
  0x00, 0x00, 0x00, 0x00, // |      UID/BCC      | ML = NDEF Message Length
  0x00, 0x00, 0xFF, 0xFF, // | UID/BCC |   LOCK  | TF = TNF and Flags
  0xE1, 0x11, 0x7C, 0x0F, // |  Cap. Container   | TL = Type Legnth
  0x03, 0x14, 0xC1, 0x01, // | TT | ML | TF | TL | RT = Record Type
  0x00, 0x00, 0x00, 0x0D, // |  Payload Length   | IC = URI Identifier Code
  0x55, 0x03, 0x65, 0x73, // | RT | IC | Payload | Payload, see nfcRaw ex.
  0x70, 0x72, 0x75, 0x69, // |      Payload      |
  0x6E, 0x6F, 0x2E, 0x63, // |      Payload      |
  0x6F, 0x6D, 0xFE,       // | Payload | TB |    | TB = TLV Term Block
]);

var tag = require("NFCTag").create(data);
