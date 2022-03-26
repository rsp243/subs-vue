<template>
    <div class="teacher-reg" id="teacher-reg">
        <h2 @click="ToSelectSubject()">I'm teaching</h2>
        <div class="school under-school">
            <input type="checkbox" class="school-checkbox under-school-checkbox">
            <label>Under-school children</label>
        </div>
        <div class="school">
            <input type="checkbox" class="school-checkbox">
            <label>School pupils from</label>
            <input type="number" name="age_of_pupils_from" id="age_of_pupils_from" min="1" max="100">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L0.0717956 0.250001L13.9282 0.250002L7 13Z" fill="#4E1695"/>
            </svg>

            <label class="another_age">to</label>
            <input type="number" name="age_of_pupils_to" id="age_of_pupils_to" min="1" max="100">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L0.0717956 0.250001L13.9282 0.250002L7 13Z" fill="#4E1695"/>
            </svg>
            <label class="another_age">classes</label>


        </div>
        <div class="school high-school">
            <input type="checkbox" class="school-checkbox high-school-checkbox">
            <label>High school students</label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'teachers-registration-comp',
  data () {
        return { }
  },
  methods: {
        ToSelectSubject() {
            document.getElementById('teacher-reg').style.display = 'none';
            document.getElementById('select-subj').style.display = 'flex';
        }
  }
}
</script>

<style>
    .teacher-reg {
        display: none;
        flex-direction: column;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;

        color: #666666;
    }

    .teacher-reg h2 { 
        margin: 23px 22px 0 22px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;

        color: #666666;
    }

    .school {
        margin: 30px 22px 30px 22px;
        display: flex;
        align-items: center;
    }

    .school-checkbox {
        height: 28px;
        width: 28px;
        background: #C4C4C4;
        border-radius: 4px;
        position: absolute;
        opacity: 0;
    }

    .school-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .school-checkbox+label::before {
        content: '';
        display: inline-block;
        height: 28px;
        width: 28px;
        flex-shrink: 0;
        flex-grow: 0;
        background: #C4C4C4;
        border-radius: 4px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .school-checkbox:checked+label::before {
        background-color: #5E5E5E;
        background-image: url("https://cdn-icons.flaticon.com/png/512/5299/premium/5299035.png?token=exp=1648047563~hmac=a5791131adc29cd0193fe2c9b759a188");
    }

    #age_of_pupils_from, #age_of_pupils_to {
        margin: 0 5px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 3px 10px 3px 10px;
        border: 3px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }   

    .school svg {
        margin: 0 0 0 -30px;
    }

    .another_age {
        margin: 0 0 0 15px;
    }
</style>