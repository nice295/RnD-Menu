/**
 * Created by cheese on 2017. 2. 10..
 */

let message = {};

message.buttons = [ '🏠 1식당-점심',
                    '2식당-아침', '2식당-점심', "2식당-저녁",
                    "내일 뭐먹지?", "문의하기"];

message.buttonsType = () => {
    return {
        type: 'buttons',
        buttons: message.buttons
    }
};

message.baseType = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.photoType = (text, url_photo, label, url_button) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

message.messageButtonType = (text, label, url_button) => {
    return {
      message: {
        text: text,
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

module.exports = message;