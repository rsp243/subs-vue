<template>
    <div class="sign-up" id='sign-up-id'>
        <div class="error-message" style="display: none">
            <p>Пользователь с таким номероом телефона уже зарегистрирован. Проверьте номер или войдите с помощью соседнего меню</p>
        </div>
        <div class="sign-up-body">
            <input type="text" placeholder="Name" id="firstname">
            <input type="text" placeholder="Surname" id="surname">   
            <input type="tel" placeholder="Telephone-number" id="tel">
            <input type="password" placeholder="Password" id="Password">
        </div>
        <div class="platform-rules">By clicking "Continue", you agree to the platform rules</div>
        <div class="btn-shell">
            <button class="sign-up-btn" v-on:click="ToSelectSchool()">
                <div>Continue</div>
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 14L2.26338e-06 27.8564L1.93291e-06 0.143594L24 14Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint2_linear" x1="30.3333" y1="37" x2="-10.3333" y2="-10.6667" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D186F"/>
                        <stop offset="1" stop-color="#B073D5"/>
                    </linearGradient>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sign-up-comp',
  data () {
      return {}
  },
  methods: {
    ToSelectSchool() {
        document.getElementById('sign-up-id').style.display = 'none';
        document.getElementById('select-school').style.display = 'flex';
    }
  }
}
</script>

<style>
    .sign-up {
        flex: 0 1 50%;
        color:rgba(0, 0, 0, 1);
    }

    .sign-up input, .sign-in input{
        width: 288px;
        height: 36px;
        display: block;
        margin: 19px auto 0 auto;
        border-radius: 20px;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        padding: 7px;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        border: 0px;
    }

    .platform-rules {
        margin: 16px 0 0 20px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
        text-align: center;

        color: #4E1695;
        margin: 23px 0;
    }

    .sign-up-btn div {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #181818;

        margin: 40px;
    }

    .sign-up-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 16px auto 50px auto;
        background: #FFFFFF;
        border-color: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        height: 58px;
        width: 222px;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #181818;

    }

    .sign-up-btn span{
        display: block;
        float: right;
        margin-right: 10px;
        margin-top: 2px;
    }
</style>
