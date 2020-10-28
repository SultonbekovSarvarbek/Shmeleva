<template>
  <div>
    <div class="overlay"></div>
    <div class="modal">
      <div class="modal-content">
        <h2 class="modal__title">Заявка на бесплатную консультацию</h2>

        <form v-on:submit.prevent="send" class="modal__form">
          <div v-if="thanks" class="thanks__message">
            <p>Спасибо, ваша заявка принята!</p>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </div>
          <div v-else>
            <div class="modal__form-item">
              <div class="input">
                <input type="text" v-model="full_name" placeholder="ФИО" />
              </div>
            </div>
            <div class="modal__form-item">
              <div class="input">
                <input
                  type="text"
                  v-model="phone_number"
                  placeholder="Номер телефона"
                />
              </div>
            </div>
            <div class="modal__form-item">
              <div class="input">
                <input
                  type="text"
                  v-model="email"
                  placeholder="Электронная почта"
                />
              </div>
            </div>
            <div class="modal__form-item">
              <div class="input">
                <textarea
                  v-model="message"
                  placeholder="Коротко опишите ситуацию с которой Вам нужна помощь"
                />
              </div>
            </div>
            <div class="modal__form-item">
              <input
                type="checkbox"
                class="custom-checkbox"
                id="happy"
                name="happy"
                value="yes"
              />

              <label for="happy"
                >Даю согласие на обработку персональных данных</label
              >
            </div>
            <div class="modal__form-button">
              <button class="button button-full">Отправить</button>
            </div>
          </div>
        </form>
      </div>
      <div class="close-btn" @click="closeModal">
        <span class="close"></span>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      thanks: false,
      token: "1080699344:AAGqfkSWhcqzJH8384rSU7u8RdjO0sB-mS4",
      chatID: "-476234828",
      full_name: "",
      phone_number: "",
      email: "",
      message: "",
      data: null,
      data2: "",
      data3: "",
    };
  },
  computed: {},
  methods: {
    closeModal() {
      this.$emit("clicked", false);
    },

    async send() {
      var keys = ["ФИО", "Номер телефона", "Электронная почта", "Ситуация"];
      var values = [
        this.full_name,
        this.phone_number,
        this.email,
        this.message,
      ];
      var obj = {};
      for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }
      for (var key of Object.keys(obj)) {
        this.data3 = this.data3 + key + ": " + obj[key] + "%0A";
      }
      await axios
        .post(
          "https://api.telegram.org/bot1080699344:AAGqfkSWhcqzJH8384rSU7u8RdjO0sB-mS4/sendMessage?chat_id=-476234828&parse_mode=html&text=" +
            this.data3
        )
        .then(() => {
          // this.$emit("clicked", "message");
          this.thanks = true;
          // setTimeout(() => {
          //   this.thanks = false;
          // }, 2000);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  content: " ";
  height: 20px;
  width: 2px;
  background-color: rgb(255, 255, 255);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.modal {
  position: fixed;
  top: 50%;
  width: 600px;
  border-radius: 7px;
  max-width: 100%;
  z-index: 39;
  background-color: #fff;
  left: 50%;
  transform: translate(-50%, -50%);
  .close-btn {
    width: 50px;
    cursor: pointer;
    height: 50px;
    background-color: #720c0c;
    border-radius: 50px;
    position: absolute;
    right: -20px;
    top: -20px;
  }
  &__form-button {
    .button-full {
      width: 100%;
      color: #fff;
      background-color: #720c0c;
    }
    width: 100%;
  }
  &__form-item:last-child {
    padding: 0 1.4rem;
  }
  &__form-item:nth-child(5) {
    padding: 1rem;
  }
  &__form-item {
    margin-bottom: 1.2rem;
    .custom-checkbox + {
    }

    label {
      align-items: center;
      display: flex;

      font-weight: 400;
      letter-spacing: 0;
      color: #969696;
    }
    .input input,
    .input textarea {
      background: #f5f5f5;
      border-radius: 10px;

      height: 48px;
      border: none;
      width: 100%;
      padding: 0 1.4rem;

      resize: none;
      outline: none;
      border: 1px solid transparent;
    }
    .input textarea {
      height: auto;
      padding: 1.4rem;
    }
  }
  &-content {
    padding: 1rem;
  }
  &__title {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: #720c0c;

    margin-bottom: 2rem;
  }
}
.overlay {
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 29;
  background-color: rgba(115, 12, 12, 0.3);
}
.custom-checkbox {
  display: none;
  & + label::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    margin-right: 10px;
  }
  &:checked + label::before {
    border-color: #720c0c;
    background-color: #720c0c;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }
  &:not(:disabled):active + label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
  }
}
@media (max-width: 700px) {
  .modal {
    width: 400px;
  }
}
@media (max-width: 440px) {
  .modal {
    width: 310px;
    .close-btn {
      right: -10px;
      top: -10px;
      width: 30px;
      height: 30px;
      .close:before,
      .close:after {
        height: 12px;
      }
    }
  }
}
</style>