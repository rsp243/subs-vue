<template>
    <div class="select-subj" id="select-subj">
        <h2>I'm teaching</h2>
        <div class="input-decor">
            <input type="text" placeholder="Type your subject" class="type-your-subject" id="type-your-subject">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" @click="ToSelectedSubject()">
                <path d="M7.5 13L0.138784 0.250001L14.8612 0.250002L7.5 13Z" fill="url(#paint0_linear_1224_443)"/>
                <defs>
                <linearGradient id="paint0_linear_1224_443" x1="-4.71875" y1="16.3646" x2="20.6042" y2="-5.23958" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D186F"/>
                <stop offset="1" stop-color="#B073D5"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="selected-subjects" v-for="i in rows" :key="i">
            <div class="subject" v-for="subject in subjects.slice(4 * (i - 1), 4 * i)" :key="subject">
                <div class="inscription">
                    {{ subject }}
                </div>
                <img src="@/assets/cancel1.svg" alt="" @click="RemoveSubject(subject)">
            </div>
        </div>
        <button class="to-self-registr" @click="ToSelfRegistration()">
            Continue
        </button>
    </div>
</template>

<script>
export default {
  name: 'select-subject-comp',
  data () {
        return { 
            subjects: ['math', 'physics', 'IT', 'PE'],
            rows: 1,
        }
  },
  methods: {
    ToSelectedSubject() {
        let newSubj = document.getElementById('type-your-subject').value;
        this.subjects.push(newSubj);
        this.rows = Math.ceil(this.subjects.length / 4); 
        let a = [];
        for (let i = 0; i < this.subjects.length; i++) {
            if (a.indexOf(this.subjects[i]) == -1){
                a.push(this.subjects[i]);
            }
        }    
        this.subjects = a;
    },
    RemoveSubject(subject) {
        this.subjects.splice(this.subjects.indexOf(subject), 1);
    },
    ToSelfRegistration() {
        document.getElementById('select-subj').style.display = 'none';
        document.getElementById('self-registr').style.display = 'flex';
    }
  }
}
</script>

<style>
    .select-subj {
        display: none;
        flex-direction: column;
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

    .select-subj h2 { 
        margin: 23px 22px 0 22px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: start;

        color: #666666;
    }

    .type-your-subject {
        border: 0px;
        padding: 5px 73px;
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .input-decor {
        display: flex;
        margin: 16px 32px 30px 22px;
        align-items: center;
        justify-content: center;
    }

    .input-decor svg {
        margin: 0 0 0 -30px;
    }

    .to-self-registr {
        padding: 15px 40px;
        margin: 15px auto 18px auto;
        border: 0;
        background: linear-gradient(271.15deg, #4E1695 0%, #9661B6 100.12%);
        box-shadow: 0px 4px 12px 2px rgba(175, 114, 213, 0.39);
        border-radius: 20px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        color: #FDF9FF;
    }
    
    .selected-subjects {
        display: flex;
        margin: 0px 22px;
        justify-content: center;
    }

    .subject {
        padding: 4px 10px;
        margin: 8px 7px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        display: flex;
    }

    .delete-subject {
        width: 20px;
        height: 20px;
    }

    .inscription {
        margin: 0 5px 0 0;
    }
</style>